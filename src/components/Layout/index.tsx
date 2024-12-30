// import { Slider } from "../Slider";
import { GroupCheckbox } from '../Checkbox';
import { Password } from '../Password';
import { Result } from '../Result';
import styles from './Layout.module.scss';
import { Info } from '../Info';
import SvgImg from '../Assets/peep-1.svg';
import { Slider } from '../ui/slider';

export function Layout() {
    return (
        <div className={styles.Container}>
            <div className={styles.Password}>
                <h1>Resist hacks by Generate a secure password</h1>
                <Password />
                <div className={styles.Wrapper}>
                    <Slider />
                    <GroupCheckbox />
                </div>
            </div>
            <div className={styles.Info}>
                <div className={styles.Result}>
                    <Result />
                    <Info />
                </div>
                <div className={styles.Illustration}>
                    <img src={SvgImg} alt="" />
                </div>
            </div>
        </div>
    );
}
