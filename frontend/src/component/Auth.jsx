import React, { useContext, useState } from 'react'

const AuthContext =React.createContext()

export default function AuthProvider(props) {
    const[user,setuser]=useState(null)
    const[email,setEmail]=useState('')
    

    const login=(user,email)=>{
        setuser(user)
        setEmail(email)
        
    }

    const logout=()=>{
        setuser()
        setEmail('')
    }

  return (
    <AuthContext.Provider value={{user,email,login,logout}}>
        {props.children}
    </AuthContext.Provider>

  )
}
export const useAuth=()=>{
    return useContext(AuthContext)
}