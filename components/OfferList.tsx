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
                        id={item?.id}
                        title={item?.title}
                        description={item?.description}
                        imageUrl={item?.imageUrl}
                        href={item?.href}
                    />
                )
            })}
        </div>
    )
}

export default OfferList