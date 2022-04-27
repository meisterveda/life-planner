import { useContext, useEffect } from 'react'
import Lifelogo from './Logo'
import Link from 'next/link'
import { UserContext } from '../lib/userContext'
import { useRouter } from 'next/router'
import { SignOut } from '../lib/firebaseAuth'

function SignOutButton() {
    const { user, loading } = useContext(UserContext)
    const router = useRouter()

    useEffect(() => {
        if (!loading && !user) {
            router.push('/')
        }
    }, [user, loading])

    return (
        <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={SignOut}
        >
            Sign Out
        </button>
    )
}

function IsAdmin() {
    const { user } = useContext(UserContext)
    if (user.admin) {
        return true
    }
    return false
}

function Header() {
    const { user } = useContext(UserContext)

    return (
        <nav className="bg-white border-2 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link href="/">
                    <a>
                        <Lifelogo />
                    </a>
                </Link>
                <div className="flex md:order-2">
                    {/* user is signed-in and has userid */}
                    {user && (
                        <div className="flex items-center md:order-2">
                            <Link href="/dashboard" passHref>
                                <button
                                    type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Dashboard
                                </button>
                            </Link>
                            <Link href="/settings" passHref>
                                <button
                                    type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Settings
                                </button>
                            </Link>
                            {/* {isAdmin && (
                                <Link href="/admin" passHref>
                                    <button
                                        type="button"
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Admin
                                    </button>
                                </Link>
                            )} */}

                            <SignOutButton />
                        </div>
                    )}

                    {/* user is not signed-in and doesn't userid */}
                    {!user && (
                        <Link href="/login" passHref>
                            <button
                                type="button"
                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Login
                            </button>
                        </Link>
                    )}
                </div>
                <div
                    className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
                    id="mobile-menu-4"
                >
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        <li>
                            <Link href="/">
                                <a
                                    className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/howitworks">
                                <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    How it Works
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services">
                                <a
                                    href="#"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Services
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/aboutus">
                                <a className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                                    About US
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
