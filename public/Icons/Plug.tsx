import React from 'react';

type Props = {
    className?: string;
    width?: string;
    height?: string;
    fillColor?: string;
}

const Plug = (props: Props) => {

    const { className, fillColor, height, width} = props;

    const svgStyle = className ?? '';
    const svgWidth = width ?? '18';
    const svgHeight = height ?? '20';
    const fillStyle = fillColor ?? '#86A467';

    return (
        <svg 
            className={svgStyle}
            width={svgWidth} 
            height={svgHeight} 
            viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
            fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                    d="M0 6H2V11C2 13.206 3.794 15 6 15H8V20H10V15H12C14.206 15 16 13.206 16 11V6H18V4H0V6ZM4 0H6V3H4V0ZM12 0H14V3H12V0Z"
                    fill={fillStyle}
                />
        </svg>
    )
}
export default Plug