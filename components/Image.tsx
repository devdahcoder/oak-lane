/* eslint-disable @next/next/no-img-element */
import React from 'react';

type Props = {
    className?: string;
    imageLink?: string;
    alt?: string;
    style?: React.CSSProperties;
}

const Image = (props: Props) => {

    const { alt, className, imageLink, style } = props;

    return (
        <div className="block w-full">
            <div style={style} className={`relative block overflow-hidden pb-[100%] h-[10px] ${className}`}>
                <img src={imageLink} alt={alt} className="w-full h-full absolute top-0 left-0 select-none object-cover" />
            </div>
        </div>
    )
}

export default Image