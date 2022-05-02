import { auth, firestore } from './firebaseInit'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import { useContext } from 'react'
import { UserContext } from './userContext'

export const GetUserQuantity = async (category) => {
    if (user) {
        const docRef = doc(firestore, 'users', user.uid)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            const locations = docSnap.data().locations
            return locations
        } else {
            console.log('User doesnt exists')
        }
    }
}
