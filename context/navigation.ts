import { navigationStyle, footerNavigationStyle } from "../styles/globalStyle";
import { HeaderNavigation } from "../types";
import { HeaderNavigationEnum } from "../types/enums";


export const navigation: HeaderNavigation[] = [
    {
        id: 1,
        title: "Features",
        href: "#",
        type: HeaderNavigationEnum.LINK,
        className: `px-5 py-2  ${navigationStyle}`,
    },
    {
        id: 2,
        title: "Resources",
        href: "#",
        type: HeaderNavigationEnum.LINK,
        className: `px-5 py-2  ${navigationStyle}`,
    },
    {
        id: 3,
        title: "Pricing",
        href: "#",
        type: HeaderNavigationEnum.LINK,
        className: `px-5 py-2  ${navigationStyle}`,
    },
    {
        id: 4,
        title: "Enterprise",
        href: "#",
        type: HeaderNavigationEnum.LINK,
        className: `px-5 py-2  ${navigationStyle}`,
    },
    {
        id: 5,
        title: "Login",
        href: "/auth/login",
        type: HeaderNavigationEnum.LINK,
        className: `
            bg-white text-black px-9 py-3.5 border border-green-100 transition-all delay-100 ease-linear 
            rounded-md hover:bg-green-100 hover:text-white`,
    },
    {
        id: 6,
        title: "Sign Up",
        href: "/auth/signup",
        type: HeaderNavigationEnum.LINK,
        className: `
            bg-green-100 text-white px-9 py-3.5 border border-green-100 transition-all delay-100 ease-linear 
            rounded-md hover:bg-white hover:text-green-100`,
    }
]


export const footerNavigation = [
        {
            id: 1,
            title: "Products",
            className: "",
            style: {},
            navigation: [
                {id: 1, title: "Product Tour", href: "#", type: HeaderNavigationEnum.LINK, className: `${footerNavigationStyle}`, style: {},  },
                {id: 2, title: "Q&A", href: "#", type: HeaderNavigationEnum.LINK, className: `${footerNavigationStyle}`, style: {}, },
                {id: 3, title: "Live Polls", href: "#", type: HeaderNavigationEnum.LINK, className: `${footerNavigationStyle}`, style: {}, },
                {id: 4, title: "Analytics", href: "#", type: HeaderNavigationEnum.LINK, className: `${footerNavigationStyle}`, style: {}, },
                {id: 5, title: "integrations", href: "#", type: HeaderNavigationEnum.LINK, className: `${footerNavigationStyle}`, style: {}, },
            ]
        },
        {
            id: 2,
            title: "Resources",
            className: "",
            style: {},
            navigation: [
                {id: 1, title: "Blog", href: "#", type: HeaderNavigationEnum.LINK, className: `${footerNavigationStyle}`, style: {}, },
                {id: 2, title: "Use Cases", href: "#", type: HeaderNavigationEnum.LINK, className: `${footerNavigationStyle}`, style: {}, },
                {id: 3, title: "Videos", href: "#", type: HeaderNavigationEnum.LINK, className: `${footerNavigationStyle}`, style: {}, },
                {id: 4, title: "Help Center", href: "#", type: HeaderNavigationEnum.LINK, className: `${footerNavigationStyle}`, style: {}, },
            ]
        },
        {
            id: 3,
            title: "Pricing",
            className: "",
            style: {},
            navigation: [
                {id: 1, title: "One-Time Plane", href: "#", type: HeaderNavigationEnum.LINK, className: `${footerNavigationStyle}`, style: {}, },
                {id: 2, title: "Annual", href: "#", type: HeaderNavigationEnum.LINK, className: `${footerNavigationStyle}`, style: {}, },
                {id: 3, title: "Enterprise", href: "#", type: HeaderNavigationEnum.LINK, className: `${footerNavigationStyle}`, style: {}, },
            ]
        },
        {
            id: 4,
            title: "Company",
            className: "",
            style: {},
            navigation: [
                {id: 1, title: "About Us", href: "#", type: HeaderNavigationEnum.LINK, className: `${footerNavigationStyle}`, style: {}, },
                {id: 2, title: "Partner", href: "#", type: HeaderNavigationEnum.LINK, className: `${footerNavigationStyle}`, style: {}, },
                {id: 3, title: "Our Clients", href: "#", type: HeaderNavigationEnum.LINK, className: `${footerNavigationStyle}`, style: {}, },
                {id: 4, title: "Legal", href: "#", type: HeaderNavigationEnum.LINK, className: `${footerNavigationStyle}`, style: {}, },
            ]
        },
    ]