// import { Slider } from "../Slider";
import { GroupCheckbox } from '../Checkbox';
import { Password } from '../Password';
import { Result } from '../Result';
// import styles from './Layout.module.scss';
import { Info } from '../Info';
import { Slider } from '../ui/slider';
import { Checkbox } from '../ui/checkbox';

export function Layout() {
    return (
        <div className="min-h-screen bg-green-500 grid grid-rows-2 items-start justify-center p-4 gap-5">
            <div className="w-full max-w-2xl bg-green-500 border-none shadow-none">
                <h1>Resist hacks by Generate a secure password</h1>
                <Password />
                <div className="flex items-center gap-2">
                    <Slider
                        max={32}
                        min={8}
                        step={1}
                        className="flex-1"
                    />
                    <span className="text-white min-w-[2ch]">32</span>
                </div>
                <div className="flex gap-6 justify-center">
                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="letters"
                            checked={true}
                            // onCheckedChange={}
                        />
                        <label
                            htmlFor="letters"
                            className="text-white"
                        >
                            Letters
                        </label>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="digits"
                            checked={true}
                            // onCheckedChange={}
                        />
                        <label
                            htmlFor="digits"
                            className="text-white"
                        >
                            Digits
                        </label>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id="symbols"
                            checked={true}
                            // onCheckedChange={}
                        />
                        <label
                            htmlFor="symbols"
                            className="text-white"
                        >
                            Symbols
                        </label>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col justify-start">
                <Result />
                <Info />
            </div>
        </div>
    );
}
