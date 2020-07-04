/**
 * Catalog Section
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import React from 'react';

import { Articles } from "../../../system/types";
import classes from './CatalogSection.module.css'
import Link from "next/link";

/**
 * CatalogSection the part of the menu
 * with the articles links
 *
 * @param articles
 * @return JSX.Element
 */
const CatalogSection: React.FC<{articles: Articles[]}> =
    ({articles}) => {
        console.log(articles);
    return (
        <div className={classes.catalogLinks}>
            <div className={classes.pictures}>

            </div>
            <ul className={classes.list}>
                {articles.map((article, ind) => {
                    console.log(article.href === '/views/articles/[name]', article.href);
                    const str = article.as + article.label;
                    return (
                    <li key={article.href + ind}>
                        <Link href={article.href}
                              as={str}
                        >
                            <a>
                                {article.label}
                            </a>
                        </Link>
                    </li>)
                })}
            </ul>
        </div>
    )
};

export default CatalogSection;
