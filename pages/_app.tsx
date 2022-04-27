import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { UserContext } from '../lib/userContext'
import { useUserData } from '../lib/firebaseAuth'

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
