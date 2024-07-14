import React from 'react';
import { Link } from 'react-router-dom';

const HelpToBuildDream = () => {
    return (
        <div className='bg-custom-orange rounded-md px-6 py-8 md:px-20 md:py-16 flex flex-col md:flex-row w-full justify-between items-center'>
            <div className='flex flex-col justify-between gap-3 md:gap-16'>
                <h2 className=' text-[40px] md:text-[56px] font-extrabold text-white tracking-tight leading-[60px]'>
                    I Help You
                    <br />
                    Build Your Dream
                    <br />
                    Project
                </h2>
                <Link to='/contact' className='uppercase flex items-center justify-center rounded-md bg-white shadow-button-contact text-sm font-extrabold w-[154px] h-[48px]'>
                    Contact Me
                </Link>
            </div>
            <div className='order-first md:order-2'>
                <img style={{width: '400px'}}
                    // src='/picBuild.png'
                  src='/1.png'

                />
            </div>
        </div>
    );
}

export default HelpToBuildDream;
