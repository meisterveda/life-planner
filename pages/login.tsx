import { auth, firestore } from '../lib/firebase'
import { signOut } from 'firebase/auth'
import {
    ReactChild,
    ReactFragment,
    ReactPortal,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react'
import { UserContext } from '../lib/Context'
import { SignInWithGoogle } from '../lib/hooks'
import { doc, getDoc, writeBatch } from 'firebase/firestore'
import debounce from 'lodash.debounce'

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

function SignOutButton() {
    return (
        <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => signOut(auth)}
        >
            Sign Out
        </button>
    )
}

function login() {
    const { user, username } = useContext(UserContext)

    return (
        <main>
            {user ? (
                !username ? (
                    <UsernameForm />
                ) : (
                    <SignOutButton />
                )
            ) : (
                <SignInWithGoogleButton />
            )}
        </main>
    )
}

export default login

function UsernameForm() {
    const [formValue, setFormValue] = useState('')
    const [isValid, setIsValid] = useState(false)
    const [loading, setLoading] = useState(false)

    const { user, username } = useContext(UserContext)

    const onSubmit = async (e: any) => {
        e.preventDefault()

        //create ref for both documents
        const userDoc = doc(firestore, `users/${user.uid}`)
        const usernameDoc = doc(firestore, `usernames/${formValue}`)

        //commit both docs together as batch write.
        const batch = writeBatch(firestore)
        batch.set(userDoc, {
            username: formValue,
            photoURL: user.phpURL,
            displayName: user.displayName,
        })
        batch.set(usernameDoc, { uid: user.uid })

        await batch.commit()
    }

    const onChange = (e: any) => {
        //force form value typed in form to match correct format
        const val = e.target.value.toLowerCase()
        const re = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/
        // Only set form value if length is < 3 OR it passes regex
        if (val.length < 3) {
            setFormValue(val)
            setLoading(false)
            setIsValid(false)
        }

        if (re.test(val)) {
            setFormValue(val)
            setLoading(true)
            setIsValid(false)
        }
    }

    useEffect(() => {
        // Hit the database for username match after each debounced change
        // useCallback is required for debounce to work
        const checkUsername = useCallback(
            debounce(async (username: string) => {
                if (username.length >= 3) {
                    const ref = doc(firestore, `usenames/${username}`)
                    const { exists } = await getDoc(ref)
                    console.log('Firestore read executed!') //debug
                    setIsValid(!exists)
                    setLoading(false)
                }
            }, 500),
            []
        )
        checkUsername(formValue)
    }, [formValue])

    return (
        !username && (
            <section>
                <h3>Choose Username</h3>
                <form onSubmit={onSubmit}>
                    <div className="mb-6">
                        <label
                            htmlFor="website-admin"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Username
                        </label>
                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                                @
                            </span>
                            <input
                                type="text"
                                id="username"
                                className="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="username"
                                value={formValue}
                                onChange={onChange}
                            ></input>
                        </div>
                    </div>
                    <UsernameMessage
                        username={formValue}
                        isValid={isValid}
                        loading={loading}
                    />
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        disabled={!isValid}
                    >
                        Submit Username
                    </button>

                    <h3>Debug State</h3>
                    <div>
                        Username: {formValue}
                        <br />
                        Loading: {loading.toString()}
                        <br />
                        Username Valid: {isValid.toString()}
                    </div>
                </form>
            </section>
        )
    )
}

function UsernameMessage({ username, isValid, loading }) {
    if (loading) {
        return <p>Checking...</p>
    } else if (isValid) {
        return <p className="text-success">{username} is available!</p>
    } else if (username && !isValid) {
        return <p className="text-danger">That username is taken!</p>
    } else {
        return <p></p>
    }
}
