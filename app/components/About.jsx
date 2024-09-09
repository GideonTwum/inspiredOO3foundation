import Image from 'next/image'
import React from 'react'
import InfoCard from './InfoCard'

const About = () => {
  return (
    <div id='about' className='flex p-4 items-center gap-4 flex-col min-h-screen bg-[#F9FAFD]'>
        <div>
            <h1 className='text-2xl font-bold '>About Us</h1>
        </div>
        <div className='lg:flex lg:justify-center lg:grid lg:grid-cols-3 lg:p-6 grid grid-cols-1 gap-10  '>
           
            <div className='  gap-4'> 
                <InfoCard 
                    
                    title='What is INSPIRED OO3 FOUNDATION'
                    desc='We are a dedicated non-governmental organisation committed to improving lives and uplifting the face value of every family. Through eduacation, empowerment, and community support, we strive to create lasting impact, We believe in the power of collaboration and inclusivity , ensuring that no one is left behind.'
                />
            </div>
            <div className='  gap-4'>
            <InfoCard 
                    title='Vision'
                    desc='Our goal is for every household to have at least one individual who is empowered to uplift and inspire the next generation, creating a cycle of growth and empowerment within the family.'
                />
                
            </div>
            <div className='  gap-4'>
                 <InfoCard 
                    title='Mission'
                    desc='Uplifting the face value of every nation'
                />
            </div>
          
        </div>
    </div>
  )
}

export default About