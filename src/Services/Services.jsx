import React, { useState } from 'react';
import Header from '../components/Header';
import { Fade, Slide } from 'react-reveal';
import Footer from '../components/Footer';
import HelpToBuildDream from '../components/HelpToBuildDream';

const Services = () => {
    const [isClickFirst, setIsClickFirst] = useState(false);
    const [isClickSecond, setIsClickSecond] = useState(false);
    const [isClickThird, setIsClickThird] = useState(false);
    return (
        <div className="w-full bg-light-pink relative">
            <Header isDark={false} />
            <div className='w-full px-6  lg:px-32 bg-custom-dark md:pt-40 pt-36 pb-24 text-white '>
                <div className='flex flex-col w-full items-center mx-auto max-w-[1440px] py-4 md:gap-6 gap-4'>
                    <h2 className='md:text-7xl text-[56px] font-extrabold tracking-[-1px]'>
                        Services
                    </h2>
                    <p className='text-center w-full md:w-[45%]'>
                        Building Websites that Captivate and Convert: Professional Web Development Services
                    </p>
                </div>
            </div>
            <div className='w-full px-6  lg:px-32 pt-20 '>
                <div className='flex flex-col w-full items-center mx-auto max-w-[1440px]'>
                    <Slide left>
                        <div className='w-full flex flex-col md:flex-row gap-10 pb-6'>
                            <div className='w-full md:w-[35%] break-words text-[40px] font-extrabold'>
                                From Concept to Launch: Expert Web Development Tailored to Your Needs
                            </div>
                            <div className='flex flex-col gap-6 opacity-65 break-words w-full md:w-[65%] md:pl-20 leading-8'>
                                <p>
                                    I transform your vision into reality with our customized web development services. Starting with an in-depth consultation and strategic planning, we ensure alignment with your business goals. Our design and development process uses cutting-edge technologies to create user-friendly websites, incorporating agile development for transparency and flexibility, along with rigorous testing for optimal performance and security.
                                </p>
                                <p>
                                    After development, we handle seamless deployment and provide ongoing support to keep your website running smoothly. From concept to launch, Code Knight delivers expert web development solutions tailored to your needs, creating exceptional digital experiences.
                                </p>
                            </div>
                        </div>
                    </Slide>
                    <Slide right>
                        <div className='w-full flex flex-col md:items-center gap-3 border-t border-t-light-grey pb-4 md:pb-16'>
                            <div className='w-full flex flex-col'>
                                <div className='flex flex-col w-full'>
                                    <div
                                        onClick={() => setIsClickFirst(!isClickFirst)}
                                        className='w-full flex items-center justify-between cursor-pointer border-b border-b-light-grey md:py-12 py-10'>
                                        <div className='flex md:gap-9 gap-4 items-center'>
                                            <div className='md:w-20 md:h-20 w-12 h-12 flex items-center justify-center rounded-full bg-custom-orange'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 0C16.3784 0 16.7244 0.213767 16.894 0.552318L17.618 2.00133H27C28.6569 2.00133 30 3.34541 30 5.00342V20.0139H2V5.00342C2 3.34541 3.34315 2.00133 5 2.00133H14.38L15.106 0.552318C15.2756 0.213767 15.6216 0 16 0ZM1 22.0153C0.447715 22.0153 0 22.4633 0 23.016C0 23.5687 0.447715 24.0167 1 24.0167H6.72L5.03 30.7794C4.91073 31.3098 5.23643 31.8384 5.76354 31.97C6.29065 32.1016 6.82633 31.788 6.97 31.2637L7.78 28.0195H24.22L25.03 31.2637C25.1737 31.788 25.7094 32.1016 26.2365 31.97C26.7636 31.8384 27.0893 31.3098 26.97 30.7794L25.28 24.0167H31C31.5523 24.0167 32 23.5687 32 23.016C32 22.4633 31.5523 22.0153 31 22.0153H1ZM8.28 26.0181L8.78 24.0167H23.22L23.72 26.0181H8.28Z" fill="white" />
                                                </svg>
                                            </div>
                                            <p className='md:text-[56px] text-3xl font-extrabold'>Design</p>
                                        </div>
                                        <div className='w-8 h-8 flex items-center justify-center rounded-full bg-custom-orange'>
                                            {
                                                isClickFirst ? (<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.24701 0.859534L0.451011 6.34053C-0.114989 6.98753 0.345011 7.99953 1.20401 7.99953H10.796C11.1887 7.99987 11.5452 7.77039 11.7075 7.41284C11.8697 7.0553 11.8078 6.63586 11.549 6.34053L6.75301 0.860534C6.56311 0.643228 6.2886 0.518555 6.00001 0.518555C5.71142 0.518555 5.43691 0.643228 5.24701 0.860534V0.859534Z" fill="white" />
                                                </svg>) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.04535 7.14L0.249351 1.658C-0.316649 1.013 0.143351 3.69899e-07 1.00235 3.69899e-07H10.5944C10.987 -0.000336283 11.3435 0.229148 11.5058 0.586693C11.6681 0.944239 11.6061 1.36367 11.3474 1.659L6.55135 7.139C6.36145 7.35631 6.08694 7.48098 5.79835 7.48098C5.50976 7.48098 5.23525 7.35631 5.04535 7.139V7.14Z" fill="white" />
                                                    </svg>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className={`${isClickFirst ? 'flex' : 'hidden'} border-b border-b-light-grey md:py-16 py-4 md:gap-7 gap-4 md:items-end items-start w-full flex-col`}>
                                        <div className='md:w-[570px] w-full break-words md:text-[40px] text-3xl leading-[48px] font-extrabold'>
                                            Design Process: Crafting Your Digital Presence, Step by Step
                                        </div>
                                        <div className='md:w-[570px] w-full break-words opacity-65'>
                                            Business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.
                                        </div>
                                        <div className='md:w-[570px] w-full flex flex-col break-words mt-3 gap-3'>
                                            <div className='flex items-center gap-4'>
                                                <div className='w-[32px] h-[32px] rounded-full bg-custom-orange flex items-center justify-center'>
                                                    <img src='/check.svg' />
                                                </div>
                                                <p>Discover</p>
                                            </div>
                                            <div className='flex items-center gap-4'>
                                                <div className='w-[32px] h-[32px] rounded-full bg-custom-orange flex items-center justify-center'>
                                                    <img src='/check.svg' />
                                                </div>
                                                <p>Design</p>
                                            </div>
                                            <div className='flex items-center gap-4'>
                                                <div className='w-[32px] h-[32px] rounded-full bg-custom-orange flex items-center justify-center'>
                                                    <img src='/check.svg' />
                                                </div>
                                                <p>Develop</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col w-full'>
                                    <div
                                        onClick={() => setIsClickSecond(!isClickSecond)}
                                        className='w-full flex items-center justify-between cursor-pointer border-b border-b-light-grey md:py-12 py-10'>
                                        <div className='flex md:gap-9 gap-4 items-center'>
                                            <div className='md:w-20 md:h-20 w-12 h-12 flex items-center justify-center rounded-full bg-custom-orange'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="26" viewBox="0 0 32 26" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 0C11.3431 0 10 1.34315 10 3V4H3C1.34315 4 0 5.34315 0 7V9.768L15.228 13.828C15.7339 13.9627 16.2661 13.9627 16.772 13.828L32 9.768V7C32 5.34315 30.6569 4 29 4H22V3C22 1.34315 20.6569 0 19 0H13ZM13 2H19C19.5523 2 20 2.44772 20 3V4H12V3C12 2.44772 12.4477 2 13 2ZM3 26C1.34315 26 0 24.6569 0 23V11.7L15.742 15.894C15.911 15.9391 16.089 15.9391 16.258 15.894L32 11.7V23C32 24.6569 30.6569 26 29 26H3Z" fill="white" />
                                                </svg>
                                            </div>
                                            <p className='md:text-[56px] text-3xl font-extrabold'>Development</p>
                                        </div>
                                        <div className='w-8 h-8 flex items-center justify-center rounded-full bg-custom-orange'>
                                            {
                                                isClickSecond ? (<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.24701 0.859534L0.451011 6.34053C-0.114989 6.98753 0.345011 7.99953 1.20401 7.99953H10.796C11.1887 7.99987 11.5452 7.77039 11.7075 7.41284C11.8697 7.0553 11.8078 6.63586 11.549 6.34053L6.75301 0.860534C6.56311 0.643228 6.2886 0.518555 6.00001 0.518555C5.71142 0.518555 5.43691 0.643228 5.24701 0.860534V0.859534Z" fill="white" />
                                                </svg>) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.04535 7.14L0.249351 1.658C-0.316649 1.013 0.143351 3.69899e-07 1.00235 3.69899e-07H10.5944C10.987 -0.000336283 11.3435 0.229148 11.5058 0.586693C11.6681 0.944239 11.6061 1.36367 11.3474 1.659L6.55135 7.139C6.36145 7.35631 6.08694 7.48098 5.79835 7.48098C5.50976 7.48098 5.23525 7.35631 5.04535 7.139V7.14Z" fill="white" />
                                                    </svg>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className={`${isClickSecond ? 'flex' : 'hidden'} border-b border-b-light-grey md:py-16 py-4 md:gap-7 gap-4 md:items-end items-start w-full flex-col`}>
                                        <div className='md:w-[570px] w-full break-words md:text-[40px] text-3xl leading-[48px] font-extrabold'>
                                            Design Process: Crafting Your Digital Presence, Step by Step
                                        </div>
                                        <div className='md:w-[570px] w-full break-words opacity-65'>
                                            Business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.
                                        </div>
                                        <div className='md:w-[570px] w-full flex flex-col break-words mt-3 gap-3'>
                                            <div className='flex items-center gap-4'>
                                                <div className='w-[32px] h-[32px] rounded-full bg-custom-orange flex items-center justify-center'>
                                                    <img src='/check.svg' />
                                                </div>
                                                <p>Discover</p>
                                            </div>
                                            <div className='flex items-center gap-4'>
                                                <div className='w-[32px] h-[32px] rounded-full bg-custom-orange flex items-center justify-center'>
                                                    <img src='/check.svg' />
                                                </div>
                                                <p>Design</p>
                                            </div>
                                            <div className='flex items-center gap-4'>
                                                <div className='w-[32px] h-[32px] rounded-full bg-custom-orange flex items-center justify-center'>
                                                    <img src='/check.svg' />
                                                </div>
                                                <p>Develop</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col w-full'>
                                    <div
                                        onClick={() => setIsClickThird(!isClickThird)}
                                        className='w-full flex items-center justify-between cursor-pointer border-b border-b-light-grey md:py-12 py-10'>
                                        <div className='flex md:gap-9 gap-4 items-center'>
                                            <div className='md:w-20 md:h-20 w-12 h-12 flex items-center justify-center rounded-full bg-custom-orange'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.8639 1.45491C17.3759 -0.48497 14.6221 -0.48497 14.1361 1.45491L13.9941 2.02687C13.8249 2.70379 13.3018 3.23562 12.6278 3.41597C11.9538 3.59632 11.235 3.39679 10.7503 2.89482L10.3404 2.47285C8.95044 1.03494 6.56459 2.41485 7.11456 4.33473L7.27655 4.90269C7.46742 5.57297 7.28008 6.29406 6.78707 6.78665C6.29405 7.27925 5.57281 7.46599 4.90269 7.27455L4.33473 7.11456C2.41285 6.56459 1.03494 8.95044 2.47285 10.3404L2.89482 10.7503C3.39679 11.235 3.59632 11.9538 3.41597 12.6278C3.23562 13.3018 2.70379 13.8249 2.02687 13.9941L1.45491 14.1361C-0.48497 14.6241 -0.48497 17.3779 1.45491 17.8639L2.02687 18.0059C2.70379 18.1751 3.23562 18.6982 3.41597 19.3722C3.59632 20.0462 3.39679 20.765 2.89482 21.2497L2.47285 21.6596C1.03494 23.0496 2.41485 25.4354 4.33473 24.8854L4.90269 24.7235C5.57297 24.5326 6.29406 24.7199 6.78665 25.2129C7.27925 25.7059 7.46599 26.4272 7.27455 27.0973L7.11456 27.6653C6.56459 29.5872 8.95044 30.9651 10.3404 29.5272L10.7503 29.1052C11.235 28.6032 11.9538 28.4037 12.6278 28.584C13.3018 28.7644 13.8249 29.2962 13.9941 29.9731L14.1361 30.5451C14.6241 32.485 17.3779 32.485 17.8639 30.5451L18.0059 29.9731C18.1751 29.2962 18.6982 28.7644 19.3722 28.584C20.0462 28.4037 20.765 28.6032 21.2497 29.1052L21.6596 29.5272C23.0496 30.9651 25.4354 29.5852 24.8854 27.6653L24.7235 27.0993C24.5316 26.4287 24.7186 25.7069 25.2117 25.2137C25.7049 24.7206 26.4268 24.5336 27.0973 24.7255L27.6653 24.8854C29.5872 25.4354 30.9651 23.0496 29.5272 21.6596L29.1052 21.2497C28.6032 20.765 28.4037 20.0462 28.584 19.3722C28.7644 18.6982 29.2962 18.1751 29.9731 18.0059L30.5451 17.8639C32.485 17.3759 32.485 14.6221 30.5451 14.1361L29.9731 13.9941C29.2962 13.8249 28.7644 13.3018 28.584 12.6278C28.4037 11.9538 28.6032 11.235 29.1052 10.7503L29.5272 10.3404C30.9651 8.95044 29.5852 6.56459 27.6653 7.11456L27.0993 7.27655C26.4287 7.46836 25.7069 7.28143 25.2137 6.78826C24.7206 6.29509 24.5336 5.57325 24.7255 4.90269L24.8854 4.33473C25.4354 2.41285 23.0496 1.03494 21.6596 2.47285L21.2497 2.89482C20.765 3.39679 20.0462 3.59632 19.3722 3.41597C18.6982 3.23562 18.1751 2.70379 18.0059 2.02687L17.8639 1.45491ZM16.5 16.9999H25.9454C25.603 20.4108 23.5366 23.4083 20.4705 24.9415C17.4045 26.4747 13.7666 26.3298 10.8323 24.5575L16.5 16.9999ZM25.9454 15.0001C25.603 11.5892 23.5366 8.59172 20.4705 7.0585C17.4045 5.52528 13.7666 5.67023 10.8323 7.44253L16.5 15.0021H25.9454V15.0001ZM6.00462 16C6.00176 13.2036 7.17369 10.5347 9.23442 8.64446L14.7501 16L9.23442 23.3555C7.24855 21.5297 6.00462 18.9098 6.00462 16Z" fill="white" />
                                                </svg>
                                            </div>
                                            <p className='md:text-[56px] text-3xl font-extrabold'>Research</p>
                                        </div>
                                        <div className='w-8 h-8 flex items-center justify-center rounded-full bg-custom-orange'>
                                            {
                                                isClickThird ? (<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.24701 0.859534L0.451011 6.34053C-0.114989 6.98753 0.345011 7.99953 1.20401 7.99953H10.796C11.1887 7.99987 11.5452 7.77039 11.7075 7.41284C11.8697 7.0553 11.8078 6.63586 11.549 6.34053L6.75301 0.860534C6.56311 0.643228 6.2886 0.518555 6.00001 0.518555C5.71142 0.518555 5.43691 0.643228 5.24701 0.860534V0.859534Z" fill="white" />
                                                </svg>) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.04535 7.14L0.249351 1.658C-0.316649 1.013 0.143351 3.69899e-07 1.00235 3.69899e-07H10.5944C10.987 -0.000336283 11.3435 0.229148 11.5058 0.586693C11.6681 0.944239 11.6061 1.36367 11.3474 1.659L6.55135 7.139C6.36145 7.35631 6.08694 7.48098 5.79835 7.48098C5.50976 7.48098 5.23525 7.35631 5.04535 7.139V7.14Z" fill="white" />
                                                    </svg>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className={`${isClickThird ? 'flex' : 'hidden'} border-b border-b-light-grey md:py-16 py-4 md:gap-7 gap-4 md:items-end items-start w-full flex-col`}>
                                        <div className='md:w-[570px] w-full break-words md:text-[40px] text-3xl leading-[48px] font-extrabold'>
                                            Design Process: Crafting Your Digital Presence, Step by Step
                                        </div>
                                        <div className='md:w-[570px] w-full break-words opacity-65'>
                                            Business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.
                                        </div>
                                        <div className='md:w-[570px] w-full flex flex-col break-words mt-3 gap-3'>
                                            <div className='flex items-center gap-4'>
                                                <div className='w-[32px] h-[32px] rounded-full bg-custom-orange flex items-center justify-center'>
                                                    <img src='/check.svg' />
                                                </div>
                                                <p>Discover</p>
                                            </div>
                                            <div className='flex items-center gap-4'>
                                                <div className='w-[32px] h-[32px] rounded-full bg-custom-orange flex items-center justify-center'>
                                                    <img src='/check.svg' />
                                                </div>
                                                <p>Design</p>
                                            </div>
                                            <div className='flex items-center gap-4'>
                                                <div className='w-[32px] h-[32px] rounded-full bg-custom-orange flex items-center justify-center'>
                                                    <img src='/check.svg' />
                                                </div>
                                                <p>Develop</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slide>
                    <Slide bottom>
                        <div className='w-full flex flex-col md:flex-row gap-10 md:py-36 py-4'>
                            <div className='w-full flex flex-col gap-5'>
                                <p className='break-words w-full text-[40px] font-extrabold leading-[48px]'>
                                    Web Development Research:
                                    Uncovering Insights to
                                    Elevate Your Digital Strategy
                                </p>
                                <p className='md:w-[70%] w-full break-words'>
                                    Gain valuable insights and data-driven strategies that optimize your web development projects for maximum impact and success.
                                </p>
                            </div>
                            <div className='w-full flex flex-col gap-8'>
                                <div className='flex items-center md:gap-14 gap-9'>
                                    <p className='font-extrabold text-7xl'>1</p>
                                    <p className='font-bold text-2xl '>Full service range including</p>
                                </div>
                                <div className='flex items-center md:gap-14 gap-9'>
                                    <p className='font-extrabold text-7xl'>2</p>
                                    <p className='font-bold text-2xl '>Technical skills, design, business</p>
                                </div>
                                <div className='flex items-center md:gap-14 gap-9'>
                                    <p className='font-extrabold text-7xl'>3</p>
                                    <p className='font-bold text-2xl '>Themselves in the merchant's</p>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
            <div className='w-full px-6  lg:px-32'>
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

export default Services;
