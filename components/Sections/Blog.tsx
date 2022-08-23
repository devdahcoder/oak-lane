import React from 'react'
import BlogList from '../BlogList';


type Props = {}

const Blog = (props: Props) => {
    return (
        <div className="space-y-14">
            <div className="text-center flex flex-col space-y-4 items-center px-80">
                <div className="text-5xl font-semibold tracking-wide">
                    <p>Get inspired from our Blog</p>
                </div>
                <div className="text-xl font-light tracking-wide w-fill max-w-4xl">
                    <p>Tips, tricks, and best practices on running more productive and engaging meetings!</p>
                </div>
            </div>

            <div>
                <BlogList />
            </div>
        </div>
    )
}

export default Blog