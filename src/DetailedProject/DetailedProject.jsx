import React, { useState } from 'react';
import Header from '../components/Header';
import { Fade, Slide } from 'react-reveal';
import Footer from '../components/Footer';
import HelpToBuildDream from '../components/HelpToBuildDream';
import ReactPlayer from 'react-player';
import ReactPlayerStart from '../components/ReactPlayerStart';
import { Link } from 'react-router-dom';

const DetailedProject = () => {

    return (
        <div className="w-full bg-light-pink relative">
            <Header isDark={false} />
            <div className='w-full bg-custom-dark h-20'>
            </div>
            <div className='w-full px-6  lg:px-32 py-10'>
                <Slide left>
                    <div className='flex flex-col items-start md:items-center w-full mx-auto max-w-[1440px] gap-10 md:gap-32'>
                        <div className='w-full md:w-[570px] flex flex-col'>
                            <Link to="/portfolio" className='flex items-center gap-3 cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 15 10" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.03021 0L6.33508 1.28545L3.50442 4.09273H15V5.90727H3.50442L6.33508 8.71455L5.03021 10L0 5L5.03021 0Z" fill="#391400" />
                                </svg>
                                <p className='uppercase text-xs font-bold'>
                                    Back to portfolio
                                </p>
                            </Link>
                            <p className='w-full break-words font-extrabold md:text-7xl text-[56px] mt-12'>Work Media
                                Project</p>
                            <p className='w-full break-words text-xl mt-6 leading-8'>
                                Agency provides a full service range including technical skills, design, business understanding.
                            </p>
                            <p className='w-full break-words opacity-65 mt-8 leading-8'>
                                Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.
                            </p>
                            <div className=' mt-12 flex md:flex-row flex-col md:gap-36 gap-12'>
                                <div className='flex flex-col gap-2'>
                                    <p className='uppercase text-custom-orange tracking-[3px] mb-1'>
                                        category
                                    </p>
                                    <p className='leading-[36px]'>
                                        Art Direction<br />
                                        User Interface<br />
                                        Design Strategy<br />
                                        Web Development<br />
                                        Lunch
                                    </p>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <p className='uppercase text-custom-orange tracking-[3px] mb-1'>
                                        Client
                                    </p>
                                    <div>
                                        <img
                                            src="/canLogo2.svg"
                                        />
                                    </div>
                                    <p className='uppercase text-custom-orange tracking-[3px] mb-1 mt-10'>
                                        Date
                                    </p>
                                    <p className='text-xl'>
                                        Dec 2021
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>
            <div className='w-full px-6  lg:px-32'>
                <Slide right>
                    <div className='flex flex-col w-full mx-auto max-w-[1440px] gap-10 md:gap-32 mt-20'>
                        <div className='w-full md:aspect-video overflow-hidden relative'>
                            <img src='/projects/1.png' className='rounded-md w-full h-full' />
                        </div>
                    </div>
                </Slide>
            </div>
            <div className='w-full px-6  lg:px-32 py-10'>
                <Slide left>
                    <div className='flex flex-col items-start md:items-center w-full mx-auto max-w-[1440px] gap-10 md:gap-32'>
                        <div className='w-full md:w-[570px] flex flex-col'>
                            <p className='w-full break-words font-extrabold md:text-7xl text-[56px] mt-12'>
                                Problem
                            </p>
                            <p className='w-full break-words opacity-65 mt-8 leading-8'>
                                Ability to put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.
                            </p>
                            <p className='w-full break-words opacity-65 mt-8 leading-8'>
                                A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.
                            </p>
                        </div>
                    </div>
                </Slide>
            </div>
            <div className='w-full px-6  lg:px-32 py-10'>
                <Slide bottom>
                    <div className='flex w-full mx-auto max-w-[1440px] gap-4 md:gap-8'>
                        <div className='w-full md:w-[50%] aspect-video rounded-md z-10'>
                            <ReactPlayer width='100%' height='100%' url='https://www.youtube.com/watch?v=LXb3EKWsInQ' playIcon={ReactPlayerStart()} light />
                        </div>
                        <div className='w-full md:w-[50%] md:aspect-video flex flex-col gap-4 md:gap-6'>
                            <div className='gap-4 md:gap-6 flex w-full'>
                                <div className='w-full aspect-video'>
                                    <img className='w-full h-full' src='/projects/2.png' />
                                </div>
                                <div className='w-full aspect-video'>
                                    <img className='w-full h-full' src='/projects/3.png' />
                                </div>
                            </div>
                            <div className='gap-4 md:gap-6 flex w-full'>
                                <div className='w-full aspect-video'>
                                    <img className='w-full h-full' src='/projects/4.png' />
                                </div>
                                <div className='w-full aspect-video'>
                                    <img className='w-full h-full' src='/projects/1.png' />
                                </div>
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>
            <div className='w-full px-6  lg:px-32 py-10'>
                <Slide left>
                    <div className='flex flex-col items-start md:items-center w-full mx-auto max-w-[1440px] pb-16 gap-10 md:gap-32 border-b border-b-light-grey'>
                        <div className='w-full md:w-[570px] flex flex-col'>
                            <p className='w-full break-words font-extrabold md:text-7xl text-[56px] mt-12'>
                                Solution
                            </p>
                            <p className='w-full break-words opacity-65 mt-8 leading-8'>
                                Put themselves in the merchant's shoes. It is meant to partner on the long run, and work as an extension of the merchant's team.
                            </p>
                            <p className='w-full break-words opacity-65 mt-8 leading-8'>
                                Agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.
                            </p>
                            <p className='uppercase text-sm opacity-65 mx-auto mt-16'>Share on</p>
                            <div className='mx-auto flex justify-center items-center gap-2 mt-6'>
                                <div className='w-[48px] h-[48px] rounded-full bg-custom-orange flex items-center justify-center'>
                                    <img src='/facebook.svg' />
                                </div>
                                <div className='w-[48px] h-[48px] rounded-full bg-custom-orange flex items-center justify-center'>
                                    <img src='/twitter.svg' />
                                </div>
                                <div className='w-[48px] h-[48px] rounded-full bg-custom-orange flex items-center justify-center'>
                                    <img src='/instagram.svg' />
                                </div>
                            </div>
                        </div>
                    </div>
                </Slide>
            </div>
            <div className='w-full px-6  lg:px-32 mt-20 md:mt-28'>
                <Fade>
                    <div className='flex flex-col w-full mx-auto max-w-[1440px]'>
                        <div className='font-extrabold text-2xl'>
                            Related Projects
                        </div>
                        <div className='w-full flex-col md:flex-row flex gap-8 mt-9 mb-40'>
                            <div className='w-full md:w-[50%] aspect-video overflow-hidden relative'>
                                <p className='absolute bottom-7 left-4 font-extrabold text-white text-5xl'>SOFA WEB</p>
                                <img src='/projects/1.png' className='rounded-md h-full w-full' />
                            </div>
                            <div className='w-full md:w-[50%] aspect-video overflow-hidden relative'>
                                <p className='absolute bottom-7 left-4 font-extrabold text-white text-5xl'>Work Media</p>
                                <img src='/projects/2.png' className='rounded-md h-full w-full' />
                            </div>
                        </div>
                        <HelpToBuildDream />
                    </div>
                </Fade>
            </div>
            <Footer />
        </div>
    );
}

export default DetailedProject;
