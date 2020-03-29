import { UNITS_DICT, CHAR } from '../constant';

export function getRandomBits(alphabetLength, size) {
	return size * (Math.log(alphabetLength) / Math.LN2);
}

export function getGenerateForCollision(randomBits, probability) {
	return Math.sqrt(
		2 * Math.pow(2, randomBits) * Math.log(1 / (1 - probability))
	);
}

export function getTimeToCollision(generateForCollision, speedPerSecond) {
	return Math.floor(generateForCollision / speedPerSecond);
}

function pluralize(roundedCurrent) {
	return roundedCurrent === 1 ? '' : 's';
}

export function formatDuration(seconds) {
	let current = seconds;
	for (let index = 0; index < UNITS_DICT.length; index++) {
		let timeName = UNITS_DICT[index];

		current /= timeName.num;

		if (!UNITS_DICT[index + 1] || current / UNITS_DICT[index + 1].num < 1) {
			let roundedCurrent = Math.round(current);

			return `~ ${roundedCurrent} ${timeName.ending +
				pluralize(roundedCurrent)}`;
		}
	}
}

export function result({ alphabet, length, speed, unit }) {
	let newSpeed = unit === 'hour' ? speed / 3600 : speed;
	let ramdomBits = getRandomBits(alphabet.length, length);
	let probability = 1 / 100; //probability
	let generateForCollision = getGenerateForCollision(ramdomBits, probability);
	let timeToCollision = getTimeToCollision(generateForCollision, newSpeed);

	return formatDuration(timeToCollision);
}

export function limitCalls(fn, limit = 20) {
	let calls = 0;
	return (...args) => {
		calls++;
		if (calls > limit) {
			throw new Error(
				`EASY THERE: You've called "${fn.name}" too many times too quickly`
			);
		} else {
			setTimeout(() => {
				calls = 0;
			}, 3000);
		}

		return fn(...args);
	};
}

export function getCharacters(checked) {
    let char = '';
	for (const key in checked) {
		if (checked[key]) {
			char += CHAR[key];
		}
	}
	return char;
}

export function generatePassword(char, size) {
	let mask = (2 << (Math.log(char.length - 1) / Math.LN2)) - 1;
    let step = -~((1.6 * mask * size) / char.length);

    return () => {
        let id = ''
        while (true) {
            let bytes = crypto.getRandomValues(new Uint8Array(step))
            let i = step;
            while (i--) {
                id += char[bytes[i] & mask] || ''
                if(id.length === +size) return id
            }
        }
    }
}
