/**
 * NavItem
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React from 'react';
import Link from "next/link";

import classes from './NativeItem.module.css';
import CatalogSection from "./CatalogSection/CatalogSection";
import { NavItemType } from "../../system/types";

/**
 * NavItem
 *
 * @param title
 * @param url
 * @param as
 * @param articles
 * @return JSX.Element
 */
const NavItem: React.FC<NavItemType> =
    ({title, url = '/', as = '/', articles} ) => {
    return (
        <li className={classes.li}>
            <Link href={url} as={as}>
                <a className={classes.Link}>{title}</a>
            </Link>
            <CatalogSection articles={articles}/>
            <style jsx>{`
                li {
                    list-style: none;
                    border-radius: 3px;
                    position: relative;
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