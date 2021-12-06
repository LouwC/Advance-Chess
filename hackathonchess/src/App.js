import './App.css';

import { useEffect, useState } from 'react';

import Home from './components/Home';
import SignIn from './components/SignIn';
import { auth } from './firebase';


function App() {

  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {    
        if (userAuth) {
            const user = {uid: userAuth.uid,email: userAuth.email}
            console.log('userAuth', userAuth)
            setUser(user)
        } else {
            setUser(null)
        }
    })
    return unsubscribe
}, [])


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
      {user ? <Home /> : <SignIn />}
    </div>
  );
}

export default App;
