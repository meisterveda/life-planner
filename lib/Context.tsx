import { createContext } from 'react'

interface User {
    user: string
    username: string
}

export const UserContext = createContext({ user: null, username: null })
