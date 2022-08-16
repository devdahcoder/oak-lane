import { HeaderNavigation } from "../types";
import { HeaderNavigationEnum } from "../types/enums";

export const navigation: HeaderNavigation[] = [
    {
        id: 1,
        title: "Features",
        href: "#",
        type: HeaderNavigationEnum.LINK,
        className: "",
    },
    {
        id: 2,
        title: "Resources",
        href: "#",
        type: HeaderNavigationEnum.LINK,
        className: "",
    },
    {
        id: 3,
        title: "Pricing",
        href: "#",
        type: HeaderNavigationEnum.LINK,
        className: "",
    },
    {
        id: 4,
        title: "Enterprise",
        href: "#",
        type: HeaderNavigationEnum.LINK,
        className: "",
    },
    {
        id: 5,
        title: "Login",
        href: "#",
        type: HeaderNavigationEnum.LINK,
        className: `
            bg-white text-black px-9 py-4 transition-all delay-100 ease-linear 
            rounded-sm hover:bg-green-100 hover:text-white`,
    },
    {
        id: 6,
        title: "Sign Up",
        href: "#",
        type: HeaderNavigationEnum.LINK,
        className: `
            bg-green-100 text-white px-10 py-4 transition-all delay-100 ease-linear 
            rounded-sm hover:bg-white hover:text-green-100`,
    }
]