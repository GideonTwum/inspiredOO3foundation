import Image from 'next/image'
import React from 'react'

const CartCard = ({title, desc, price, image}) => {
  return (
    <div>
        <div className='flex items-start lg:flex lg:flex-col justify-between flex-col h-[100%] shadow-lg p-4 gap-2  rounded-lg'>
            <Image className='rounded-lg lg:ml-4'
            width={300}
            height={300}
            src={image}
            alt='a nice dress made by the kids'
            />
            <p className='font-bold text-[18px] capitalize mt- text-gray-600'>{title}</p>
            <p className='text-10px text-[#818181]'>{desc}</p>
            <div className='flex gap-9 lg:flex lg:items-center lg:gap-[14rem] items-center mt-4 justify-between'>
            <p>{price}</p>
            <button className='bg-yellow-500 p-2 rounded-lg text-white text-sm'>Purchase</button>
            </div>
           
        </div>
    </div>
  )
}

export default CartCard