import React, { useState } from 'react';
import styles from './App.module.scss';
import {
    SliderInput,
    SliderTrack,
    SliderTrackHighlight,
    SliderHandle,
} from '@reach/slider';
import { MAX_LENGTH, MIN_LENGTH } from './constant';
import { useStrengthIndicator } from './helpers';
import Checkbox from './components/Checkbox';
import Password from './components/Password';

function App() {
    const [sliderValue, setSliderValue] = useState(0);
    let { setStrength, strengthStatus } = useStrengthIndicator();
    function handleSlider(value) {
        setSliderValue(value);
        setStrength(value);
    }

    return (
        <div className={styles.App}>
            <div className={styles.container}>
                <div>
                    <header className="App-header">
                        <h1>Resist hacks by Generate a secure password</h1>
                    </header>
                </div>
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
                <h3>{strengthStatus}</h3>
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

                <div className={styles.App_facts}>
                    <h2>A Few Values to Feel the Scale</h2>
                    <ul>
                        <li>Human lifespan: ~79 years.</li>
                        <li>
                            Life on Earth will be impossible in ~1.1 billion
                            years.
						</li>
                        <li>Age of the Earth: ~4.543 billion years.</li>
                        <li>Age of the Universe: ~13.799 billion years.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default App;
