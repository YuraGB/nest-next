/**
 * Layout HOC
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React from 'react';

import Navigation from "../../components/Nav/Navigation";
import { Articles } from "../../system/types";

/**
 * Layout
 *
 * @param children
 * @param navProps
 * @return JSX.Element
 */
const Layout: React.FC = (
    {
        children
    }
    ) => {

    return (
        <>
            <header>
                <Navigation />
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