import { signInWithPopup, signOut } from 'firebase/auth'
import { doc, onSnapshot, writeBatch } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, firestore, googleProvider } from './firebase'

export default function useFirebaseAuth() {
    const [user, loading] = useAuthState(auth)
    const [uid, setUid] = useState(null)

    useEffect(() => {
        //turn off realtime subscription
        let unsubscribe
        if (user) {
            const userDocRef = doc(firestore, 'user', user.uid)

            unsubscribe = onSnapshot(userDocRef, (doc) => {
                setUid(doc.data()?.uid)
            })
        } else {
            setUid(null)
        }
    }, [user])

    const SignInWithGoogle = async () => {
        await signInWithPopup(auth, googleProvider)
            .then(async (result) => {
                const user = result.user
                const userDoc = doc(firestore, `users/${user.uid}`)

                const batch = writeBatch(firestore)
                batch.set(userDoc, {
                    uid: user.uid,
                    photoUrl: user.photoURL,
                    displayName: user.displayName,
                })

                await batch.commit
            })
            .catch((err) => {
                const errorMessage = err.message
                console.log(errorMessage)
            })
    }

    const SignOut = () => {
        signOut(auth)
            .then(clear)
            .catch((err) => {
                const errorMessage = err.message
                console.log(errorMessage)
            })
    }

    const clear = () => {
        setUid(null)
    }

    return {
        SignInWithGoogle,
        SignOut,
        uid,
        user,
        loading,
    }
}
