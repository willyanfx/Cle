import React from "react";
import styles from "./Strength.module.scss";
import { StrongIcon, FairlyIcon, WeakIcon } from "../Assets/Icons";

export default function Strength({ level }) {
  let icon;
  switch (level) {
    case "Strong":
      icon = <StrongIcon />;
      break;
    case "Fairly":
      icon = <FairlyIcon />;
      break;
    case "Weak":
      icon = <WeakIcon />;
      break;
    default:
      break;
  }

  return (
    <div className={styles.Strength}>
      <span className={styles.Icon}>{icon}</span>
      <span>{level}</span>
    </div>
  );
}
