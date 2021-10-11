import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/appSlice'
import { auth, provider } from './firebase'
import './Login.css'

function Login() {
    const dispatch = useDispatch()

    const signIn = ()=>{
        auth.signInWithPopup(provider)
        .then(result =>{
            dispatch(login({
                username : result.user.displayName,
                profilePic: result.user.photoURL,
                id: result.user.uid,
            }))
        }).catch(error=>alert(error.message))
    }

    return (
        <div classname=''>
            <div className="login__container">
                <img src="https://cdn2.downdetector.com/static/uploads/logo/image11.png" alt="" />
                <Button variant='outlined' onClick={signIn}>Sign in</Button>
            </div>
        </div>
    )
}

export default Login
