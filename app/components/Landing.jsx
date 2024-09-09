'use client'
import React from 'react'
import Nav from './Nav'

const Landing = () => {
    const openDoante = () => {
        window.location.href='/login'
    }
  return (
    <div id='home' className='landing min-h-screen p-4 '>
        <Nav/>
        <div className='mt-[8rem] lg:mt-[10rem] lg:ml-[5rem]'>
            <p className='font-bold text-6xl text-white'>INSPIRED 003</p>
            <p className='font-semibold text-3xl text-white text-blue-100'>FOUNDATION</p>
            <p className='text-white'><i>Be Inspired To Inspire</i></p>
            
        </div>
        <div className='mt-4 lg:ml-[5rem]'>
            <button onClick={()=> openDoante()} className='text-white bg-[dodgerblue] p-2 w-[30vw] lg:w-[15vw] font-bold rounded-sm text-center'>Donate</button>
        </div>
       
    </div>
  )
}

export default Landing