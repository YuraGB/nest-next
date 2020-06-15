import React from 'react';
import { useRouter } from 'next/router'

export default () => {
    const router = useRouter();
    console.log(router);
    return (
        <div>
            The Page
            <p>Post id: {router.query.id}</p>
        </div>
    )
};