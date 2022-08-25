/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import { CgArrowLongRight, CgArrowLongLeft } from 'react-icons/cg';
import IconBtn from '../IconBtn';
import Image from '../Image';
import { reviews } from '../../context/review';
import { Review } from '../../types';


type Props = {}

const Review = (props: Props) => {

    const [productReview, setProductReview] = useState<Review[]>(reviews);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [translateValue, setTranslateValue] = useState(0);
    const currentReview = productReview[currentIndex];

    const nextReview = () => {
        if (currentIndex === productReview.length - 1) return;
        // setTranslateValue(prev => prev + (25 * 1));
        setCurrentIndex(currentIndex + 1);
    }
    
    const prevReview = () => {
        if (currentIndex === 0) return;
        // setTranslateValue(prev => prev - (25 * 1));
        setCurrentIndex(currentIndex - 1);
    }

    return (
        <div className="py-32">
            <div className="flex flex-row items-center space-x-6">
                <div className="w-[90rem] px-16 space-y-8">
                    <div className="flex flex-col tracking-wide space-y-2">
                        <div className="text-3xl font-semibold indent-7 transition-all delay-150 ease-linear">
                            <p
                                // style={{
                                //     display: "flex",
                                //     transform: `translateX(-${
                                //         '80'
                                //     }%)`,
                                //     transition: "transform ease-out 0.5s",
                                // }} 
                            >{`“${currentReview?.review}”`}</p>
                        </div>
                        <div className="text-base font-semibold">
                            <p>{currentReview?.name}, </p>
                        </div>
                        <div className="text-gray-100 font-extralight">
                            <p>{currentReview?.company}</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center space-x-7">
                        <IconBtn onClick={prevReview} icon={<CgArrowLongLeft className="text-green-100" />} containerClassName={"border border-green-100 w-12 h-12 rounded-full"} />
                        <IconBtn onClick={nextReview} icon={<CgArrowLongRight className="text-green-100" />} containerClassName={"border border-green-100 w-12 h-12 rounded-full"} />
                    </div>
                </div>
                <div className={`block relative w-full grow-1`}>
                    <Image imageLink={`${currentReview?.imageUrl}`} className="rounded-lg" />
                </div>
            </div>
        </div>
    )
}

export default Review