import { db } from "../config/firebase.js";
import {
    collection,
    doc,
    getDoc,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    serverTimestamp
} from "firebase/firestore";

const toursRef = collection(db, "tours");

export const TourService = {
    async createTour(data) {
        const tour = {
            ...data,
            createdAt: serverTimestamp()
        };
        const docRef = await addDoc(toursRef, tour);
        return { id: docRef.id };
    },

    async getAllTours() {
        const snapshot = await getDocs(toursRef);
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    },

    async getTourById(id) {
        const docSnap = await getDoc(doc(toursRef, id));
        if (!docSnap.exists()) return null;
        return { id: docSnap.id, ...docSnap.data() };
    },

    async updateTour(id, data) {
        await updateDoc(doc(toursRef, id), {
            ...data,
            updatedAt: serverTimestamp()
        });
    },

    async deleteTour(id) {
        await deleteDoc(doc(toursRef, id));
    }
};