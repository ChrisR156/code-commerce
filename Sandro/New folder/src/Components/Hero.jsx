import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='max-w[800px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
      <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA</p>
      <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
      <div className='flex justify-center items-center'>
        <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexible financing for</p>
        <Typed strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={140} loop className='md:text-5xl sm:text-4xl text-xl font-bold pl-5 md:pl-4'/>
      </div>
      <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC & SASS platforms.</p>
      <button className='text-black hover:text-white duration-[400ms] bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Get Started</button>
   </div>
  )
}

export default Hero
