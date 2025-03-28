import React from "react";

const Button = ({ children, color = "blue", onClick, className = "" }) => {
    const baseStyles = "px-4 py-1 rounded-md text-white font-semibold transition duration-300 hover:brightness-110";

    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: color }}
            className={`${baseStyles} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;