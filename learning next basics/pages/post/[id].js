/* This page is an SSG page */
import Link from 'next/link';

export default function Show({post}) {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

//To know the possible paths
export async function getStaticPaths() {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await data.json();
    const paths = posts.map(item => ({
            params: {id: item.id.toString()}
        })
    )
    return {
        paths, fallback: false
    }
}

// Fetching each blog with getStaticProps.
export async function getStaticProps({ params }) {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await data.json();
    return {
        props:{
            post
        }
    }
}
/* import {useRouter} from 'next/router';  */


/* export default function Show() {
    const router = useRouter();
    const {id, comment} = router.query;
    return (
        <div>
            <h1>Show post {id} comment {comment}</h1>
            <p> Current path is: {router.pathname}</p>
            <p> Current path is: {router.asPath}</p>
            <button onClick={ () => router.back()}>
                back
            </button>
            <button onClick={ () => router.replace('/')}>
                you can't goback to the previous page with the browser back button
                home with replace function 
            </button>
        </div>
    )
} */ 