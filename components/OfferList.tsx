import React from 'react';
import { offer } from '../context/offer';
import OfferItem from './OfferItem';

type Props = {}

const OfferList = (props: Props) => {
    return (
        <div className="flex flex-col">
            {offer.map((item, index) => {
                return (
                    <OfferItem 
                        key={index} 
                        index={index}
                        id={item?.id}
                        title={item?.title}
                        description={item?.description}
                        imageUrl={item?.imageUrl}
                        href={item?.href}
                        activeClass={'text-black before:contents-[] before:absolute before:w-1.5 before:h-full before:top-0 before:left-0 before:bg-gray-200 before:rounded-full'}
                    />
                )
            })}
        </div>
    )
}

export default OfferList