/**
 * functionality for nav link
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */

import { CategoryLinkType } from "../../../system/types";
import { DOOMSDAY, NEGLIGENCE } from "../../../system/category/categoryNames";

/**
 *
 * @param type
 * @return {link, title, as}
 */
export default (type: string): CategoryLinkType => {
    switch(type) {
        case DOOMSDAY:
            return {
                link: '/views/category/[name]',
                title: 'near the Doomsday',
                as: `/views/category/${DOOMSDAY}`
            };
        case NEGLIGENCE: {
            return {
                link: '/views/category/[name]',
                title: 'the human negligence',
                as: `/views/category/${NEGLIGENCE}`
            }
        }
        default: {
            return {
                link: '/',
                title: 'home',
                as: '/'
            }
        }
    }
}