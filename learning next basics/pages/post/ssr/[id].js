export default function Show({post}) {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

/* 
* SSR for pages that have frequently changing data with getServerSideProps
*/
/*Note: We can use getStaticProps for loading the pages that don't change a lot (SSG pages),
then fetch the frequently changing data with getServerSideProps because this function will be
rendered for each page request */
export async function getServerSideProps({ params }) {
    const data = await fetch(`http://localhost:3000/api/post/${params.id}`);
    const post = await data.json();
    return {
        props:{
            post
        }
    }
}