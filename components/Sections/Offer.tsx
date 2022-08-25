import React from 'react';
import ContainerSize from '../Layouts/ContainerSize'
import OfferList from '../OfferList';

type Props = {}

const Offer = (props: Props) => {

    const RotateElement = (props: {className?: string}) => (
        <div className={`bg-green-200 h-[32rem] w-[34rem] rounded-md absolute ${props?.className}`}></div>
    )
    return (
        <div className="py-14">
            <div className="flex flex-col space-y-14">
                <ContainerSize className="w-[40rem] mx-0 flex flex-col space-y-5">
                    <div className="text-4xl font-semibold leading-[3rem] tracking-wide">
                        <h2>It’s how you include everyone in your meetings</h2>
                    </div>
                    <div className="pr-40 text-xl font-normal">
                        <p>OakLane gives you everything you need to engage your participants.</p>
                    </div>
                </ContainerSize>

                <div className="relative flex flex-row before:contents-[] before:absolute before:w-1.5 
                    before:h-full before:bg-gray-100 before:rounded-full">
                    <div className="w-full max-w-xl">
                        <div className="flex flex-col">
                            <OfferList />
                        </div>
                    </div>
                    <div className="grow relative flex flex-row items-center justify-center">
                        <RotateElement className="z-0 rotate-12" />

                        <RotateElement className="z-30 -rotate-6 animate-rotate-forward-backward" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer