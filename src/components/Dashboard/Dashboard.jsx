import React from "react"
import useAuth from "../../features/auth/useAuth"

export default function Dashboard({code}) {
    const accesToken = useAuth(code)
    return <div>{code}</div>
}