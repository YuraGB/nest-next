import React from 'react';

import NavItem from "./NavItem";
import { Articles } from "../../system/types";
import listPerform from './lib/Navigation_structurize';
import LinkData from './lib/categoryLink';

const Navigation: React.FC<{articles:Articles[]}> = ({articles}) => {
    const list = listPerform(articles);

    return (
        <nav className='navigation'>
            <ul>
                {
                    Object.keys(list)
                    .map(link => {
                        const linkInfo = LinkData(link);

                        return <NavItem
                            key={link}
                            title={linkInfo.title}
                            url={linkInfo.link}
                            articles={list[link]}
                            as={linkInfo.as}
                        />
                    })
                }
            </ul>
            <style jsx>{`
                .navigation {
                    max-width: 1440px;
                    margin: 0 auto;
                }
                
                nav, ul {
                    display: block;
                    margin: 0 auto;
                    padding: 0;
                    text-align: center;
                }
                
                ul {
                    display: flex;
                    justify-content: center;                    
                }
            `}</style>
        </nav>
    )
};

export default Navigation;