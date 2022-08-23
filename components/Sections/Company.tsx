import React from 'react'
import { companies } from '../../context/companies';
import ImageList from '../ImageList';


type Props = {}

const Company = (props: Props) => {
    return (
        <div className="bg-blue-200 py-12 rounded-md">
            <ImageList 
                className={`flex flex-col items-center space-y-3`} 
                images={companies} 
                isImagesHeader={false} 
            />
        </div>
    )
}

export default Company