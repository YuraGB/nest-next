import React from 'react';
import Link from "next/link";

import classes from './NativeItem.module.css';
import CatalogSection from "./CatalogSection/CatalogSection";
import { NavItemType } from "../../system/types";

const NavItem: React.FC<NavItemType> =
    ({title, url = '/', as = '/', articles} ) => {
    return (
        <li>
            <Link href={url} as={as}>
                <a className={classes.Link}>{title}</a>
            </Link>
            <CatalogSection articles={articles}/>
            <style jsx>{`
                li {
                    list-style: none;
                    border-radius: 3px;  
                    flex-grow: 1;                
                }
                a {
                    display: block;
                    
                }
            `}</style>
        </li>
    )
};

export default NavItem;