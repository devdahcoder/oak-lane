import React from 'react';

type Props = {
    className?: string;
    width?: string;
    height?: string;
    fillColor?: string;
}

const Announcement = (props: Props) => {

    const { className, fillColor, height, width} = props;

    const svgStyle = className ?? '';
    const svgWidth = width ?? '20';
    const svgHeight = height ?? '19';
    const fillStyle = fillColor ?? '#86A467';

    return (
        <svg 
            className={svgStyle}
            width={svgWidth} 
            height={svgHeight} 
            viewBox={`0 0 ${svgWidth} ${svgHeight}`} 
            fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                    d="M18.664 0.47806L6 5.00006V12.0001L6.748 12.2671L5.621 14.5211C5.49264 14.7773 5.42088 15.0582 5.41059 15.3446C5.4003 15.631 5.45171 15.9163 5.56135 16.1811C5.67099 16.4459 5.83628 16.684 6.04603 16.8793C6.25578 17.0746 6.50507 17.2225 6.777 17.3131L10.861 18.6741C11.3179 18.823 11.8129 18.8038 12.2568 18.6199C12.7007 18.436 13.0643 18.0995 13.282 17.6711L14.585 15.0651L18.664 16.5221C18.8148 16.5759 18.9764 16.5927 19.1351 16.571C19.2937 16.5494 19.4449 16.49 19.5758 16.3978C19.7068 16.3055 19.8136 16.1832 19.8875 16.0411C19.9613 15.899 19.9999 15.7412 20 15.5811V1.41906C19.9999 1.25891 19.9613 1.10114 19.8875 0.959019C19.8136 0.816897 19.7068 0.69458 19.5758 0.602361C19.4449 0.510142 19.2937 0.450717 19.1351 0.429086C18.9764 0.407455 18.8148 0.424251 18.664 0.47806ZM11.493 16.7771L7.41 15.4161L8.645 12.9451L12.687 14.3891L11.493 16.7771ZM2 12.0001H4V5.00006H2C0.897 5.00006 0 5.89706 0 7.00006V10.0001C0 11.1031 0.897 12.0001 2 12.0001Z"
                    fill={fillStyle}
                />
        </svg>
    )
}
export default Announcement