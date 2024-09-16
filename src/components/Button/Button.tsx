// export const Button = ({ onClick }) => {
import React from "react";

interface ButtonProps {
    label: string;
    onClick: () => void; // Handle onClick event
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return (
        <button className="py-2 px-8 my-4 rounded-full max-w-60 text-white bg-sky-500 hover:bg-sky-700" onClick={onClick}>
            {label}
        </button>
    );
}

export default Button;

// I tried implementing a 'type' prop into the button but ran into HTMLButtonElement isn't assignable to type 'submit' etc...

/*
export const Button = ({ onClick, type } : {onClick: React.MouseEventHandler<HTMLButtonElement>, type: React.ButtonHTMLAttributes<HTMLButtonElement>}) => {
    return (
        <button type={type} className="py-2 px-8 my-4 rounded-full max-w-60 text-white bg-sky-500 hover:bg-sky-700" onClick={onClick}>
            Calculate 1RM
        </button>
    );
}
*/