import { signInWithPopup } from 'firebase/auth'
import { doc, onSnapshot } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, firestore, googleProvider } from './firebase'

export const SignInWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider)
}

export function useUserData() {
    const [user] = useAuthState(auth)
    const [username, setUsername] = useState(null)

    useEffect(() => {
        //turn off realtime subscription
        let unsubscribe
        if (user) {
            const userDocRef = doc(firestore, 'user', user.uid)

            unsubscribe = onSnapshot(userDocRef, (doc) => {
                setUsername(doc.data()?.username)
            })
        } else {
            setUsername(null)
        }
    }, [user])
    return { user, username }
}
