import jwt from "jsonwebtoken";

export async function auth(req, res, next) {
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.send(error.message)
    }
}