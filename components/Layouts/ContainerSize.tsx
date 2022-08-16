import React from 'react'

type Props = {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const ContainerSize = (props: Props) => {
    return (
        <div style={props?.style} className={`${props?.className}`}>
            {props?.children}
        </div>
    )
}

export default ContainerSize