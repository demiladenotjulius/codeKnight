import React, { useState } from 'react';
import Header from '../components/Header';
import { Fade, Slide } from 'react-reveal';
import Footer from '../components/Footer';
import HelpToBuildDream from '../components/HelpToBuildDream';
import { Link } from 'react-router-dom';

const Portfolio = () => {
    const [portVal, setPortVal] = useState(0);
    const handleSelectChange = (event) => {
        setPortVal(event.target.value);
    };
    const [slideVal, setSlideVal] = useState(0);
    return (
        <div className="w-full bg-light-pink relative">
            <Header isDark={false} />
            <div className='w-full px-6  lg:px-32 bg-custom-dark md:pt-40 pt-36 pb-24 text-white '>
                <div className='flex flex-col w-full items-center mx-auto max-w-[1440px] py-4 md:gap-6 gap-4'>
                    <h2 className='md:text-7xl text-[56px] font-extrabold tracking-[-1px]'>
                        Portfolio
                    </h2>
                    <p className='text-center w-full md:w-[45%]'>
                        Explore My Work and Expertise in Web Development
                    </p>
                </div>
            </div>
            <div className='w-full px-6  lg:px-32'>
                <Slide right>
                    <div className='flex flex-col w-full mx-auto max-w-[1440px] gap-10 md:gap-32 mt-20'>
                        <div className='hidden items-center justify-center gap-16 md:flex'>
                            <div className='flex justify-center items-center gap-16 '>
                                <button className={`${portVal == 0 ? 'opacity-100' : 'opacity-65'} relative`} onClick={() => setPortVal(0)}>
                                    Show All
                                    <p className='absolute top-[-12px] right-[-9px] text-sm'>
                                        14
                                    </p>
                                </button>
                                <button className={`${portVal == 1 ? 'opacity-100' : 'opacity-65'} relative`} onClick={() => setPortVal(1)}>
                                    Mobile
                                    <p className='absolute top-[-12px] right-[-9px] text-sm'>
                                        6
                                    </p>
                                </button>
                                <button className={`${portVal == 2 ? 'opacity-100' : 'opacity-65'} relative`} onClick={() => setPortVal(2)}>
                                    Website
                                    <p className='absolute top-[-12px] right-[-9px] text-sm'>
                                        4
                                    </p>
                                </button>
                            </div>
                        </div>
                        <select className='block md:hidden px-4 py-2 rounded-md border border-light-grey' value={portVal} onChange={handleSelectChange}>
                            <option value={0}>Show All</option>
                            <option value={1}>Mobile</option>
                            <option value={2}>Website</option>
                        </select>
                        <div className='w-full flex flex-col gap-8'>
                            <Link to="/detailed" className='w-full md:aspect-video overflow-hidden relative'>
                                <p className='absolute bottom-7 left-4 font-extrabold text-white text-5xl'>KeyBoard WEB</p>
                                <img src='/projects/1.png' className='rounded-md w-full h-full' />
                            </Link>
                            <div className='w-full flex-col md:flex-row flex gap-8'>
                                <Link to="/detailed" className='w-full md:w-[50%] overflow-hidden relative'>
                                    <p className='absolute bottom-7 left-4 font-extrabold text-white text-5xl'>SOFA WEB</p>
                                    <img src='/projects/1.png' className='rounded-md h-full w-full' />
                                </Link>
                                <Link to="/detailed" className='w-full md:w-[50%] overflow-hidden relative'>
                                    <p className='absolute bottom-7 left-4 font-extrabold text-white text-5xl'>SOFA WEB</p>
                                    <img src='/projects/2.png' className='rounded-md h-full w-full' />
                                </Link>
                            </div>
                            <div className='w-full flex-col md:flex-row flex gap-8'>
                                <Link to="/detailed" className='w-full md:w-[50%] overflow-hidden relative'>
                                    <p className='absolute bottom-7 left-4 font-extrabold text-white text-5xl'>SOFA WEB</p>
                                    <img src='/projects/3.png' className='rounded-md h-full w-full' />
                                </Link>
                                <Link to="/detailed" className='w-full md:w-[50%] overflow-hidden relative'>
                                    <p className='absolute bottom-7 left-4 font-extrabold text-white text-5xl'>SOFA WEB</p>
                                    <img src='/projects/4.png' className='rounded-md h-full w-full' />
                                </Link>
                            </div>
                        </div>
                        <div className='flex items-center justify-center mx-auto gap-2'>
                            <div className={`${slideVal == 0 ? 'bg-custom-orange text-white' : 'bg-white'} text-sm font-extrabold rounded-md h-12 w-12 flex items-center justify-center`} onClick={() => setSlideVal(0)}>
                                1
                            </div>
                            <div className={`${slideVal == 1 ? 'bg-custom-orange text-white' : 'bg-white'} text-sm font-extrabold rounded-md h-12 w-12 flex items-center justify-center`} onClick={() => setSlideVal(1)}>
                                2
                            </div>
                            <div className={`${slideVal == 2 ? 'bg-custom-orange text-white' : 'bg-white'} text-sm font-extrabold rounded-md h-12 w-12 flex items-center justify-center`} onClick={() => setSlideVal(2)}>
                                3
                            </div>
                            <div className={`${slideVal == 3 ? 'bg-custom-orange text-white' : 'bg-white'} text-sm font-extrabold rounded-md h-12 w-12 flex items-center justify-center`} onClick={() => setSlideVal(3)}>
                                4
                            </div>
                            <div className={`${slideVal == 4 ? 'bg-custom-orange text-white' : 'bg-white'} text-sm font-extrabold rounded-md h-12 w-12 flex items-center justify-center`} onClick={() => setSlideVal(4)}>
                                5
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>
            <div className='w-full px-6  lg:px-32 mt-20 md:mt-28'>
                <Fade>
                    <div className='flex flex-col w-full mx-auto max-w-[1440px]'>
                        <HelpToBuildDream />
                    </div>
                </Fade>
            </div>
            <Footer />
        </div>
    );
}

export default Portfolio;
