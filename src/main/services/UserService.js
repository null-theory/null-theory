// services/userService.js
import { db } from "../config/firebase.js";
import {
    collection,
    getDocs,
    doc,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc
} from "firebase/firestore";

export const UserService = {
    async createUser(data) {
        const userRef = await addDoc(collection(db, "users"), data);
        return userRef.id;
    },
    async getAllUsers() {
        const snapshot = await getDocs(collection(db, "users"));
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    },

    async getUser(userId) {
        if (!userId || typeof userId !== "string") {
            console.warn("Invalid userId:", userId);
            return null;
        }
        try {
            const userRef = doc(db, "users", userId);
            const snapshot = await getDoc(userRef);

            if (!snapshot.exists()) {
                console.log(`No user found with ID "${userId}".`);
                return null;
            }

            const userData = snapshot.data();
            return {
                id: userRef.id,
                ...userData
            };
        } catch (error) {
            console.error("Failed to fetch user:", error.message);
            return null;
        }
    },

    async updateUser(userId, data) {
        const userRef = doc(db, "users", userId);
        await updateDoc(userRef, data);
    },

    async deleteUser(userId) {
        const userRef = doc(db, "users", userId);
        await deleteDoc(userRef);
    }
};