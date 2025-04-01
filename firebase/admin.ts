import { cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore"; // ✅ Correct import
// import {getFirestore} from "@firebase/firestore"


// Initialize Firebase Admin SDK
const initFirebaseAdmin = () => {
    const apps = getApps();

    if (!apps.length) {
        initializeApp({
            credential: cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
            }),
        });
    }

    return {
        auth: getAuth(),
        db: getFirestore(), // ✅ Correct Firestore initialization
    };
};

export const { auth, db } = initFirebaseAdmin();
