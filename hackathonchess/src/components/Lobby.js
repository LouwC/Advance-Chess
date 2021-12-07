
import { getAuth, signOut } from '@firebase/auth'
import React from 'react'
import '../css/Lobby.css'

const Lobby = () => {
    return (
        <div className="outerLobby">
            <div className="lobby">
                <form action="">
                    <h1 className="heading">Advance[d] Chess</h1>
                    <div className="btnContainer"><button class="btn btn-primary btn-block btn-large">Find a match</button></div>
                    <h5>1 player online</h5>
                    <h3>- or -</h3>
                    <h3>Join a private match</h3>
                    <div className="btnContainer"><input type="text" placeholder="Enter room code" /></div>
                    <div className="btnContainer"><button class="btnSmall btn-primary btn-block btn-small">Join</button></div>
                </form>
            </div>
            <div className="settings">
                    <h1 className="name">John Doe</h1>
                    <h4>Matches: 10 - Wins: 7</h4>
                    <button onClick={() => {
                        signOut(getAuth())
                    }}>Logout</button>
            </div>
            
        </div>
    )
}



export default Lobby