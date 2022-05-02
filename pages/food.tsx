import { collection } from 'firebase/firestore'
import Sidebar from '../components/Sidebar'
import { auth, firestore } from '../lib/firebaseInit'
import { useCollection } from 'react-firebase-hooks/firestore'
import React from 'react'

function Food(props) {
    return (
        <main className="container flex items-start justify-between mx-auto">
            {/* <AuthCheck> */}
            <div className="flex flex-col px-4 py-4 ">
                <Sidebar />
            </div>

            <div className="w-full h-full p-4 m-8">
                <div className="flex p-2 border-4 border-dotted">
                    <FoodDisplay />
                </div>
            </div>
            {/* </AuthCheck> */}
        </main>
    )
}

export default Food

function FoodDisplay() {
    const uid = auth.currentUser.uid
    const ref = collection(firestore, 'users/' + uid + '/foods')
    const [value, loading, error] = useCollection(ref)

    const food = value?.docs.map((doc) => console.log(doc.data()))

    return (
        <div>
            <p>
                {error && <strong>Error: {JSON.stringify(error)}</strong>}
                {loading && <span>Collection: Loading...</span>}
                {value && <span>Collection: </span>}
            </p>
        </div>
    )
}
