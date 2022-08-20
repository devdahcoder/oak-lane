import { Integration } from "../types";
import Plug from '../public/Icons/Plug';
import Dollar from '../public/Icons/Dollar';
import Announcement from '../public/Icons/Announcement';
import Grid from '../public/Icons/Grid';

export const integrations: Integration[] = [
    {
        id: 1,
        title: "Intuitive & Easy to use",
        description: "The attendees can join without any logins or downloads, and the setup for hosts takes only minutes.",
        className: "",
        icon: Grid,
    },
    {
        id: 2,
        title: "Perfect for Hybrid events",
        description: "Take OakLane Live wherever your event is by adding our Audience Web App to your event website with a template code.",
        className: "",
        icon: Announcement,
    },
    {
        id: 3,
        title: "Seamless integration",
        description: "Using our built-in integrations with a whole suite of live streaming, you can easily add the Audience Web App and seamless attendee tracking without additional development work.",
        className: "",
        icon: Plug,
    },
    {
        id: 4,
        title: "Get started for free",
        description: "Start with our forever-free Basic plan, or get more from OakLane for only US$10 per month.",
        className: "",
        icon: Dollar,
    }
]