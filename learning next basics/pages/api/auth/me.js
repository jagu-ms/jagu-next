export default async function handler(req, res) {
    const data = {
        id: 1,
        name: "mohamed",
        email: "mohamed@gmail.com"
    }
    res.status(200).json({ data })
}