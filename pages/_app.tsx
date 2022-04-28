import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { UserContext } from '../lib/userContext'
import { useUserData } from '../lib/firebaseAuth'
import { Toaster } from 'react-hot-toast'
import Footer from '../components/Footer'
import Header from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
    const userData = useUserData()
    return (
        <UserContext.Provider value={userData}>
            <div className="flex flex-col h-screen">
                <Header />
                <Component {...pageProps} />
                <Footer />
            </div>
            <Toaster />
        </UserContext.Provider>
    )
}

export default MyApp
