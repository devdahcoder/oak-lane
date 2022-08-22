/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { CgArrowLongRight, CgArrowLongLeft } from 'react-icons/cg';
import IconBtn from '../IconBtn';


type Props = {}

const Review = (props: Props) => {

    
    return (
        <div className="py-32">
            <div className="flex flex-row items-center space-x-6">
                <div className="w-[90rem] px-16 space-y-8">
                    <div className="flex flex-col tracking-wide space-y-2">
                        <div className="text-3xl font-semibold indent-7">
                            <p>“OakLane is my secret weapon. The biggest value for us is having more lively, interactive experiences, without OakLane the interaction is one-sided.”</p>
                        </div>
                        <div className="text-base font-semibold">
                            <p>Yeman makoveli, </p>
                        </div>
                        <div className="text-gray-100 font-extralight">
                            <p>Coperate strategy planner, NTT LC.</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center space-x-7">
                        <IconBtn icon={<CgArrowLongLeft className="text-green-100" />} containerClassName={"border border-green-100 w-12 h-12 rounded-full"} />
                        <IconBtn icon={<CgArrowLongRight className="text-green-100" />} containerClassName={"border border-green-100 w-12 h-12 rounded-full"} />
                    </div>
                </div>
                <div className={`block relative w-full grow-1`}>
                    <div className={`block relative pb-[100%] overflow-hidden rounded-lg max-h-fit border`}>
                        <img className={`w-full h-full object-cover absolute left-0 top-0`} src="/Images/carvalho.jpg" alt="Photo by Wesley Carvalho from Pexels" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review