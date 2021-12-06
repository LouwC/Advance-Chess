import * as functions from "firebase-functions";
import { doc, setDoc, getFirestore } from "firebase/firestore";

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript


export const createUser = functions.firestore
    .document('events_test/{event_id}')
    .onCreate(async (snap) => {
        // Get an object representing the document
        // e.g. {'name': 'Marie', 'age': 66}
        const newValue = snap.data();

        const db = getFirestore();
        // access a particular field as you would any JS property


        // Add a new document in collection "cities"
        await setDoc(doc(db, "cities", "LA"), {
            name: "Los Angeles",
            state: "CA",
            country: "USA",
            ...<any>newValue
        });

        // perform desired operations ...
    });