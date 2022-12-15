import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'

const AuthContext = createContext({})

export function useAuth() {
  return useContext(AuthContext)
}
export function AuthProvider(children: any) {
  const [currentUser, setCurrentUser] = useState()

  function singUp(email: any, password: any) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  useEffect(() => {
    const unsubscribe: any = auth.onAuthStateChanged((user: any) => {
      setCurrentUser(user)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    singUp,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
