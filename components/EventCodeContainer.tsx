/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Input from './Input';
import { IoSearchOutline } from 'react-icons/io5';
import { CgClose } from 'react-icons/cg';

type Props = {
    className?: string;
}

const EventCodeContainer = (props: Props) => {

    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState<string>('');

    const { className } = props;

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {

        const event = e.target.value;

        (event === '' || event.length < 1) ? setIsSearching(false) : setIsSearching(true);
        
        setSearchValue(event);

    };

    const handleClearSearch = () => {
        setSearchValue('');
        setIsSearching(false);
    };


    
    return (
        <div className={`flex flex-row items-center justify-center py-3 bg-dark-100 space-x-4 ${className}`}>

            <div className="flex flex-row items-center capitalize text-base text-white">Hi <span className="animate-wave"><img className="flex flex-row -items-center justify-center h-8 w-8" src="./Images/waving-hand.png" alt="waving-hand" /></span> there are you at an event ? </div>
            <Input
                placeholder='Enter Event Pass Code'
                className='w-96 py-3 px-8 text-sm placeholder:font-light placeholder:text-gray-100'
                leftIcon={<IoSearchOutline className='w-4 h-4' />}
                isLeftIcon={true}
                rightIcon={<CgClose className='w-4 h-4' />}
                isRightIcon={true}
                value={searchValue}
                onChange={handleSearch}
                isTyping={isSearching}
                leftIconContainerClassName={`left-0`}
                rightIconContainerClassName={`right-0 ${isSearching ? 'visible' : 'invisible'}`}
                rightIconClick={handleClearSearch}
            />
        </div>
    )
}

export default EventCodeContainer