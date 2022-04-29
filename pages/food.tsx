import React from 'react'
import Sidebar from '../components/Sidebar'

function Food() {
    return (
        <main className="container flex items-start justify-between mx-auto">
            <div className="flex flex-col px-4 py-4 ">
                <Sidebar />
            </div>

            <div className="w-full h-full p-4 m-8">
                <div className="flex items-center justify-center p-40 border-4 border-dotted">
                    Main
                </div>
            </div>
        </main>
    )
}

export default Food
