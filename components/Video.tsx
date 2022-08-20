import React from 'react'

type Props = {
    autoPlay?: boolean
    muted?: boolean
    loop?: boolean
    src: string
    type: string
    controls?: boolean
    className?: string
    style?: React.CSSProperties
    disablePictureInPicture?: boolean
    height?: string
    width?: string
    useRef?: React.RefObject<HTMLVideoElement>

}

const Video = (props: Props) => {
    return (
        <video 
            ref={props.useRef}
            className={`block ${props?.className}`} 
            style={props?.style}
            autoPlay={props?.autoPlay} muted={props?.muted} loop={props?.muted}
            controls={props?.controls} disablePictureInPicture={props?.disablePictureInPicture}
            height={props?.height} width={props?.width}
        >
            <source src={props?.src} type={props?.type} />
        </video>
    )
}

export default Video