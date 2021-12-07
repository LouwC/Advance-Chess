import './App.css';

import { useEffect, useState } from 'react';

import Lobby from './components/Lobby';
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

  return (
    <div className="App">
      {user ? <Lobby /> : <SignIn />}
    </div>
  );
}

export default App;
