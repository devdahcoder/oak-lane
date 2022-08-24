import React from "react";

type Props = {
    width?: string;
    height?: string;
    className?: string;
    fillColor?: string;
    fillType?: string;
}

const CopyRight = (props: Props) => {
    const svgStyle = props?.className ?? '';
    const svgWidth = props?.width ?? '20';
    const svgHeight = props?.height ?? '20';
    const fillStyle = props?.fillType ?? 'none';
    const fillColorStyle = props?.fillColor ?? '#FFFFFF';
    return (
        <svg
            className={svgStyle}
            width={svgWidth}
            height={svgHeight}
            viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
            fill={fillStyle}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
            d="M9.99984 18.3332C14.5173 18.3332 18.3332 14.5173 18.3332 9.99984C18.3332 5.48234 14.5173 1.6665 9.99984 1.6665C5.48234 1.6665 1.6665 5.48234 1.6665 9.99984C1.6665 14.5173 5.48234 18.3332 9.99984 18.3332ZM9.99984 3.33317C13.614 3.33317 16.6665 6.38567 16.6665 9.99984C16.6665 13.614 13.614 16.6665 9.99984 16.6665C6.38567 16.6665 3.33317 13.614 3.33317 9.99984C3.33317 6.38567 6.38567 3.33317 9.99984 3.33317Z"
            fill={fillColorStyle}
            />
            <path
            d="M10.0002 14.1668C10.751 14.1668 12.151 14.0268 13.0893 13.0902L11.911 11.9102C11.5418 12.2793 10.8268 12.5002 10.0002 12.5002C8.64516 12.5002 7.50016 11.3552 7.50016 10.0002C7.50016 8.64516 8.64516 7.50016 10.0002 7.50016C10.8277 7.50016 11.5427 7.721 11.911 8.08933L13.0893 6.911C12.1518 5.9735 10.751 5.8335 10.0002 5.8335C7.70266 5.8335 5.8335 7.70266 5.8335 10.0002C5.8335 12.2977 7.70266 14.1668 10.0002 14.1668Z"
            fill={fillColorStyle}
            />
        </svg>
        )
};

export default CopyRight;