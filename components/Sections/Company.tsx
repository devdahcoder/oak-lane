import React from 'react'
import { companies } from '../../context/companies';
import ImageList from '../ImageList';
import ContainerSize from '../Layouts/ContainerSize';



type Props = {}

const Company = (props: Props) => {
    return (
        <div className="bg-blue-200 py-12 rounded-md">
            <ContainerSize className="">
                <ImageList 
                    className={`flex flex-col items-center space-y-3`} 
                    images={companies} 
                    isImagesHeader={false} 
                />
            </ContainerSize>
        </div>
    )
}

export default Company