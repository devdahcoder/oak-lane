import React from 'react';
import Link from 'next/link';
import { HeaderNavigationEnum } from '../types/enums';
import { HeaderNavigation } from '../types';

type Props = {
    id: number;
    index: number;
    title: string;
    href: string;
    icon?: string;
    className?: string;
    style?: React.CSSProperties;
    type: HeaderNavigationEnum;
    subNavigation?: HeaderNavigation[];
}

const SingleNavigation = (props: Props) => {

    const { id, index, title, href, icon, className, style, type, subNavigation } = props;

    return (
        <div className="flex flex-row items-center" draggable="false" >
            <Link href={href}>
                <a 
                    className={`flex flex-row items-center justify-center w-full h-full py-2 px-5 text-base ${className}`} 
                    style={style}
                >
                    {title}
                </a>
            </Link>
        </div>
    )
}

export default SingleNavigation