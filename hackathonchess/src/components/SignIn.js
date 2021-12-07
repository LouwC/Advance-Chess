import React, {useRef} from 'react'
import '../css/SignIn.css'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth} from 'firebase/auth'


const SignIn = () => {

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    const signUp = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(getAuth(), emailRef.current.value, passwordRef.current.value)
            .then(user => {
                console.log(user)
            }).catch(err => {console.log(err)})
        }
    
    const signIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(getAuth(), emailRef.current.value, passwordRef.current.value)
            .then(user => {
                console.log('user', user)
            }).catch(err => {console.log(err)})
    }

    return (
        <div className="outerForm">
            <div className="signin">
                <form action="">
                    <h1 className="heading">Advance[d] Chess</h1>
                    <input ref={emailRef} type="email" placeholder="Email" />
                    <input ref={passwordRef} type="password" placeholder="Password" />
                    <button onClick={signIn} class="btn btn-primary btn-block btn-large">LOGIN</button>
                    <p>Not yet registered? <span className="signin__link" onClick={signUp}>sign up</span></p>
                </form></div>
        </div>
    )

    
}



export default SignIn