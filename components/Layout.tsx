import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'
import { Toaster } from 'react-hot-toast'

type LayoutProps = {
    children: React.ReactNode
}

function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <div className="flex">
                <Sidebar />
                <main>
                    <div className="flex-1 flex-col md:flex-row">
                        {children}
                    </div>
                </main>
            </div>
            <Footer />
            <Toaster />
        </>
    )
}

export default Layout
