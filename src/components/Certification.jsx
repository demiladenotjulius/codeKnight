import React from 'react';

const Certification = () => {
    return (
        <div className='w-full flex flex-col items-center gap-14 py-12'>
            <h2 className='font-extrabold text-[40px] md:text-[56px] '>
                Certification
            </h2>
            <div className='w-full flex flex-col'>
                <div className='w-full flex flex-col justify-between gap-3 md:flex-row items-center py-8 md:py-4 border-t border-b border-light-grey'>
                    <div className='flex flex-col md:flex-row gap-6 items-center'>
                        <img src='/cert/cert1.png' />
                        <p className='text-xl'>
                            Google
                        </p>
                    </div>
                    <div className='md:w-[52%] flex flex-col items-center gap-3 md:justify-between md:flex-row'>
                        <p className=' opacity-65 text-lg'>
                            25 Oct, 2021
                        </p>
                        <div className='flex flex-col md:flex-row gap-6 items-center'>
                            <p className='text-xl'>
                                Awwwards
                            </p>
                            <img src='/cert/cert4.png' />
                        </div>
                    </div>

                </div>
                <div className='w-full flex flex-col justify-between gap-3 md:flex-row items-center py-8 md:py-4 border-b border-light-grey'>
                    <div className='flex flex-col md:flex-row gap-6 items-center'>
                        <img src='/cert/cert2.png' />
                        <p className='text-xl'>
                            Coursera
                        </p>
                    </div>
                    <div className='md:w-[52%] flex flex-col items-center gap-3 md:justify-between md:flex-row'>
                        <p className=' opacity-65 text-lg'>
                            19 Oct, 2021
                        </p>
                        <div className='flex flex-col md:flex-row gap-6 items-center'>
                            <p className='text-xl'>
                                CSS Design Awards
                            </p>
                            <img src='/cert/cert5.png' />
                        </div>
                    </div>

                </div>
                <div className='w-full flex flex-col justify-between gap-3 md:flex-row items-center py-8 md:py-4 border-b border-light-grey'>
                    <div className='flex flex-col md:flex-row gap-6 items-center'>
                        <img src='/cert/cert3.png' />
                        <p className='text-xl'>
                            Udemy
                        </p>
                    </div>
                    <div className='md:w-[52%] flex flex-col items-center gap-3 md:justify-between md:flex-row'>
                        <p className=' opacity-65 text-lg'>
                            7 Oct, 2021
                        </p>
                        <div className='flex flex-col md:flex-row gap-6 items-center'>
                            <p className='text-xl'>
                                The FWA
                            </p>
                            <img src='/cert/cert6.png' />
                        </div>
                    </div>

                </div>
            </div>
            <p className='text-lg'>
                <span className=' opacity-65'>Want more awards?</span>&nbsp;Explore Now
            </p>
        </div>
    );
}

export default Certification;
