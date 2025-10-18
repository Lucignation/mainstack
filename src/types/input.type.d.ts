interface InputProps {
    label: string;
    name: string;
    onChange: (value: string) => void;
    onBlur: () => void;
    defaultValue: string;
    placeholder: string;
    isDisabled: boolean;
    errorMessage: string;
}