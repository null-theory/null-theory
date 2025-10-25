// services/authService.js
import admin from 'firebase-admin';

class AuthService {
    async register(email, password, roleId, restaurantId) {
        // создаем пользователя в Firebase
        const userRecord = await admin.auth().createUser({ email, password });

        // сохраняем дополнительные данные в Firestore
        await admin.firestore().collection('users').doc(userRecord.uid).set({
            email,
            roleId,
            restaurantId,
            createdAt: admin.firestore.FieldValue.serverTimestamp()
        });

        // получаем custom token
        const token = await admin.auth().createCustomToken(userRecord.uid, { roleId });

        return { uid: userRecord.uid, token };
    }

    async login(idToken) {
        // проверяем токен, полученный от клиента
        const decodedToken = await admin.auth().verifyIdToken(idToken);

        // получаем дополнительные данные из Firestore
        const userDoc = await admin.firestore().collection('users').doc(decodedToken.uid).get();
        if (!userDoc.exists) {
            throw new Error('User profile not found');
        }

        return {
            uid: decodedToken.uid,
            roleId: userDoc.data().roleId,
            restaurantId: userDoc.data().restaurantId
        };
    }
}

export default new AuthService();