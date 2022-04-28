import { auth } from '../lib/firebaseInit'
import { signOut } from 'firebase/auth'
import { useContext, useEffect } from 'react'
import { SignInWithGoogle, SignOut } from '../lib/firebaseAuth'
import { UserContext } from '../lib/userContext'
import { useRouter } from 'next/router'
import Lifelogo from '../components/Logo'

//Sign in with google button
function SignInWithGoogleButton() {
    return (
        <button
            type="button"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
        <main className="relative flex flex-col flex-grow justify-center">
            <div className="w-full p-6 m-auto bg-white border-t-4 border-gray-300 rounded-md shadow-md border-top lg:max-w-md">
                <div className="flex flex-col justify-center">
                    <div className="flex flex-col justify-center mt-6">
                        <Lifelogo />
                    </div>
                    <div className="mt-6 text-center">
                        Welcome, you can Sign In with Google below.
                    </div>
                    <div className="mt-6">
                        {user ? (
                            <div className="text-center">
                                Already Logged in, maybe go to Dashboard?
                            </div>
                        ) : (
                            <SignInWithGoogleButton />
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default login
