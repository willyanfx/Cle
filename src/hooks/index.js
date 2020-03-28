import { useState, useEffect, useRef } from 'react';
import ShuffleText from 'shuffle-text';

export function useStrengthIndicator() {
    const [color, setColor] = useState('green');
    const [strength, setStrength] = useState(4);
    const [strengthStatus, setStrengthStatus] = useState();
    let { setBackgroundColor } = useBackground();

    useEffect(() => {
        if (strength <= 10) {
            setColor('tomato');
            setStrengthStatus('Weak');
        } else if (strength >= 11 && strength <= 12) {
            setColor('yellow');
            setStrengthStatus('Fairly');
        } else {
            setColor('green');
            setStrengthStatus('Strong');
        }
    }, [strength]);

    useEffect(() => {
        setBackgroundColor(color);
    }, [color, setBackgroundColor]);


    return { setStrength, strengthStatus, color };
}

export function useBackground() {
    const [backgroundColor, setBackgroundColor] = useState();
    let rootRef = useRef() ;

    useEffect(() => {
        const updateRootElement = () => {
            let node = rootRef.current;
            if (!node) {
                const root = document.getElementById('root');
                node = root;
            }
            node.setAttribute('style', `--background: ${backgroundColor};`);
        };
        updateRootElement();
    }, [backgroundColor, rootRef]);

    return { setBackgroundColor };
}

export function useAnimation(ref) {
    useEffect(() => {
		let text = new ShuffleText(ref.current);
		text.duration = 3000;
		text.emptyCharacter = '';
		// text.sourceRandomCharacter = '1234567890';
		text.start();
		return () => text.stop();
	}, [ref]);
}
