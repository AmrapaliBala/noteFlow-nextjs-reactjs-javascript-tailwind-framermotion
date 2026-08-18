import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Link from "next/link";
import { viga } from "@/app/fonts";

const Navbar = ({isDarkMode, setIsDarkMode}) => {
    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef();
    const openMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }
    const closeMenu = ()=>{
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScroll(true);
        } else {
            setIsScroll(false);
        }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
       <Image src={assets.header_bg_color} alt='' className='w-full' />
    </div>

      <nav className={`fixed w-full z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
        <a href="#top">
            <p className={`${viga.className} text-xl md:text-2xl ${isDarkMode?'text-white':'text-black'}`}>NoteFlow</p>
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"} `}>
            <li><a className='font-Ovo' href="#top">Home</a></li>
            <li><a className='font-Ovo' href="#about">About Us</a></li>
            <li><a className='font-Ovo' href="#services">Features</a></li>
            <li><a className='font-Ovo' href="#contact">Contact Us</a></li>
        </ul>

        <div className='flex items-center gap-3'>
            <button onClick={()=> setIsDarkMode(prev => !prev)}>
                <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6' />
            </button>

            <Link href="/dashboard" className="px-5 py-2 rounded-full bg-black text-white">
                Dashboard
            </Link>

            <a href="#contact" className='hidden lg:flex items-center gap-3 px-5 py-2 border border-gray-500 rounded-full font-Ovo dark:border-white/50'>
                Contact 
                <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className='w-3'/>
            </a>

            <button className='block md:hidden ml-3' onClick={openMenu}>
                <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6' />
            </button>
        </div>

        {/* -- ----- mobile menu ------  -- */}

        <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>
            <div className='absolute right-6 top-6' onClick={closeMenu}>
                <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-5 cursor-pointer' />
            </div>

            <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#about">About me</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#services">Services</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact me</a></li>
        </ul>
       </div>
      </nav>
    </>
  )
}

export default Navbar
