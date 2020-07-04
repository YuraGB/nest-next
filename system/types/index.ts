/**
 * Types
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

export type Articles = {
    [key:string]:string
};

export type Categories =  {
    [key:string]: Articles[]
};

export type NavItemType = {
    title: string,
    url: string,
    as: string,
    articles: Articles[]
};

export type CustomHookInitState = {
    runQuery: () => Promise<void>
};

export type CategoryLinkType = {
    link: string,
    title: string,
    as: string
};
