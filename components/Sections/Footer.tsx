import React from 'react';
import ContainerSize from '../Layouts/ContainerSize';
import { BsFacebook, BsLinkedin, BsInstagram } from 'react-icons/bs';
import IconBtn from '../IconBtn';
import { FiTwitter } from 'react-icons/fi';
import CopyRight from '../../public/Icons/CopyRight';
import Logo from '../Logo';
import { footerNavigation } from '../../context/navigation';
import SingleNavigation from '../SingleNavigation';


type Props = {}

const Footer = (props: Props) => {

    


    return (
        <div className="bg-green-100 font-inter">
            <ContainerSize>
                <div className="flex flex-row text-white space-x-52 pt-20 pb-8">
                    <div>
                        <Logo iconClassName={`w-24 h-24`} titleClassName={`text-2xl font-medium !text-white`} />
                    </div>

                    <div className="flex flex-row space-x-10">
                        {
                            footerNavigation?.map(({id, className, title, style, navigation}, index) => {
                                return (
                                    <div key={index} className={`flex flex-col space-y-3`}>
                                        <div className={`flex flex-row items-start justify-start text-lg font-medium tracking-wide`}>
                                            <p>{title}</p>
                                        </div>
                                        <div>
                                            {
                                                navigation?.map(({ id, className, href, title, type, style }, index) => {
                                                    return (
                                                        <div key={index}>
                                                            <SingleNavigation title={title} href={href} className={className} style={style} type={type} id={id} />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between py-6 border-t border-white">
                    <div className="text-white text-sm flex flex-row items-center">
                        <span className="mr-2"><CopyRight /></span><p> 2022 OakLane Live. All rights reserved.</p>
                    </div>

                    <div className="flex flex-row items-center space-x-8">
                        <IconBtn className={"p-2"} icon={<BsInstagram className="text-white" />} />
                        <IconBtn className={"p-2"} icon={<BsLinkedin className="text-white" />} />
                        <IconBtn className={"p-2"} icon={<FiTwitter className="text-white" />} />
                        <IconBtn className={"p-2"} icon={<BsFacebook className="text-white" />} />
                    </div>
                </div>
            </ContainerSize>
        </div>
    )
}

export default Footer