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

const MultiNavigation = (props: Props) => {
    return (
        <div className="" draggable="false" role={'button'}>
            <Link href={props?.href}>
                <a className={props.className} style={props?.style}>{props?.title}</a>
            </Link>
        </div>
    )
}

export default MultiNavigation