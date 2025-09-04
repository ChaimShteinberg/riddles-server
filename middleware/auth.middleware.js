import jwt from "jsonwebtoken";

export async function auth(req, res, next) {
    const token = req.cookies.token;
    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.send(error.message)
    }
}

export function requireRole(role, roles){
    return roles.includes(role);
}