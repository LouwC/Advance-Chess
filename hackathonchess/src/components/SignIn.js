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
    <div className="signin">
        <form action="">
            <h1>Sign in</h1>
            <input ref={emailRef} type="email"/>
            <input ref={passwordRef} type="password"/>
            <button onClick={signIn}>Sign in</button>
            <h6>Not yet registered? <span className="signin__link" onClick={signUp}>sign up</span></h6>
        </form></div>
    )

    
}



export default SignIn