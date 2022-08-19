/* eslint-disable @next/next/no-img-element */
import React from 'react'

type Props = {
    className?: string;
    style?: React.CSSProperties;
    images: Record<string, any>[];
    isImagesHeader?: boolean;
    headerText?: string;
    headerClassName?: string;
}

const ImageList = (props: Props) => {
    return (
        <div style={props?.style} className={`${props?.className}`}>

            {props?.isImagesHeader && (<div className={`text-lg font-semibold tracking-wider text-gray-300 ${props?.headerClassName}`}><p>{props?.headerText}</p></div>)}
            <div className="flex flex-row items-center justify-between space-x-12">
                {props?.images?.map((image, index) => {
                    return (
                        <div key={index}>
                            <img className="w-full h-full object-contain" src={image?.imageUrl} alt={image?.imageUrl} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ImageList