'use client'
import React from 'react'

const page = () => {
    const login = () =>{
        window.location.href='/login'
    }
  return (
    <div className='flex flex-col items-center mt-20'>
       <div>
            <h1 className='font-bold text-3xl text-center'>SIGNUP </h1>
       </div>
       <div className='flex flex-col items-center gap-4'>
            <div className='flex flex-col'>
                    <label className='' htmlFor="">Fullname</label>
                    <input type="text" className='p-4 border-[1px] border-[#ccc] outline-none w-[85vw] rounded-lg' />
            </div>
            <div className='flex flex-col'>
                    <label className='' htmlFor="">Email</label>
                    <input type="email" className='p-4 border-[1px] border-[#ccc] outline-none w-[85vw] rounded-lg' />
            </div>
            <div className='flex flex-col'>
                    <label className='' htmlFor="">Phone</label>
                    <input type="number" className='p-4 border-[1px] border-[#ccc] outline-none w-[85vw] rounded-lg' />
            </div>
            <div className='flex flex-col'>
                    <label className='' htmlFor="">Password</label>
                    <input type="password" className='p-4 border-[1px] border-[#ccc] outline-none w-[85vw] rounded-lg' />
            </div>
       </div>
       <div className='mt-4'>
            <button onClick={()=> login()} className='bg-blue-200 w-[85vw] p-4 rounded-lg font-bold'> Signup</button>
       </div>
       <div className='flex items-start mt-4'>
            <p>Already have an account? <a className='text-[dodgerblue]' href="/login">Login</a></p>
       </div>
      
    </div>
  )
}

export default page