import React, { useState } from 'react';
import Logo from './Logo';
import { BrowserRouter as Router, Route, useLocation, useParams, Link } from 'react-router-dom';
import { BiCaretUp } from "react-icons/bi";

const Header = ({ isDark }) => {
    const location = useLocation(); // Get the current location object
    const [isNav, setIsNav] = useState(false);

    return (
        <div className='w-full absolute flex justify-center z-10'>
            <div className='w-full px-6  lg:px-32 '>
                <div className='flex flex-col w-full items-center mx-auto max-w-[1440px] py-4'>
                    <div className={`${isDark ? 'text-custom-dark' : 'text-white'} w-full flex items-center justify-between`}>
                        <Link to='/' className='cursor-pointer'>
                            <Logo isDark={isDark} />
                        </Link>
                        <div className='hidden items-center justify-center gap-16 lg:flex'>
                            <Link to='/' className={`${location.pathname == '/' ? isDark ? 'border-b-custom-dark' : 'border-white' : 'border-b-transparent'} border-b pb-1 px-2 cursor-pointer`}>
                                Home
                            </Link>
                            <Link to='/services' className={`${location.pathname == '/services' ? isDark ? 'border-b-custom-dark' : 'border-white' : 'border-b-transparent'} border-b pb-1 px-2 cursor-pointer`}>
                                Services
                            </Link>
                            <Link to='/portfolio' className={`${location.pathname == '/portfolio' ? isDark ? 'border-b-custom-dark' : 'border-white' : 'border-b-transparent'} border-b pb-1 px-2 cursor-pointer`}>
                                Portfolio
                            </Link>
                            <Link to='/skills' className={`${location.pathname == '/skills' ? isDark ? 'border-b-custom-dark' : 'border-white' : 'border-b-transparent'} border-b pb-1 px-2 cursor-pointer`}>
                                Skills
                            </Link>
                            <Link to='/about' className={`${location.pathname == '/about' ? isDark ? 'border-b-custom-dark' : 'border-white' : 'border-b-transparent'} border-b pb-1 px-2 cursor-pointer`}>
                                About
                            </Link>
                        </div>
                        <Link to='/contact' className={`${isDark ? 'border-custom-dark' : 'border-white'} hidden border rounded-md uppercase w-[138px] h-[48px] text-sm font-extrabold lg:flex items-center justify-center cursor-pointer`}>
                            contact
                        </Link>
                        <div className='lg:hidden flex relative'>
                            <button className=' cursor-pointer hover:scale-105 duration-300  ' onClick={() => setIsNav(!isNav)}>
                                {
                                    isDark ? (<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                        <rect x="0.5" y="0.5" width="47" height="47" rx="5.5" stroke="#28293E" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16 18C16 17.4477 16.4477 17 17 17H31C31.5523 17 32 17.4477 32 18C32 18.5523 31.5523 19 31 19H17C16.4477 19 16 18.5523 16 18ZM16 24C16 23.4477 16.4477 23 17 23H31C31.5523 23 32 23.4477 32 24C32 24.5523 31.5523 25 31 25H17C16.4477 25 16 24.5523 16 24ZM17 29C16.4477 29 16 29.4477 16 30C16 30.5523 16.4477 31 17 31H31C31.5523 31 32 30.5523 32 30C32 29.4477 31.5523 29 31 29H17Z" fill="#28293E" />
                                    </svg>) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                            <rect x="0.5" y="0.5" width="47" height="47" rx="5.5" stroke="white" stroke-opacity="0.295743" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16 18C16 17.4477 16.4477 17 17 17H31C31.5523 17 32 17.4477 32 18C32 18.5523 31.5523 19 31 19H17C16.4477 19 16 18.5523 16 18ZM16 24C16 23.4477 16.4477 23 17 23H31C31.5523 23 32 23.4477 32 24C32 24.5523 31.5523 25 31 25H17C16.4477 25 16 24.5523 16 24ZM17 29C16.4477 29 16 29.4477 16 30C16 30.5523 16.4477 31 17 31H31C31.5523 31 32 30.5523 32 30C32 29.4477 31.5523 29 31 29H17Z" fill="white" />
                                        </svg>
                                    )
                                }
                            </button>
                            {
                                isNav && (
                                    <div className={`${isDark ? 'bg-light-grey' : 'bg-custom-dark'} rounded-md shadow-xl absolute py-6 pl-4 pr-12 top-8 right-4`}>
                                        <Logo isDark={isDark} />
                                        <div className='flex flex-col gap-1 mt-2'>
                                            <Link to='/' className={`${location.pathname == '/' ? 'opacity-100' : 'opacity-65'} pb-1 cursor-pointer`}>
                                                Home
                                            </Link>
                                            <Link to='/services' className={`${location.pathname == '/services' ? 'opacity-100' : 'opacity-65'} pb-1 cursor-pointer`}>
                                                Services
                                            </Link>
                                            <Link to='/portfolio' className={`${location.pathname == '/portfolio' ? 'opacity-100' : 'opacity-65'} pb-1 cursor-pointer`}>
                                                Portfolio
                                            </Link>
                                            <Link to='/skills' className={`${location.pathname == '/skills' ? 'opacity-100' : 'opacity-65'} pb-1 cursor-pointer`}>
                                                Skills
                                            </Link>
                                            <Link to='/about' className={`${location.pathname == '/about' ? 'opacity-100' : 'opacity-65'} pb-1 cursor-pointer`}>
                                                About
                                            </Link>
                                            <Link to='/contact' className={`${location.pathname == '/contact' ? 'opacity-100' : 'opacity-65'} pb-1 cursor-pointer`}>
                                                Contact
                                            </Link>
                                        </div>
                                        <div className={`${isDark ? 'border-custom-dark' : 'border-white'} absolute top-2 right-2 w-4 h-4 flex items-center justify-center rounded-full border hover:scale-105 cursor-pointer`}
                                            onClick={() => setIsNav(false)}
                                        >
                                            <BiCaretUp className=' text-3xl' />
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
