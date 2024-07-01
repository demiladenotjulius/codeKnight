import React, { useState } from 'react';
import Masonry from "react-masonry-css";
import { Fade } from 'react-reveal';


const LatestWork = () => {
    const [portVal, setPortVal] = useState(0);
    const [isMore, setIsMore] = useState(false);
    return (
        <div className='flex flex-col w-full items-center mx-auto max-w-[1440px] pt-20 pb-8 md:pt-36 md:gap-11 gap-8 '>
            <h2 className='font-extrabold text-[40px] md:text-[56px] mb-8 text-white'>
                Latest Work
            </h2>
            <div className='flex items-center justify-center gap-16'>
                <div className='flex justify-center items-center gap-16 text-white'>
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
            <div className='w-full flex flex-col gap-8'>
                <div className='w-full flex-col md:flex-row flex gap-8'>
                    <div className='w-full md:w-[45%] overflow-hidden relative'>
                        <p className='absolute bottom-7 left-4 font-extrabold text-white text-5xl'>SOFA WEB</p>
                        <img src='/projects/1.png' className='rounded-md h-full w-full' />
                    </div>
                    <div className='w-full md:w-[55%] overflow-hidden relative'>
                        <p className='absolute bottom-7 left-4 font-extrabold text-white text-5xl'>SOFA WEB</p>
                        <img src='/projects/2.png' className='rounded-md h-full w-full' />
                    </div>
                </div>
                <div className='w-full flex-col md:flex-row flex gap-8'>
                    <div className='w-full md:w-[55%] overflow-hidden relative'>
                        <p className='absolute bottom-7 left-4 font-extrabold text-white text-5xl'>SOFA WEB</p>
                        <img src='/projects/3.png' className='rounded-md h-full w-full' />
                    </div>
                    <div className='w-full md:w-[45%] overflow-hidden relative'>
                        <p className='absolute bottom-7 left-4 font-extrabold text-white text-5xl'>SOFA WEB</p>
                        <img src='/projects/4.png' className='rounded-md h-full w-full' />
                    </div>
                </div>
                {
                    <Fade when={isMore}>
                        <div className={`${isMore ? 'flex' : 'hidden'} w-full flex-col md:flex-row gap-8`}>
                            <div className='w-full md:w-[45%] overflow-hidden relative'>
                                <p className='absolute bottom-7 left-4 font-extrabold text-white text-5xl'>SOFA WEB</p>
                                <img src='/projects/1.png' className='rounded-md h-full w-full' />
                            </div>
                            <div className='w-full md:w-[55%] overflow-hidden relative'>
                                <p className='absolute bottom-7 left-4 font-extrabold text-white text-5xl'>SOFA WEB</p>
                                <img src='/projects/2.png' className='rounded-md h-full w-full' />
                            </div>
                        </div>
                    </Fade>
                }
            </div>
            <button
                onClick={() => setIsMore(!isMore)}
                className='uppercase flex items-center justify-center w-[170px] h-[48px] text-white border-[#ffffff50] border rounded-md hover:scale-105 duration-500'>
                {
                    isMore ? 'Back' : 'Explore More'
                }
            </button>
        </div>
    );
}

export default LatestWork;
