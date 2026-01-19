import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const submitHandler =(e)=>{
        e.preventDefault()

        console.log(`Email: ${email} and Password: ${password}`)
        setEmail("")
        setPassword("")
    }
  return (
    <div className='h-screen w-screen flex items-center justify-center bg-black text-white bg-[url("https://static.vecteezy.com/system/resources/thumbnails/000/335/809/small_2x/office-worker.png")]'>
       <form onSubmit={(e)=>{
              submitHandler(e)  
            }} className=' rounded-3xl border border-emerald-500 flex flex-col gap-4 w-[30vw] h-[50vh] items-center justify-center bg-white'>
            <h1 className='text-3xl text-emerald-500 font-bold'>Log In</h1>
            <p className='text-red-400 text-center w-[70%]'>Hello, friend! I'm EMS you can trust everything. Let's get in touch!</p>
            <input value={email} onChange={(e)=>{
                setEmail(e.target.value)
            }} required className='w-[70%] px-3 h-11 outline-none border-2 rounded-3xl border-emerald-500 placeholder:text-gray-600 text-gray-600' type="email" placeholder='Enter your email...'/>
            <input value={password} onChange={(e)=>{
                setPassword(e.target.value)
            }} required className='w-[70%] px-3 h-11 placeholder:text-gray-600 outline-none border-2 rounded-3xl border-emerald-500 text-gray-600' type="password" placeholder='Enter password' />
            <button className='w-[70%] h-11 rounded-3xl text-black bg-emerald-500 hover:scale-101 transition-all'>Log In</button>
       </form>
    </div>
  )
}

export default Login