import React from 'react';

import NavItem from "./NavItem";

const Navigation: React.FC = () => {
    return (
        <nav className='navigation'>
            <ul>
                <NavItem key={'1'} title='1960' url='/articles/1960'/>
                <NavItem key={'2'} title='1960' url='/articles/1960'/>
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