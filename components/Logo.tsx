import React from 'react';
import MainLogo from '../public/Icons/Logo';

type Props = {
    className?: string;
    style?: React.CSSProperties;
    icon?: React.ReactNode;
    title?: string;
    titleClassName?: string;
    titleStyle?: React.CSSProperties;
    iconClassName?: string;
}

const Logo = (props: Props) => {
    const { className, style, icon, title, titleStyle, titleClassName, iconClassName } = props;
    return (
        <div style={style} className={`flex flex-row items-center justify-center ${className}`}>
            {icon ?? <MainLogo className={iconClassName} />}

            <span style={titleStyle} className={`text-large font-medium text-dark-100 ml-2 ${titleClassName}`}>{title}</span>
        </div>
    )
}

export default Logo