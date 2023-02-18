import Link from 'next/link';

function NewsPage() {
    return (
        <>
            <h1>My news page</h1>
            <ul>
                <li>
                    <Link href='/news/nextjs-is-a-great-framework'>
                        NextJS Is A Great Framework
                    </Link>
                </li>
                <li>Something Else</li>
            </ul>
        </>
    );
}

export default NewsPage;
