import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { AuthUserProvider } from '../lib/AuthUserContext'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AuthUserProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AuthUserProvider>
    )
}

export default MyApp
