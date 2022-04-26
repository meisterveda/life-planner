import { auth } from '../lib/firebase'
import { signOut } from 'firebase/auth'
import { useContext, useEffect } from 'react'
import { useAuth } from '../lib/AuthUserContext'
import { useRouter } from 'next/router'

//Sign in with google button
function SignInWithGoogleButton() {
    const { SignInWithGoogle } = useAuth()
    return (
        <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={SignInWithGoogle}
        >
            Sign in with Google
        </button>
    )
}

function SignOutButton() {
    const { user, loading, SignOut } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!loading && !user) router.push('/')
    }, [user, loading])

    return (
        <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={SignOut}
        >
            Sign Out
        </button>
    )
}

function login() {
    const { user } = useAuth()

    return <main>{user ? <SignOutButton /> : <SignInWithGoogleButton />}</main>
}

export default login
