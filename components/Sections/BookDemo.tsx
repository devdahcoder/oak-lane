import React from 'react';
import Button from '../Button';
import ContainerSize from '../Layouts/ContainerSize';
import { IoPlayOutline } from 'react-icons/io5';
import Stripe from '../../public/Icons/Stripe';
import Video from '../Video';
import { oakLaneUsers } from '../../context/oat-lane-users';
import ImageList from '../ImageList';
// oakLaneUsers

type Props = {}

const BookDemo = (props: Props) => {
    return (
        <div className="flex flex-col items-center font-cabin pt-20 space-y-12">
            <ContainerSize className="flex flex-col items-center justify-center text-center w-[70%] space-y-6">
                <div className="relative flex flex-col items-center justify-center text-6xl font-semibold leading-[5rem] tracking-wide">
                    <h1>Engage your <span className="relative"> <Stripe className="absolute bottom-1 left-0 -z-50" /> audience</span> and make everyone feel connected</h1>
                    
                </div>
                <div className="flex flex-col items-center justify-center text-xl px-20">
                    <p>whether you’re running a team call, training or an all-company meeting, OakLane gives you everything you need to engage your participants.</p>
                </div>

                <div>
                    <Button 
                        text={"Book a Demo"} 
                        isRightIcon={true} 
                        icon={<IoPlayOutline className={``} />} 
                        className={`bg-green-100 text-white rounded-md py-4 px-6`}
                        iconContainerClassName={`flex flex-row items-center justify-center ml-2`}
                    />
                </div>
            </ContainerSize>
            <div className="relative flex flex-row items-center rounded-md w-full max-w-[63rem] h-[32rem]">
                <div className="absolute left-6 top-8 flex flex-row items-center justify-center px-4 py-1 rounded-full text-white text-base font-medium bg-red-500 z-20">
                    <span className="w-2 h-2 rounded-full bg-white mr-1.5 animate-pulse"></span>
                    Live
                </div>
                <Video 
                    className={`block w-full h-full rounded-md absolute left-0 top-0 object-cover z-10`}
                    src={`./Videos/elephant.mp4`}
                    type={`video/mp4`} 
                    muted={true}
                    loop={true}
                    autoPlay={true}
                />
            </div>
            <div className="pt-5">
                <ImageList 
                    className={`flex flex-col items-center space-y-3`} 
                    headerText={"You can use OakLane with"} 
                    images={oakLaneUsers} 
                    isImagesHeader={true} 
                />
            </div>
        </div>
    )
}

export default BookDemo