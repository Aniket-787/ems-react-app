import React, { useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/LocalStorage'
import { AuthContext } from './AuthContext'
import {setLocalStorage} from '../utils/LocalStorage'
const AuthProvider = ({ children }) => {

  const [userData, setUserData] = useState({
  employees: [],
  admins: []
})

  useEffect(() => {
    setLocalStorage()
    const { employees, admins } = getLocalStorage()
    setUserData({ employees, admins })
  }, [])

  return (
    <AuthContext.Provider value={userData}>
      {children}
    </AuthContext.Provider>
  )
} 

export default AuthProvider
