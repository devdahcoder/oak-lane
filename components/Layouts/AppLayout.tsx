import React from 'react'
import Header from '../Header';
import ContainerSize from './ContainerSize';
import { getMainLayout } from './MainLayout';



type Props = {
    children: React.ReactNode;
}

const AppLayout = (props: Props) => {
    return (
        <div>
            <Header />
            <div className="mt-36">
                <ContainerSize className="flex flex-col w-[90%] my-0 mx-auto">
                    {props?.children}
                </ContainerSize>
            </div>
        </div>
    )
}

export const getAppLayout = (page?: React.ReactElement) => (
    getMainLayout(<AppLayout>{page}</AppLayout>, 'Welcome to OakLane')
);

export default AppLayout