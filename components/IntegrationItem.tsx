import React, { useRef, useEffect} from 'react'

type Props = {
    id: number;
    title: string;
    description: string;
    className?: string;
    icon: any;
    active?: boolean;
    onClick: (id: number) => void;
}

const IntegrationItem = (props: Props) => {

    const { id, title, description, className, icon, onClick, active } = props;

    const integrationItemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let isSubscribed = true;

        if (isSubscribed) {
            if (integrationItemRef.current?.tabIndex == 1) {
                integrationItemRef.current?.click();
            }
        }

        return () => {
            isSubscribed = false;
        }
    }, []);

    return (
        <div role="button" onClick={() => onClick(id)} className={`rounded-lg py-9 px-4 space-y-14 ${active ? 'bg-green-100 group' : 'bg-blue-100'}`}>
            <div className="flex flex-row items-center justify-center rounded-full bg-green-200 w-10 h-10">
                <span>{icon}</span>
            </div>
            <div className={`flex flex-col space-y-5 ${active ? 'text-white' : ''} `}>
                <div className={`text-base font-semibold tracking-wide`}>
                    <p>{title}</p>
                </div>
                <div className="text-sm tracking-wide">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default IntegrationItem