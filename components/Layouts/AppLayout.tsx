import React from 'react'
import Header from '../Header';
import { getMainLayout } from './MainLayout';


type Props = {
    children: React.ReactNode;
}

const AppLayout = (props: Props) => {
    return (
        <div>
            <Header />
            <div className="border mt-36">
                {props?.children}
            </div>
        </div>
    )
}

export const getAppLayout = (page?: React.ReactElement) => (
    getMainLayout(<AppLayout>{page}</AppLayout>, 'Welcome to OakLane')
);

export default AppLayout