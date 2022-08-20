import React, { useState, useRef, useEffect } from 'react'
import Video from '../Video';
import { BsPlay, BsPause } from 'react-icons/bs';
import { IoVolumeHighOutline, IoVolumeMuteOutline } from 'react-icons/io5';

type Props = {}

type videoControlProps = {
    className?: string;
    buttonClassName?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}

const Participant = (props: Props) => {

    const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false);
    const [isVideoMuted, setIsVideoMuted] = useState<boolean>(true);

    const videoElement = useRef<HTMLVideoElement>(null) as React.MutableRefObject<HTMLVideoElement>;

    const handleVideoPlay = () => {
        setIsVideoPlaying(!isVideoPlaying);
    }

    const handleIsVideoMuted = () => {
        setIsVideoMuted(!isVideoMuted);
    }

    useEffect(() => {
        let isSubscribed = true;

        if (isSubscribed) {
            if (isVideoPlaying) {
                videoElement.current?.play();
            } else {
                videoElement.current?.pause();
            }
        }

        return () => {
            isSubscribed = false;
        }
    }, [isVideoPlaying, videoElement])


    useEffect(() => {
        let isSubscribed = true;

        // const videoMutedElement = videoElement && videoElement.current.muted;

        if (isSubscribed) {
            if (isVideoMuted) {
                videoElement.current.muted = false
            } else {
                videoElement.current.muted = true
            }
        }

        return () => {
            isSubscribed = false;
        }
    }, [isVideoMuted, videoElement])


    const VideoControlContainer = (props: videoControlProps) => {
        return (
            <div className={`flex flex-row items-center justify-center absolute z-20 rounded-full  ${props?.className}`}>
                <button onClick={props?.onClick} className={`flex flex-row items-center justify-center w-full h-full bg-white rounded-full border-0 border-none outline-0 outline-none transition-all ease-linear delay-150 duration-300 ${props?.buttonClassName}`}>
                    {props?.children}
                </button>
            </div>
        )
    }

    return (
        <div className="group flex flex-col items-center font-cabin py-36 space-y-16">
            <div className="flex flex-row items-center text-[2.7rem] font-bold tracking-wide">
                <h1>Everything you need to engage your participants.</h1>
            </div>
            <div className="relative flex flex-row items-center rounded-md w-full max-w-[63rem] h-[32rem]">

                <VideoControlContainer 
                    className={"w-20 h-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"}
                    buttonClassName={`${isVideoPlaying ? 'invisible' : ''} group-hover:visible`}
                    onClick={handleVideoPlay}
                >
                        {
                            isVideoPlaying ? <BsPause className="text-green-100 w-16 h-16" /> : <BsPlay className="text-green-100 w-16 h-16" />
                        }
                </VideoControlContainer>

                <Video 
                    className={`block w-full h-full rounded-md absolute left-0 top-0 object-cover z-10`}
                    src={`./Videos/elephant.mp4`}
                    type={`video/mp4`} 
                    muted={isVideoMuted}
                    loop={false}
                    autoPlay={false}
                    useRef={videoElement}
                />

                <VideoControlContainer 
                    className={"w-7 h-7  bottom-4 left-3 "}
                    buttonClassName={""}
                    onClick={handleIsVideoMuted}
                >
                        {
                            isVideoMuted ? <IoVolumeMuteOutline /> : <IoVolumeHighOutline />
                        }
                </VideoControlContainer>

            </div>
        </div>
    )
}

export default Participant