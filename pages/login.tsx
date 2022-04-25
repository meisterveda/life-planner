import { EmailAuthProvider, getAuth, GoogleAuthProvider } from 'firebase/auth'
import firebaseui, { auth } from 'firebaseui'
import { app } from '../lib/firebase'

const ui = new firebaseui.auth.AuthUI(getAuth(app))

const uiConfig = {
    signInSUccessUrl: '/dashboard',
    signInOptions: [
        GoogleAuthProvider.PROVIDER_ID,
        EmailAuthProvider.PROVIDER_ID,
    ],
}

ui.start('#firebaseui-auth-container', uiConfig)

function login() {
    return (
        <>
            <div id="firebaseui-auth-container"></div>
            <div id="loader">Loading...</div>
        </>
    )
}

export default login
