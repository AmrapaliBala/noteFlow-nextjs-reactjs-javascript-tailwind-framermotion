import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='max-w-7xl mx-auto px-6 py-10 mt-10 scroll-mt-20'>
      <div className='text-center'>
        <div className='w-xl flex items-center justify-center gap-2 mx-auto'>
            <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
            support@noteflow.com
        </div>
      </div>

    <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mt-12 py-6'>
        <p>© 2026 Amrapali. All rights reserved.</p>

        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a target='_blank' href="">Features</a></li>
            <li><a target='_blank' href="">Pricing</a></li>
            <li><a target='_blank' href="">Support</a></li>
        </ul>
    </div>

    </div>
  )
}

export default Footer
