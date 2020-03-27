import React, { useState, useEffect } from 'react';
import { MAX_LENGTH, MIN_LENGTH } from '../../constant';
import {
	SliderInput,
	SliderTrack,
	SliderTrackHighlight,
	SliderHandle,
} from '@reach/slider';
import '@reach/slider/styles.css';
import { useStrengthIndicator } from '../../hooks';
import Strength from '../Strength';

import styles from './Slider.module.scss';

export function Slider() {
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
		<div>
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
		</div>
	);
}
