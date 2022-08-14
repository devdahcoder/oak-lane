import React from 'react';
import Navigation from './Navigation';
import EventCodeContainer from './EventCodeContainer';

type Props = {}

const Header = (props: Props) => {
    return (
        <div>
            <EventCodeContainer />
            <Navigation />
        </div>
    )
}

export default Header