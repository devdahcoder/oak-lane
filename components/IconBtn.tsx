import React from 'react';

type IconBtnProps = {
    onClick?: () => void;
    className?: string;
    style?: React.CSSProperties;
    containerStyle?: React.CSSProperties;
    containerClassName?: string;
    icon?: React.ReactNode;
}


const IconBtn = (props: IconBtnProps) => {

    const { onClick, className, style, containerStyle, containerClassName, icon } = props;

    return (
        <div style={containerStyle} className={`flex flex-row items-center justify-center ${containerClassName}`}>
            <button onClick={onClick} style={style} className={`flex flex-row items-center justify-center border-0 outline-0 w-full h-full ${className}`}>
                {icon}
            </button>
        </div>
    )
}

export default IconBtn;