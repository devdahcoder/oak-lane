import React, { useState } from 'react';
import { offer } from '../context/offer';
import OfferItem from './OfferItem';

type Props = {}

const OfferList = (props: Props) => {

    const [active, setActive] = useState<number>(1);

    const handleActive = (id: number) => {
        setActive(id);
    }

    return (
        <div className="flex flex-col">
            {offer.map((item, index) => {

                const {description, href, id, title, imageUrl} = item;
                
                const isActive = active === id;

                return (
                    <OfferItem 
                        key={index} 
                        index={index}
                        id={id}
                        title={title}
                        description={description}
                        imageUrl={imageUrl}
                        href={href}
                        activeClass={'text-black delay-150 ease-linear transition-all duration-300 before:contents-[] before:absolute before:w-1.5 before:h-full before:top-0 before:left-0 before:bg-gray-200 before:rounded-full '}
                        onClick={handleActive}
                        isActive={isActive}
                    />
                )
            })}
        </div>
    )
}

export default OfferList