import React from 'react';
import Image from './Image';

type Props = {
    className?: string;
    imageLink?: string;
    alt?: string;
    id: number;
    title: string;
    style: React.CSSProperties;
}

const BlogItem = (props: Props) => {

    const { alt, className, imageLink, id, title, style } = props;
    return (
        <div className="border">
            <div>
                <Image alt={alt} className={className} imageLink={imageLink} style={style} />
            </div>

            <div className="px-3 pt-4 pb-10">
                <div className="text-2xl font-semibold w-full max-w-[17rem] px-2 ">
                    <p>{title}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogItem