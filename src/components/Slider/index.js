import React, { useState, useEffect } from 'react';
import { MAX_LENGTH, MIN_LENGTH, LENGTH } from '../../constant';
import {
	SliderInput,
	SliderTrack,
	SliderTrackHighlight,
	SliderHandle,
} from '@reach/slider';
import '@reach/slider/styles.css';
import { useStrengthIndicator } from '../../hooks';
import Strength from '../Strength';
import { useAppState } from '../../appState';
import { limitCalls } from '../../helpers';

import styles from './Slider.module.scss';

export function Slider() {
	const [sliderValue, setSliderValue] = useState(LENGTH);
	let [state, setState] = useAppState();

	let { setStrength, strengthStatus } = useStrengthIndicator();
	const handleSlider = value => {
		setSliderValue(value);
		setStrength(value);
		limitCalls(setState({ ...state, length: sliderValue }));
	};

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
				<div className={styles.Number}>{sliderValue}</div>
			</div>
			<Strength>{strengthStatus}</Strength>
		</div>
	);
}
