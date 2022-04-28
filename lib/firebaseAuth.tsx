import { signInWithPopup, signOut } from 'firebase/auth'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import Router from 'next/router'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, firestore, googleProvider } from './firebaseInit'

export function useUserData() {
    const [user, loading] = useAuthState(auth)

    return { user, loading }
}

export const SignInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider)
        .then(async (result) => {
            const user = result.user
            const userDoc = doc(firestore, 'users', user.uid)
            const docSnap = await getDoc(userDoc)

            if (docSnap.exists()) {
                console.log('User logged in')
            } else {
                console.log('User Created')
                //Create document
                await setDoc(doc(firestore, 'users', user.uid), {
                    uid: user.uid,
                    photoUrl: user.photoURL,
                    displayName: user.displayName,
                    admin: false,
                })
            }
            Router.push('/dashboard')
        })
        .catch((err) => {
            const errorMessage = err.message
            console.log(errorMessage)
        })
}

export const SignOut = () => {
    signOut(auth)
        .then(() => {
            Router.push('/')
        })
        .catch((err) => {
            const errorMessage = err.message
            console.log(errorMessage)
        })
}
