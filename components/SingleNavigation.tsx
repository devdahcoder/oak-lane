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
                    className={`relative flex flex-row items-center justify-center w-full h-full py-2 px-4
                        text-base ${className}`} 
                    style={style}
                >
                    {title}
                </a>
            </Link>
        </div>
    )
}

export default SingleNavigation

{/* <a href="#_" class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 text-white">
<span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
<span class="relative text-indigo-600 transition duration-300 group-hover:text-white ease">Button Text</span>
</a> */}