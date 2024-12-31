import { useState, useEffect } from 'react';
// import styles from './Result.module.scss';
import { useAppState } from '../../appState';
import { result, getCharacters } from '../../helpers';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export function Result() {
    const { checked, length } = useAppState();
    const [value, setValue] = useState(0);
    const [unit, setUnit] = useState('hour');
    const [speed, setSpeed] = useState(1000);

    useEffect(() => {
        let alphabet = getCharacters(checked);
        setValue(result({ alphabet, length, speed, unit }));
    }, [checked, length, speed, unit]);

    return (
        <div>
            <div>
                <span>
                    speed:
                    <Input
                        type="number"
                        min={1000}
                        value={speed}
                        onChange={(e) =>
                            setSpeed(Number(e.target.value))
                        }
                    />
                    passwords per
                </span>
                <span>
                    <Button
                        data-time={unit === 'hour'}
                        onClick={() => setUnit('hour')}
                    >
                        hour
                    </Button>
                    /
                    <Button
                        data-time={unit === 'second'}
                        onClick={() => setUnit('second')}
                    >
                        second
                    </Button>
                </span>
            </div>
            <div>
                <span>{value} </span>
                needed, in order to have a 1% probability of at least
                one collision.
            </div>
        </div>
    );
}
