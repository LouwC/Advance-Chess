import logo from './logo.svg';
import './App.css';

import { initializeApp } from "firebase/app";

import { doc, setDoc, Timestamp, getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAMkg01S-9Al-U99ocqbQSGhxCygl8ZBW4",
  authDomain: "realtime-chess-abde5.firebaseapp.com",
  projectId: "realtime-chess-abde5",
  storageBucket: "realtime-chess-abde5.appspot.com",
  messagingSenderId: "1090941740351",
  appId: "1:1090941740351:web:1680feb601abb474169f8a",
  measurementId: "G-P48DT1P0V3"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();


function App() {

  // const docData = {
  //   stringExample: "Hello world!",
  //   booleanExample: true,
  //   numberExample: 3.14159265,
  //   dateExample: Timestamp.fromDate(new Date("December 10, 1815")),
  //   arrayExample: [5, true, "hello"],
  //   nullExample: null,
  //   objectExample: {
  //       a: 5,
  //       b: {
  //           nested: "foo"
  //       }
  //     }
  // };
  // setDoc(doc(db, "data", "one"), docData);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React Test
        </a>
      </header>
    </div>
  );
}

export default App;
