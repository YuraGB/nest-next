/**
 * Navigation
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import React, {useEffect, useState} from 'react';
import { ApolloQueryResult } from "apollo-client";

import NavItem from "./NavItem";
import useInitState from '../../pages/customHooks/useCustomHookInitState';
import LinkData from './lib/categoryLink';
import getArticles from "../../pages/graphql_requests/queries/getArticles";
import listPerform from './lib/Navigation_structurize';

/**
 * Navigation element
 *
 * @return JSX.Element
 */
const Navigation: React.FC = () => {
    const { runQuery } = useInitState();
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        runQuery(
            getArticles('label', 'href', 'type', 'as'))
            .then((query: ApolloQueryResult<any>) =>
                setData(
                    listPerform(query.data.article)
                ));
    }, []);

    return (
        <nav className='navigation'>
            <ul>
                {   data ?
                    Object.keys(data)
                    .map(link => {
                        const linkInfo = LinkData(link);

                        return <NavItem
                            key={link}
                            title={linkInfo.title}
                            url={linkInfo.link}
                            articles={data[link]}
                            as={linkInfo.as}
                        />
                    }) : null
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