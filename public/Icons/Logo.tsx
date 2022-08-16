import React from 'react';

type Props = {
    className?: string;
    width?: string;
    height?: string;
}

const MainLogo = ({className, width, height }: Props) => {

    const svgStyle = className ?? '';
    const svgWidth = width ?? '58';
    const svgHeight = height ?? '45';

    return (
        <svg 
            className={svgStyle}
            width={svgWidth} 
            height={svgHeight} 
            viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
            fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d="M4.76961 4.2636L50.6483 0L0 31.4552L4.76961 4.2636Z" fill="#A9C58B"/>
            <path d="M52.3877 44.625L57.2945 5.26917L33.8765 44.8404L52.3877 44.625Z" fill="#011D28"/>
        </svg>
    )
}
export default MainLogo;

