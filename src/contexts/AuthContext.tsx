import React, { useContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

const AuthContext = React.createContext({})

export function useAuth() {
  return useContext(AuthContext)
}
export function AuthProvider(children: any) {
  const [currentUser, setCurrentUser] = useState()

  function singUp(email: any, password: any) {
    console.log(email, password)

    return createUserWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const { onAuthStateChanged } = auth
    const unsubscribe = onAuthStateChanged((user: any) => {
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
