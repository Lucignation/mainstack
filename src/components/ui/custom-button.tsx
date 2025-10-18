"use client"

const CustomButton = ({ label, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick}>{label}</button>
    );
};

export default CustomButton;