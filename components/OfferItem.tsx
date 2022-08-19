import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { TbArrowRightCircle } from 'react-icons/tb';
import Button from './Button';

type Props = {
    id?: number;
    title?: string;
    description?: string;
    imageUrl?: string;
    href: string;
    className?: string;
}

const OfferItem = (props: Props) => {

    const router = useRouter();

    const { id, title, description, imageUrl, href, className } = props;
    
    return (
        <div className={`flex flex-col space-y-4 py-3 px-5 relative
            text-gray-200 before:contents-[] before:absolute before:w-1.5 before:h-full 
            before:top-0 before:left-0 before:bg-gray-200 before:rounded-full`}>
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
                iconContainerClassName={`ml-3`}
                onClick={() => router.push(href)}
            />
        </div>
    )
}

export default OfferItem