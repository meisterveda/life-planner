import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { UserContext } from '../lib/Context'

import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, firestore } from '../lib/firebase'
import { doc } from 'firebase/firestore'
import { useUserData } from '../lib/hooks'

function MyApp({ Component, pageProps }: AppProps) {
    const userData = useUserData()

    return (
        <UserContext.Provider value={userData}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </UserContext.Provider>
    )
}

export default MyApp
