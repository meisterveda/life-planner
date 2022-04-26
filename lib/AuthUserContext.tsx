import { createContext, useContext } from 'react'
import useFirebaseAuth from './useFirebaseAuth'

const authUserContext = createContext({
    user: null,
    loading: true,
    uid: null,
    SignInWithGoogle: async () => {},
    SignOut: async () => {},
})

export function AuthUserProvider({ children }) {
    const auth = useFirebaseAuth()
    return (
        <authUserContext.Provider value={auth}>
            {children}
        </authUserContext.Provider>
    )
}

export const useAuth = () => useContext(authUserContext)
