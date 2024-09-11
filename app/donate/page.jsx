'use client'
import React from 'react'
import CartCard from '../components/CartCard'
import { IoMdLogOut } from "react-icons/io";
import { Popconfirm } from 'antd';

const page = () => {


  return (
    <div className='p-4'>
         <div className='flex items-center justify-between'>
                <h1 className='font-bold text-lg'>IOO3F</h1>
                <div className='flex items-center gap-2'>
                <p>Hi, Romeo</p>
                <Popconfirm 
                title='Are you sure want logout?'
                okText='Logout'
                onConfirm={()=>{
                    location.href='/'
                }}>
                   <IoMdLogOut />
                </Popconfirm>
               
                </div>
                
            </div>
        <div className='flex flex-col items-center gap-4'>
            <div className='bg-[#ccc] tab h-[10vh] flex w-[90vw] justify-center rounded-lg mx-4 mt-4 items-center'>
                <p className='font-bold text-white '>There's more blessing in Giving!</p>
            </div>
            <div className='grid grid-cols-2 lg:grid lg:grid-cols-3 gap-4'>
                <CartCard 
                image='/images/children.jpg'
                title='straight dress'
                desc='a beautiful dress made out of love by our kids'
                price='$50'/>
                  <CartCard 
                image='/images/kids.jpg'  
                title='straight dress'
                desc='a beautiful dress made out of love by our kids'
                price='$50'/>
                  <CartCard 
                  image='/images/us.jpg'
                title='straight dress'
                desc='a beautiful dress made out of love by our kids'
                price='$50'/>
                  <CartCard 
                  image='/images/kids.jpg'
                title='straight dress'
                desc='a beautiful dress made out of love by our kids'
                price='$50'/>
                  <CartCard 
                  image='/images/children.jpg'
                title='straight dress'
                desc='a beautiful dress made out of love by our kids'
                price='$50'/>
                  <CartCard 
                  image='/images/us.jpg'
                title='straight dress'
                desc='a beautiful dress made out of love by our kids'
                price='$50'/>
            </div>
            <div className='border-[1px] border-[#ccc] p-4 px-8 rounded-full hover:border-[dodgerblue] hover:text-[dodgerblue] '>
                <button className='hover:text-[dodgerblue]'>View More</button>
            </div>
            
        </div>
    </div>
  )
}

export default page