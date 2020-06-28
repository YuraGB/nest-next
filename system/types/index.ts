export type NavProps = {
    article: {[key:string]:string}[]
}

export type Articles = {
    [key:string]:string
};

export type Categiries =  {
    [key:string]: Articles[]
};

export type NavItemType = {
    title: string,
    url: string,
    as: string,
    articles: Articles[]
}