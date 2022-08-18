import React from 'react';
import Logo from './Logo';
import { navigation } from '../context/navigation';
import SingleNavigation from './SingleNavigation';
import { HeaderNavigationEnum } from '../types/enums';


type Props = {}

const Navigation = (props: Props) => {
    return (
        <div className="border bg-white">
            <div className={`flex flex-row items-center justify-between py-3 w-[90%] my-0 mx-auto`}>
                <Logo title={`Oak Lane`} />


                <div>
                    <nav>
                        <ul className={`flex flex-row items-center list-none space-x-5`}>
                            {navigation.map(({title, href, id, type, subNavigation, className, icon, style}, index) => (
                                <li key={index}>
                                    {type === HeaderNavigationEnum.LINK && (
                                        <SingleNavigation 
                                            title={title} 
                                            href={href} 
                                            id={id} 
                                            index={index} 
                                            type={type} 
                                            subNavigation={subNavigation} 
                                            className={className}
                                            style={style}
                                            icon={icon}
                                        />
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navigation;