import React from 'react';

import Navigation from "../../components/Nav/Navigation";
import { Articles } from "../../system/types";

const Layout: React.FC<{navProps:Articles[]}> = (
    {
        children,
        navProps
    }
    ) => {

    return (
        <>
            <header>
                <Navigation articles={navProps}/>
            </header>
            <main>
                {children}
            </main>
            <style jsx global>{`
                body {
                  margin: 0;
                  padding: 0;
                }
                #__next {                
                   min-height: 100vh;
                   display: grid;
                   grid-template-rows: 1fr;
                   grid-column: span 2;
                   grid-template-rows: auto 1fr;
                }
                main {
                    background-size: cover;
                    max-width: 1440px;
                    margin: 0 auto;
                    width: 100%
                }
            `}
            </style>
        </>
    )
};

export default Layout;