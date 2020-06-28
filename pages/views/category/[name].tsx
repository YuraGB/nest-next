/**
 * Category
 * Dynamic page
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import { useRouter } from 'next/router'

export default (): JSX.Element => {
    const router = useRouter();

    return (
        <div>
            The Page
            <p>Post id</p>
        </div>
    )
};