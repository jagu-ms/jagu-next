import Link from 'next/link';
import Head from 'next/head';

export default function login() {
    return (
    <div>
        {/* SEO */}
        <Head>
            <title>Login page</title>
        </Head>

        <h1>login</h1>
        <Link href="/">Home page</Link>
    </div>
    )
}