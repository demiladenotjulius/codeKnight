import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Footer = ({ isDark }) => {
    return (
        <div className={`${isDark ? 'bg-custom-dark text-white' : 'bg-light-pink'} w-full pb-44  px-6  lg:px-32 text-lg`}>
            <div className='flex mx-auto w-full max-w-[1440px] pb-16 pt-12 flex-col items-center justify-between gap-12 md:gap-0 md:pt-20 md:flex-row md:items-start border-b border-b-light-grey'>
                <Logo isDark={!isDark} />
                <div className='flex flex-col items-center md:items-start gap-3'>
                    <p className='text-custom-orange mb-1'>MENU</p>
                    <Link to='/'>Home</Link>
                    <Link to='/services'>Services</Link>
                    <Link to='/portfolio'>Portfolio</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
                <div className='flex flex-col items-center md:items-start gap-3'>
                    <p className='text-custom-orange mb-1'>SERVICE</p>
                    <Link to='/services'>Design</Link>
                    <Link to='/services'>Development</Link>
                    <Link to='/services'>Research</Link>
                </div>
                <div className='gap-2 flex'>
                    <div className='w-[48px] h-[48px] rounded-full bg-custom-orange flex items-center justify-center'>
                        <img src='/facebook.svg'/>
                    </div>
                    <div className='w-[48px] h-[48px] rounded-full bg-custom-orange flex items-center justify-center'>
                        <img src='/twitter.svg'/>
                    </div> 
                    <div className='w-[48px] h-[48px] rounded-full bg-custom-orange flex items-center justify-center'>
                        <img src='/instagram.svg'/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
