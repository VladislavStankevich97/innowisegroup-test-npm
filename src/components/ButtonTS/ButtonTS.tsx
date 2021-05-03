import * as React from 'react';

interface ButtonsTS {
    backgroundColor?: string;
    label?: string;
    height?: number;
    width?: number;
}

const ButtonTS: React.FC<ButtonsTS> = ({ backgroundColor, label, height, width }) => {
    return (
        <button style={{ backgroundColor: backgroundColor, height: height, width: width }}>
            {label}
        </button>
    )
}

export default ButtonTS
