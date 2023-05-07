import React from 'react'
import {SlSocialInstagram} from 'react-icons/sl'
import {TiSocialFacebook} from 'react-icons/ti'
import {TiSocialLinkedin} from 'react-icons/ti'
import {SlSocialGithub} from 'react-icons/sl'
import {TiSocialTwitter} from 'react-icons/ti'

const Footer = () => {
  return (
    <div className='w-[100%] py-8 md:y-0 h-[400px] px-6 md:h-[300px] flex flex-col md:flex-row md:flex items-center justify-center'>
      <div className='footerWrapper1 h-[100%] w-[100%] md:w-[25%] flex flex-col justify-center '>
        <div className='w-[100%] text-2xl font-bold text-[#00df9a]'>REACT.</div>
        <div className='my-4 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque error, beatae facilis, reiciendis nemo odio sapiente distinctio quidem officiis corporis aliquam iusto consequatur. </div>
        <div className='flex flex-row  w-[80%] '>
            <TiSocialFacebook size={35} className='mr-[30px]'/>
            <SlSocialInstagram size={35} className='mr-[30px]'/>
            <TiSocialLinkedin size={35} className='mr-[30px]'/>
            <SlSocialGithub size={35} className='mr-[30px]'/>
            <TiSocialTwitter size={35} className='mr-[30px]'/>
        </div>
      </div>
      <div className='footerWrapper2 py-7 h-[100%] w-[100%] md:w-[50%] flex flex-row ml-3 md:ml-6'>
        <div className='w-[30%] h-[100%] flex flex-col  justify-between'>
            <div className='text-[20px] underline text-gray-500'>Solutions</div>
            <div>Analytics</div>
            <div>Commerce</div>
            <div>Insights</div>
            <div>Marketing</div>
        </div>
        <div className='w-[30%] h-[100%] mx-8 flex flex-col  justify-between'>
        <div className='text-[20px] underline text-gray-500'>Support</div>
            <div>Pricing</div>
            <div>Documentation</div>
            <div>Guides</div>
            <div>API Statutes</div>
        </div>
        <div className='w-[30%] h-[100%] flex flex-col  justify-between'>
        <div className='text-[20px] underline text-gray-500'>Company</div>
            <div>About</div>
            <div>Blog</div>
            <div>Jobs</div>
            <div>Press</div>
            <div>Partners</div>
        </div>
        <div className='w-[30%] h-[100%] flex flex-col  justify-between'>
        <div className='text-[20px] underline text-gray-500'>Legal</div>
            <div>Claim</div>
            <div>Privacy</div>
            <div>Terms</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
