// The main file of post path : localhost:3000/post
// rule: the folder name is the father in the path and index.js is the its file, otherwise the other files in it are its children
import Link from 'next/link';
/* import {useRouter} from 'next/router';


export default function Posts() {
    const router = useRouter();
    return (
        <div>
            <h1>Posts</h1>
            <button onClick={() => router.push({pathname: "post/[id]", query: {id: 1}})}>
                read more
            </button>
        </div>
    )
} */

export default function Posts ({posts}) {
    console.log(" This is the client.")
    return (
        <div>
            <h1>Posts list</h1>
            {
                posts.map(item => 
                    <li key={item.id}>
                        <Link href={`/post/${item.id}`}>
                            {item.title}
                        </Link>
                    </li>
                )
            }
        </div>
    )
}
/* this function is for fetching the page data. and it works in the server,
It runs at build time, */
export async function getStaticProps() {
    // the avedence that shows this function works in the server. console .log
    console.log("this is the server");
    const data = await fetch("http://localhost:3000/api/post");
    //const posts = await data.json();
    return {
        props: {
            posts: []
            /* posts: [
                {id: 1, title: "javascript"},
                {id: 2, title: "css"},
                {id: 3, title: "html"}
            ] */
        }
    }
}
