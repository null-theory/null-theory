// services/userService.js
import { db } from "../config/firebase.js";
import { getFirestore, collection, doc, getDoc, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

export async function createUser(data) {
    const userRef = await addDoc(collection(db, "users"), data);
    return userRef.id;
}

export async function getUser(userId) {
    const userSnap = await getDoc(doc(db, "users", userId));
    return userSnap.exists() ? { id: userSnap.id, ...userSnap.data() } : null;
}

export async function updateUser(userId, data) {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, data);
}

export async function deleteUser(userId) {
    const userRef = doc(db, "users", userId);
    await deleteDoc(userRef);
}