import React from 'react'
import {Slider } from '../Slider'
import { GroupCheckbox } from '../Checkbox';
import { useAppState } from '../../appState';

export default function Controls() {
    return (
		<div>
			<Slider />
            <GroupCheckbox />
		</div>
	);
}
