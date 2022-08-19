import React, { useRef, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { TbArrowRightCircle } from 'react-icons/tb';
import Button from './Button';

type Props = {
    id: number;
    index: number;
    title?: string;
    description?: string;
    imageUrl?: string;
    href: string;
    className?: string;
    activeClass: string;
    onClick: (id: number) => void;
    isActive: boolean;
}

const OfferItem = (props: Props) => {

    const router = useRouter();

    const { id, title, description, imageUrl, href, className, index, activeClass, onClick, isActive } = props;

    const refElement = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let isSubscribed = true;

        if (isSubscribed) {
            if (refElement.current?.tabIndex === 1) {
                refElement.current?.click();
            }
        }
        return () => {
            isSubscribed = false;
        }
    }, [])
    
    return (
        <div 
            ref={refElement} 
            tabIndex={id} 
            onClick={() => onClick(id)} 
            role="button"
            className={`flex flex-col text-gray-200 space-y-4 py-3 px-10 relative
            ${isActive && activeClass}`}>
            <div className="font-semibold tracking-wider">
                <p>{title}</p>
            </div>
            <div className="">
                <p>{description}</p>
            </div>
            <Button
                text={`Learn more`}
                className={`flex flex-row items-center text-green-100 w-full max-w-fit py-2 pr-4 rounded-md`}
                isRightIcon={true}
                icon={<TbArrowRightCircle />}
                iconContainerClassName={`ml-3 ${isActive ? 'animate-slide' : ''}`}
                onClick={() => router.push(href)}
            />
        </div>
    )
}

export default OfferItem