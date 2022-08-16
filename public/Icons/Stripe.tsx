import * as React from "react";

type Props = {
    text?: string;
    className?: string;
    style?: React.CSSProperties;
    width?: string;
    height?: string;
    stroke?: string;
    strokeWidth?: string;
    strokeLinecap?: 'butt' | 'round' | 'square' | 'inherit';
    strokeLinejoin?: string;
    fill?: string;
}


const Stripe = (props: Props) => {

    const {text, className, style, width, height, stroke, strokeWidth, strokeLinecap, strokeLinejoin, fill} = props;

    const svgStyle = className ?? '';
    const svgWidth = width ?? '245';
    const svgHeight = height ?? '13';
    const fillStyle = fill ?? 'none';
    const strokeStyle = stroke ?? '#A9C58B';
    const svgStrokeWidth = strokeWidth ?? '10';
    const strokeLinecapStyle = strokeLinecap ?? 'round';

    return (
        <svg
            className={svgStyle}
            width={svgWidth}
            height={svgHeight}
            viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
            fill={fillStyle}
            xmlns="http://www.w3.org/2000/svg"
            style={style}
        >
            <path
            d="M5 6.34962C57.4626 6.34962 109.876 5.48669 162.34 5.48669C188.175 5.48669 213.873 7.21254 239.715 7.21254"
            stroke={strokeStyle}
            strokeWidth={svgStrokeWidth}
            strokeLinecap={strokeLinecapStyle}
            />
        </svg>
    )
};

export default Stripe;
