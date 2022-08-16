import React from 'react';


type Props = {
    text?: string;
    className?: string;
    style?: React.CSSProperties;
    isRightIcon?: boolean;
    isLeftIcon?: boolean;
    icon?: React.ReactNode;
    iconContainerClassName?: string;
    iconContainerStyle?: React.CSSProperties;
}

const Button = (props: Props) => {

    const Icon = (props: {icon: React.ReactNode; iconContainerClassName?: string; iconContainerStyle?: React.CSSProperties;}) => (
        
        <span style={props?.iconContainerStyle} className={`${props?.iconContainerClassName}`}>{props?.icon}</span>
    )

    return (
        <div>
            <button style={props?.style} className={`outline-none border-0 flex items-center ${props?.className}`}>
                {props?.isLeftIcon && <Icon icon={props?.icon} iconContainerClassName={props?.iconContainerClassName} iconContainerStyle={props?.iconContainerStyle} />}
                {props?.text}
                {props?.isRightIcon && <Icon icon={props?.icon} iconContainerClassName={props?.iconContainerClassName} iconContainerStyle={props?.iconContainerStyle} />}
            </button>
        </div>
    )
}

export default Button