import jwt from "jsonwebtoken";

export default function(req, res, next) {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: "unauthorized" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next(); // все ок, идём дальше
    } catch (e) {
        return res.status(401).json({ message: "unauthorized" });
    }
}
