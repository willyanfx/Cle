import { UNITS_DICT } from '../constant';

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

export function result({ alphabet, length, speed, speedUnit }) {
	let newSpeed = speedUnit === 'hour' ? speed / 3600 : speed;
	let ramdomBits = getRandomBits(alphabet.length,  length);

	let probability = 1 / 100; //probability
	let generateForCollision = getGenerateForCollision(
        ramdomBits,
        probability
        );
    let timeToCollision = getTimeToCollision(generateForCollision, newSpeed);

	return formatDuration(timeToCollision);
}
