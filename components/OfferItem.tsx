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
}

const OfferItem = (props: Props) => {

    const [active, setActive] = useState<string>('');

    const router = useRouter();

    const { id, title, description, imageUrl, href, className, index, activeClass } = props;

    const refElement = useRef<HTMLDivElement>(null);

    const handleActive = (id: number) => {
        const idx = String(id);
        setActive(idx);
    }

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

    const isActive = active === String(id);
    
    return (
        <div 
            ref={refElement} 
            tabIndex={id} 
            onClick={() => handleActive(id)} 
            role="button"
            className={`flex flex-col text-gray-200 space-y-4 py-3 px-10 relative
            ${isActive ? activeClass : ''}`}>
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