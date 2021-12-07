import {getFirestore} from 'firebase/firestore';
import { initializeApp } from '@firebase/app';
import {getAuth} from 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAMkg01S-9Al-U99ocqbQSGhxCygl8ZBW4",
    authDomain: "realtime-chess-abde5.firebaseapp.com",
    projectId: "realtime-chess-abde5",
    storageBucket: "realtime-chess-abde5.appspot.com",
    messagingSenderId: "1090941740351",
    appId: "1:1090941740351:web:1680feb601abb474169f8a",
    measurementId: "G-P48DT1P0V3"
};

initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();
export { auth };
export default db;