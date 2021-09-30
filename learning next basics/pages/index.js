import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';


export default function Home() {
  return (
    <div>
      {/* SEO */}
      <Head>
        <title>Home page</title>
      </Head>

      <h1>home</h1>
      <Link href='/login'>login</Link>
      <img src="/images/staires.jpg" alt="image"/>
      <Image
        src="/images/staires.jpg"
        height={200}
        width={200}
        alt="image"
      />
    </div>
  )
}
