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