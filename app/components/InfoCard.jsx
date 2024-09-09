import Image from 'next/image'
import React from 'react'

const InfoCard = ({title, desc, image}) => {
  return (
    <div>
        <div className='grid grid-cols-1'>
          <div>
            <Image  className='rounded-md'
            width={300}
            height={300}
            src='/images/us.jpg'
            alt='an image of us'
            />
          </div>
          <h1 className='font-bold text-gray-700'>{title}</h1>
          <p className='text-gray-500'>{desc}</p>
        </div>
      
    </div>
  )
}

export default InfoCard