import React, { useState, useEffect } from 'react';
import styles from './App.module.scss';
import {
	SliderInput,
	SliderTrack,
	SliderTrackHighlight,
	SliderHandle,
} from '@reach/slider';
import { MAX_LENGTH, MIN_LENGTH, LENGTH, ALPHABET } from './constant';
import { useStrengthIndicator } from './hooks';
import Checkbox from './components/Checkbox';
import Password from './components/Password';
import { Calc } from './components/Calc';
import Info from './components/Info';
import Strength from './components/Strength';
import { result } from './helpers';

let initialState = {
	speedUnit: 'hour',
	speed: 1000,
	length: LENGTH,
	alphabet: ALPHABET,
};

function App() {
	const [sliderValue, setSliderValue] = useState(0);
	let { setStrength, strengthStatus } = useStrengthIndicator();
	function handleSlider(value) {
		setSliderValue(value);
		setStrength(value);
	}

	useEffect(() => {
		document.title = `Strength: ${strengthStatus}`;
	}, [strengthStatus]);

	return (
		<div className={styles.App}>
			<div className={styles.container}>
				<header>
					<h1>Resist hacks by Generate a secure password</h1>
				</header>
				<Password />
				<div className={styles.Slider}>
					<SliderInput
						min={MIN_LENGTH}
						max={MAX_LENGTH}
						step={1}
						value={sliderValue}
						onChange={value => handleSlider(value)}>
						<SliderTrack>
							<SliderTrackHighlight />
							<SliderHandle />
						</SliderTrack>
					</SliderInput>

					{sliderValue}
				</div>
				<Strength>{strengthStatus}</Strength>
				<ul className={styles.CheckBoxes}>
					<li>
						<Checkbox
							label="Letters"
							onChange={() => console.log('letter')}
						/>
					</li>
					<li>
						<Checkbox
							label="Digits"
							onChange={() => console.log('Digits')}
						/>
					</li>
					<li>
						<Checkbox
							label="Symbols"
							onChange={() => console.log('Symbols')}
						/>
					</li>
				</ul>

				<Calc />
				<Info />
			</div>
		</div>
	);
}

export default App;
