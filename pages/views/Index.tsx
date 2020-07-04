/**
 * Home Page
 *
 * @author Yurii Huriianov <yuhur1985@gmail.com
 * @copyright 2020
 */
import { NextPage } from 'next';

import img from "../../assets/background/doomsdayClock.jpg";
import Layout from "../../hoc/Layout/Layout";

const Index: NextPage = () => {
    return (
        <Layout>
            <div>Hello!!!!!!!!!!</div>
            <style jsx global>
                {`
                    main {
                        background: url(${img}) no-repeat;
                    }                    
                `}
            </style>
        </Layout>
    );
};

export default Index;