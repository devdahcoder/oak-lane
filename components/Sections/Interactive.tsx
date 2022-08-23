import React from 'react'
import Button from '../Button'

type Props = {}

const Interactive = (props: Props) => {
    return (
        <div className="rounded-lg bg-green-100 flex flex-row justify-between px-24 pt-12 pb-20 tracking-wide my-20">
            <div className="text-4xl text-white w-[28rem]">
                <p>Make your meetings more interactive with OakLane.</p>
            </div>

            <div className="flex flex-row item-center space-x-6 grow-1">
                <Button text={"Learn More"} className={"border border-white px-16 py-3 rounded-md text-white tracking-wide"} />
                <Button text={"Get Started"} className={"border border-white bg-white px-16 py-3 rounded-md text-green-100 tracking-wide"} />
            </div>
        </div>
    )
}

export default Interactive