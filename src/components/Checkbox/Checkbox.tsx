// import styles from './Checkbox.module.scss';

type CheckboxProps = {
    label: string;
    checked: boolean;
    onChange: () => void;
};

export default function Checkbox({
    label,
    checked,
    onChange,
}: CheckboxProps) {
    let hasLabel = label && <span>{label}</span>;
    return (
        <label>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            <svg viewBox="0 0 21 21">
                <polyline points="5 10.75 8.5 14.25 16 6"></polyline>
            </svg>
            {hasLabel}
        </label>
    );
}
