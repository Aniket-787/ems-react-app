import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from "./Components/Dashboard/AdminDashboard"
import { AuthContext } from './Context/AuthProvider'
const App = () => {
   const [user, setUser] = useState("")
   let authData = useContext(AuthContext)
   console.log(authData);
   

   const loginHandler =(email,password)=>{
    if(email == "admin@me.com" && password ==="123"){
      setUser("admin")
    }else if(email == "user@me.com" && password ==="123"){
      setUser("user")
    }
    }

  return (
    <div >
      {!user?<Login loginHandler={loginHandler}/>:""}
     {user == "admin"?<AdminDashboard/>:<EmployeeDashboard/>}
    </div>
  )
}

export default App