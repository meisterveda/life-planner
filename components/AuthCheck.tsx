import React, { useContext } from 'react'
import { UserContext } from '../lib/userContext'
import Link from 'next/link'

function AuthCheck(props) {
    const { user } = useContext(UserContext)

    return user
        ? props.childfren
        : props.fallback || <Link href="/login">You must be signed in.</Link>
}

export default AuthCheck
