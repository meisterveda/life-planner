import { createContext, useContext } from 'react'

export const UserContext = createContext({ user: null, loading: true })
