import { useState, useEffect, useRef } from "react";

export function useStrengthIndicator() {
  const [color, setColor] = useState("#00ac53");
  const [strength, setStrength] = useState();
  const [strengthStatus, setStrengthStatus] = useState();
  let { setBackgroundColor } = useBackground();

  useEffect(() => {
    if (strength <= 10) {
      setColor("#ee2d29");
      setStrengthStatus("Weak");
    } else if (strength >= 11 && strength <= 12) {
      setColor("#f8ae2c");
      setStrengthStatus("Fairly");
    } else {
      setColor("#00ac53");
      setStrengthStatus("Strong");
    }
  }, [strength]);

  useEffect(() => {
    setBackgroundColor(color);
  }, [color, setBackgroundColor]);

  return { setStrength, strengthStatus, color };
}

export function useBackground() {
  const [backgroundColor, setBackgroundColor] = useState();
  let rootRef = useRef();

  useEffect(() => {
    const updateRootElement = () => {
      let node = rootRef.current;
      if (!node) {
        const root = document.getElementById("root");
        node = root;
      }
      node.setAttribute("style", `--background: ${backgroundColor};`);
    };
    updateRootElement();
  }, [backgroundColor, rootRef]);

  return { setBackgroundColor };
}
