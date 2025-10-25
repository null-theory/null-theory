import admin from 'firebase-admin';

export default async function(req, res, next) {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'unauthorized' });
        }

        const decoded = await admin.auth().verifyIdToken(token);
        req.user = decoded; // uid, email, roleId (если добавлен в custom claims)
        next();
    } catch (e) {
        return res.status(401).json({ message: 'unauthorized' });
    }
}