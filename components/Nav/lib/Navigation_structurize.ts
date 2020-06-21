import { Articles, Categiries } from "../../../system/types";

export default (list: Articles[]): Categiries => {
    const initObj: Categiries = {};

    if (list.length) {
        //define unique 'types' of the articles
        const articleTypes = new Set(list.map(article => article.type));

        //split the articles into categories
        Array.from(articleTypes)
            .forEach(type => initObj[type] = list
                .filter(article => article.type === type)
            );
    }

    return initObj;
}