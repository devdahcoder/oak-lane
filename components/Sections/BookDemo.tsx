import React from 'react';
import Button from '../Button';
import ContainerSize from '../Layouts/ContainerSize';
import { IoPlayOutline } from 'react-icons/io5';
import Stripe from '../../public/Icons/Stripe';


type Props = {}

const BookDemo = (props: Props) => {
    return (
        <div className="flex flex-col items-center font-cabin pt-20">
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
            <div>

            </div>
        </div>
    )
}

export default BookDemo