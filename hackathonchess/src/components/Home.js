import { getAuth, signOut } from '@firebase/auth'
import React from 'react'
import { auth } from '../firebase'
const Home = () => {
    return (
        
            <div>
                <h1>Chess Home</h1>
                <button onClick={() => {
                    signOut(getAuth())
                }}>Logout</button>
            </div>
        )
}

export default Home