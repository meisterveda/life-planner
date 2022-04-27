import { auth } from '../lib/firebaseInit'
import { signOut } from 'firebase/auth'
import { useContext, useEffect } from 'react'
import { SignInWithGoogle, SignOut } from '../lib/firebaseAuth'
import { UserContext } from '../lib/userContext'
import { useRouter } from 'next/router'

//Sign in with google button
function SignInWithGoogleButton() {
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

function login() {
    const { user } = useContext(UserContext)
    const router = useRouter()

    return (
        <main>
            {user ? (
                <div>Already Logged in, maybe go to Dashboard?</div>
            ) : (
                <SignInWithGoogleButton />
            )}
        </main>
    )
}

export default login
