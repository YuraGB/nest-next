import React from 'react';
import Link from "next/link";
import classes from './NativeItem.module.css';

const NavItem: React.FC<{[key:string]: string}> = ({title, url}) => {
    return (
        <li>
            <Link href={url}>
                <a className={classes.Link}>{[...title].map(
                        (letter, ind) => letter ?
                            <span
                                style={{transitionDelay: '0.' + ind + 's'}}
                                key={Math.random()}>
                                {letter}
                            </span> : ' ')}
                </a>
            </Link>
            <style jsx>{`
                li {
                    list-style: none;
                    padding: 10px 20px;
                    border-radius: 3px;                   
                }
            `}</style>
        </li>
    )
};

export default NavItem;