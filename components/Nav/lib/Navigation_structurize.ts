/**
 * Navigation structure functionality
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import { Articles, Categories } from "../../../system/types";

/**
 *
 * @param list
 * @return Categories[]
 */
export default (list: Articles[]): Categories => {
    const initObj: Categories = {};

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