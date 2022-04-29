import Image from 'next/image'
import { userInfo } from 'os'
import React from 'react'
import Sidebar from '../components/Sidebar'

function Dashboard({ user }) {
    return (
        <main className="container flex items-start justify-between mx-auto">
            <div className="flex flex-col px-4 py-4 ">
                <Sidebar />
            </div>

            <div className="w-full h-full p-4 m-8">
                <div className="flex p-2 border-4 border-dotted">
                    <p className="text-4xl">Welcome user</p>
                </div>
                <div className="flex flex-col p-3 m-2 border-2 rounded-md border-gray-200">
                    <div>
                        <p className="text-2xl">Current Projection</p>
                    </div>
                    <div className="flex flex-row justify-between px-20 py-10">
                        <div>Card 1</div>
                        <div>Card 2</div>
                        <div>Card 3</div>
                    </div>
                </div>
                <div className="flex flex-col flex-auto p-2 m-2  border-2 rounded-md border-gray-200">
                    <div>
                        <p className="text-2xl">Income vs Expenses</p>
                    </div>
                    <div className="flex flex-row p-2 m-2  gap-x-3">
                        <div className="flex flex-col flex-auto p-2 border-2 rounded-md border-green-30 bg-green-200">
                            <p className="text-2xl">Income</p>
                            Chart
                        </div>
                        <div className="flex flex-col flex-auto p-2 border-2 rounded-md border-red-300 bg-red-200">
                            <p className="text-2xl">Expenses</p>
                            Chart
                        </div>
                    </div>
                </div>
                <div className="flex flex-col p-3 m-2 border-2 rounded-md border-gray-200">
                    <div>
                        <p className="text-2xl">Budget Summary</p>
                    </div>
                    <div className="flex flex-row p-2 m-2  gap-x-3">
                        <div className="flex flex-col flex-auto p-2 rounded-md bg-red-100">
                            <p className="text-2xl">Location Table</p>
                        </div>
                        <div className="flex flex-col flex-auto p-2 rounded-md bg-white-200">
                            <p className="text-2xl">Location Chart</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Dashboard
