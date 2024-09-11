'use client'
import React from 'react'

const page = () => {
    const donate = () =>{
        window.location.href='/donate'
    }
  return (
    <div className='flex flex-col items-center min-h-screen justify-center'>
        <div className='flex flex-col  gap-4'>
            <div>
                <h1 className='font-bold text-3xl text-center'>LOGIN </h1>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="">Email</label>
                <input type="email" className='p-4 border-[1px] border-[#ccc] outline-none lg:w-[30vw] w-[85vw] rounded-lg'  />
            </div>
            <div className='flex flex-col'>
                <label htmlFor="">Password</label>
                <input type="password" className='p-4 border-[1px] border-[#ccc] outline-none lg:w-[30vw] w-[85vw] rounded-lg'  />
            </div>
            <div className='mt-4'>
                <button onClick={()=> donate()} className='bg-blue-200 w-[85vw] p-4 lg:w-[30vw] rounded-lg font-bold'> Login</button>
            </div>
            <div className='flex items-start mt-4'>
                <p>Don't have an account? <a className='text-[dodgerblue]' href="/signup">Signup</a></p>
            </div>
        </div>
        <div>

        </div>
    </div>
  )
}

export default page