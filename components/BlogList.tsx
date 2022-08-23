import React from 'react';
import BlogItem from './BlogItem';
import { blogPost } from '../context/blog';

type Props = {}

const BlogList = (props: Props) => {
    return (
        <div className="grid grid-cols-3 gap-7">

            {
                blogPost?.map(({className, id, imageLink, style, title}, index) => {
                    return (
                        <BlogItem 
                            key={index} 
                            className={className}
                            id={id}
                            imageLink={imageLink}
                            style={style}
                            title={title}
                        />
                    )
                })
            }
        </div>
    )
}

export default BlogList