import React from 'react'

type Props = {
    className?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    style?: React.CSSProperties;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    isLeftIcon?: boolean;
    isRightIcon?: boolean;
    isTyping?: boolean;
    rightIconButtonClassName?: string;
    rightIconButtonStyle?: React.CSSProperties;
    leftIconButtonClassName?: string;
    leftIconButtonStyle?: React.CSSProperties;
    rightIconContainerClassName?: string;
    rightIconContainerStyle?: React.CSSProperties;
    leftIconContainerClassName?: string;
    leftIconContainerStyle?: React.CSSProperties;
    rightIconClick?: () => void;
    leftIconClick?: () => void;
}

type IconContainerProps = {
    className?: string;
    style?: React.CSSProperties;
    icon?: React.ReactNode;
    onClick?: () => void;
    arialLabel?: string;
    iconButtonClassName?: string;
    iconButtonStyle?: React.CSSProperties;
    iconContainerClassName?: string;
    iconContainerStyle?: React.CSSProperties;
}

const Input = (props: Props) => {

    const { className, type, placeholder, onChange, value, name, style, rightIcon, leftIcon, isLeftIcon, isRightIcon, 
            isTyping, leftIconContainerClassName, leftIconContainerStyle, rightIconContainerClassName, rightIconContainerStyle, 
            leftIconButtonClassName, leftIconButtonStyle, rightIconButtonClassName, rightIconButtonStyle, leftIconClick, rightIconClick
    } = props;

    const InputIconContainer = (props: IconContainerProps) => {

        const { icon, onClick, arialLabel, iconButtonClassName, iconButtonStyle, iconContainerClassName, iconContainerStyle } = props;

        return (
            <div 
                className={`
                    absolute border border-transparent 
                    top-1/2 -translate-y-2/4 
                    translate-x-0 flex flex-row 
                    items-center justify-center h-9 w-8
                    ${iconContainerClassName}
                `}
                style={iconContainerStyle}
            >
                <button
                    onClick={onClick}
                    aria-label={arialLabel}
                    className={`relative border-none outline-none border-0 ${iconButtonClassName}`}
                    style={iconButtonStyle}
                >
                    {icon}
                </button>
                
            </div>
        )
    }



    
    return (
        <div className="flex flex-row items-center text-xs font-medium relative max-h-fit border rounded overflow-y-hidden">
            {
                isLeftIcon && (
                    <InputIconContainer
                        icon={leftIcon}
                        iconContainerClassName={leftIconContainerClassName}
                        iconContainerStyle={leftIconContainerStyle}
                        iconButtonClassName={leftIconButtonClassName}
                        iconButtonStyle={leftIconButtonStyle}
                        onClick={leftIconClick}
                    />
                )
            }
            <label htmlFor={name}>
                <input
                    name={name}
                    id={`${name}-input`}
                    type={type && type ? type : 'text'}
                    className={`border-transparent focus:border-transparent focus:ring-0 ${className}`}
                    style={style}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                />
            </label>
            {
                isRightIcon && (
                    <InputIconContainer
                        icon={rightIcon}
                        iconContainerClassName={rightIconContainerClassName}
                        iconContainerStyle={rightIconContainerStyle}
                        iconButtonClassName={rightIconButtonClassName}
                        iconButtonStyle={rightIconButtonStyle}
                        onClick={rightIconClick}
                    />
                )
            }
        </div>
    )
}

export default Input