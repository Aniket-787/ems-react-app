import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard'
import AdminDashboard from "./Components/Dashboard/AdminDashboard"
import { AuthContext } from './Context/AuthContext'
const App = () => {
   const [user,setUser] = useState("")
   const [loggedInUserData, setLoggedInUserData] = useState(null)
   let authData = useContext(AuthContext)
   console.log(authData.employees);

  //  useEffect(() => {
  //    if(authData){
  //     let loggedInUser = localStorage.getItem("loggedInUser")
  //     if(loggedInUser){
  //       setUser(loggedInUser.role)
  //     }
  //    }
  //  }, [authData])
   
   
   const loginHandler =(email,password)=>{
    if(email == "admin@me.com" && password ==="123"){
      setUser("admin")
      localStorage.setItem("loggedInUser",JSON.stringify({role:"admin"}))
    }else if(authData){
      let employee =  authData.employees.find((e)=>email==e.email && password == e.password)
      if(employee){
      setLoggedInUserData(employee)
      setUser('employee')
      localStorage.setItem("loggedInUser",JSON.stringify({role:"employee"}))
      }
    }
    }

  return (
    <div >
      {!user?<Login loginHandler={loginHandler}/>:""}
     {user == "admin"?<AdminDashboard/>:(user?<EmployeeDashboard data={loggedInUserData}/>:null)}
    </div>
  )
}

export default App