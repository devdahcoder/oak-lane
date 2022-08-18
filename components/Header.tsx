import React from 'react';
import Navigation from './Navigation';
import EventCodeContainer from './EventCodeContainer';

type Props = {}

const Header = (props: Props) => {
    return (
        <div className="fixed top-0 left-0 w-full z-50">
            <EventCodeContainer />
            <Navigation />
        </div>
    )
}

export default Header