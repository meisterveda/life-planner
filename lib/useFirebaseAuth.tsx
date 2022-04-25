import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { app } from './firebase'

interface UserData {
    uid: number
    email: string
}

const formatAuthUser = (user: UserData) => ({
    uid: user.uid,
    email: user.email,
})

function useFirebaseAuth() {
    const [authUser, setAuthUser] = useState<UserData | null>(null)
    const [loading, setLoading] = useState(true)

    const authStateChanged = async (authState: {
        uid: number
        email: string
    }) => {
        if (!authState) {
            setAuthUser(null)
            setLoading(false)
            return
        }

        setLoading(true)
        var formattedUser = formatAuthUser(authState)
        setAuthUser(formattedUser)
        setLoading(false)
    }

    useEffect(() => {
        const unsubscribe = getAuth(app).onAuthStateChanged(authStateChanged)
        return () => unsubscribe()
    }, [])

    const clear = () => {
        setAuthUser(null)
        setLoading(true)
    }

    const signInWithEmail = (email: string, password: string) => {
        signInWithEmailAndPassword(getAuth(app), email, password)
    }

    return {
        authUser,
        loading,
    }
}

export default useFirebaseAuth
