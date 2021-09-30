//import posts from './post-data.json';
import dbConnect from "../../../utils/dbConnect";
import Post from "../../../models/Post";

export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch(method) {
        case "GET" :
            res.status(200).json(await Post.find())
        break
        case "POST" :
            res.status(201).json(await Post.create(req.body))
        break
        default:
            res.status(400).json({ success: false })
        break
    }
}