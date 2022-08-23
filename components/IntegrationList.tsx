import React, {useState} from 'react';
// import { integrations } from '../context/integrations';
import IntegrationItem from './IntegrationItem';
import { Integration } from "../types";
import Plug from '../public/Icons/Plug';
import Dollar from '../public/Icons/Dollar';
import Announcement from '../public/Icons/Announcement';
import Grid from '../public/Icons/Grid';



type Props = {}

const IntegrationList = (props: Props) => {

    const [activeTab, setActiveTab] = useState(1);
    const [activeIcon, setActiveIcon] = useState(1);


    const handleActiveTab = (id: number) => {
        setActiveTab(id);
        setActiveIcon(id);
    }

    const activeIconTab = activeIcon === activeTab;

    const integrations: Integration[] = [
        {
            id: 1,
            title: "Intuitive & Easy to use",
            description: "The attendees can join without any logins or downloads, and the setup for hosts takes only minutes.",
            className: "",
            icon: <Grid className={`${activeTab === 1 ? 'fill-white' :  'fill-green-100'}`} fillColor={`${activeTab === 1 ? 'text-white' :  'text-green-100'}`}   />,
        },
        {
            id: 2,
            title: "Perfect for Hybrid events",
            description: "Take OakLane Live wherever your event is by adding our Audience Web App to your event website with a template code.",
            className: "",
            icon: <Announcement className={`${activeTab === 2 ? 'fill-white' :  'fill-green-100'}`} fillColor={`${activeTab === 1 ? 'text-white' :  'text-green-100'}`} />,
        },
        {
            id: 3,
            title: "Seamless integration",
            description: "Using our built-in integrations with a whole suite of live streaming, you can easily add the Audience Web App and seamless attendee tracking without additional development work.",
            className: "",
            icon: <Plug className={`${activeTab === 3 ? 'fill-white' :  'fill-green-100'}`} fillColor={`${activeTab === 1 ? 'text-white' :  'text-green-100'}`} />,
        },
        {
            id: 4,
            title: "Get started for free",
            description: "Start with our forever-free Basic plan, or get more from OakLane for only US$10 per month.",
            className: "",
            icon: <Dollar className={`${activeTab === 4 ? 'fill-white' :  'fill-green-100'}`} fillColor={`${activeTab === 1 ? 'text-white' :  'text-green-100'}`} />,
        }
    ]

    return (
        <div className="grid grid-cols-4 gap-8">
            {
                integrations.map((integration, index) => {
                    const active = activeTab === integration.id;
                    const { title, icon, description, id, className } = integration;

                    return (
                        <IntegrationItem 
                            key={index} 
                            id={id}
                            title={title}
                            icon={icon}
                            description={description}  
                            className={className}
                            active={active}
                            onClick={handleActiveTab}
                        />
                    )
                })
            }
        </div>
    )
}

export default IntegrationList