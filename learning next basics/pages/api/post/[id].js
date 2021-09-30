import posts from './post-data.json';

export default function handler(req, res) {
    const {id} = req.query;
    const post = posts.filter(item => item.id == id);
    post.length ? 
        res.json(post[0]) : res.status(404).json({message: "Not found"});
}