import React, { useState } from 'react';
import Header from '../components/Header';
import { Fade, Slide } from 'react-reveal';
import Footer from '../components/Footer';
import HelpToBuildDream from '../components/HelpToBuildDream';
import { BsDatabaseFill } from "react-icons/bs";
import { BsMenuButtonWide, BsTools  } from "react-icons/bs";


const Skills = () => {
    const [isClickFirst, setIsClickFirst] = useState(false);
    const [isClickSecond, setIsClickSecond] = useState(false);
    const [isClickThird, setIsClickThird] = useState(false);
    return (
        <div className="w-full bg-light-pink relative">
            <Header isDark={false} />
            <div className='w-full px-6  lg:px-32 bg-custom-dark md:pt-40 pt-36 pb-24 text-white '>
                <div className='flex flex-col w-full items-center mx-auto max-w-[1440px] py-4 md:gap-6 gap-4'>
                    <h2 className='md:text-7xl text-[56px] font-extrabold tracking-[-1px]'>
                        Skills
                    </h2>
                </div>
            </div>
            <div className='w-full px-6  lg:px-32 py-20 '>
                <div className='flex flex-col w-full items-center mx-auto max-w-[1440px]'>
                    <Slide left>
                        <div className='w-full flex flex-col items-center gap-10 pb-6 text-custom-dark'>
                            {/* <h3 className='md:text-[56px] text-[40px] tracking-[-1px] leading-[64px] font-extrabold'>Skills</h3> */}
                            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
                                <div className='flex flex-col p-12 shadow-skill-box backdrop-blur-xl rounded-md gap-2 w-full'>
                                    <div className='flex gap-2 items-center mb-2'>
                                        <svg fill="#28293E" width="32px" height="32px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>ionicons-v5_logos</title><path d="M410.66,180.72h0q-7.67-2.62-15.45-4.88,1.29-5.25,2.38-10.56c11.7-56.9,4.05-102.74-22.06-117.83-25-14.48-66,.61-107.36,36.69q-6.1,5.34-11.95,11-3.9-3.76-8-7.36c-43.35-38.58-86.8-54.83-112.88-39.69-25,14.51-32.43,57.6-21.9,111.53q1.58,8,3.55,15.93c-6.15,1.75-12.09,3.62-17.77,5.6C48.46,198.9,16,226.73,16,255.59c0,29.82,34.84,59.72,87.77,77.85q6.44,2.19,13,4.07Q114.64,346,113,354.68c-10,53-2.2,95.07,22.75,109.49,25.77,14.89,69-.41,111.14-37.31q5-4.38,10-9.25,6.32,6.11,13,11.86c40.8,35.18,81.09,49.39,106,34.93,25.75-14.94,34.12-60.14,23.25-115.13q-1.25-6.3-2.88-12.86,4.56-1.35,8.93-2.79c55-18.27,90.83-47.81,90.83-78C496,226.62,462.5,198.61,410.66,180.72Zm-129-81.08c35.43-30.91,68.55-43.11,83.65-34.39h0c16.07,9.29,22.32,46.75,12.22,95.88q-1,4.8-2.16,9.57a487.83,487.83,0,0,0-64.18-10.16,481.27,481.27,0,0,0-40.57-50.75Q276,104.57,281.64,99.64ZM157.73,280.25q6.51,12.6,13.61,24.89,7.23,12.54,15.07,24.71a435.28,435.28,0,0,1-44.24-7.13C146.41,309,151.63,294.75,157.73,280.25Zm0-48.33c-6-14.19-11.08-28.15-15.25-41.63,13.7-3.07,28.3-5.58,43.52-7.48q-7.65,11.94-14.72,24.23T157.7,231.92Zm10.9,24.17q9.48-19.77,20.42-38.78h0q10.93-19,23.27-37.13c14.28-1.08,28.92-1.65,43.71-1.65s29.52.57,43.79,1.66q12.21,18.09,23.13,37t20.69,38.6Q334,275.63,323,294.73h0q-10.91,19-23,37.24c-14.25,1-29,1.55-44,1.55s-29.47-.47-43.46-1.38q-12.43-18.19-23.46-37.29T168.6,256.09ZM340.75,305q7.25-12.58,13.92-25.49h0a440.41,440.41,0,0,1,16.12,42.32A434.44,434.44,0,0,1,326,329.48Q333.62,317.39,340.75,305Zm13.72-73.07q-6.64-12.65-13.81-25h0q-7-12.18-14.59-24.06c15.31,1.94,30,4.52,43.77,7.67A439.89,439.89,0,0,1,354.47,231.93ZM256.23,124.48h0a439.75,439.75,0,0,1,28.25,34.18q-28.35-1.35-56.74,0C237.07,146.32,246.62,134.87,256.23,124.48ZM145.66,65.86c16.06-9.32,51.57,4,89,37.27,2.39,2.13,4.8,4.36,7.2,6.67A491.37,491.37,0,0,0,201,160.51a499.12,499.12,0,0,0-64.06,10q-1.83-7.36-3.3-14.82h0C124.59,109.46,130.58,74.61,145.66,65.86ZM122.25,317.71q-6-1.71-11.85-3.71c-23.4-8-42.73-18.44-56-29.81C42.52,274,36.5,263.83,36.5,255.59c0-17.51,26.06-39.85,69.52-55q8.19-2.85,16.52-5.21a493.54,493.54,0,0,0,23.4,60.75A502.46,502.46,0,0,0,122.25,317.71Zm111.13,93.67c-18.63,16.32-37.29,27.89-53.74,33.72h0c-14.78,5.23-26.55,5.38-33.66,1.27-15.14-8.75-21.44-42.54-12.85-87.86q1.53-8,3.5-16a480.85,480.85,0,0,0,64.69,9.39,501.2,501.2,0,0,0,41.2,51C239.54,405.83,236.49,408.65,233.38,411.38Zm23.42-23.22c-9.72-10.51-19.42-22.14-28.88-34.64q13.79.54,28.08.54c9.78,0,19.46-.21,29-.64A439.33,439.33,0,0,1,256.8,388.16Zm124.52,28.59c-2.86,15.44-8.61,25.74-15.72,29.86-15.13,8.78-47.48-2.63-82.36-32.72-4-3.44-8-7.13-12.07-11a484.54,484.54,0,0,0,40.23-51.2,477.84,477.84,0,0,0,65-10.05q1.47,5.94,2.6,11.64h0C383.81,377.58,384.5,399.56,381.32,416.75Zm17.4-102.64h0c-2.62.87-5.32,1.71-8.06,2.53a483.26,483.26,0,0,0-24.31-60.94,481.52,481.52,0,0,0,23.36-60.06c4.91,1.43,9.68,2.93,14.27,4.52,44.42,15.32,71.52,38,71.52,55.43C475.5,274.19,446.23,298.33,398.72,314.11Z" /><path d="M256,298.55a43,43,0,1,0-42.86-43A42.91,42.91,0,0,0,256,298.55Z" /></svg>
                                        <p className='font-semibold text-3xl mt-2'>
                                            Frontend
                                        </p>
                                    </div>
                                    <div className='flex items-center gap-2 pl-1 text-lg font-semibold'>
                                        <div className='w-2 h-2 rounded-full bg-custom-dark'></div>
                                        <p>React</p>
                                    </div>
                                    <div className='flex items-center gap-2 pl-1 text-lg font-semibold'>
                                        <div className='w-2 h-2 rounded-full bg-custom-dark'></div>
                                        <p>JavaScript</p>
                                    </div>
                                    <div className='flex items-center gap-2 pl-1 text-lg font-semibold'>
                                        <div className='w-2 h-2 rounded-full bg-custom-dark'></div>
                                        <p>HTML5</p>
                                    </div>
                                    <div className='flex items-center gap-2 pl-1 text-lg font-semibold'>
                                        <div className='w-2 h-2 rounded-full bg-custom-dark'></div>
                                        <p>CSS3</p>
                                    </div>
                                    <div className='flex items-center gap-2 pl-1 text-lg font-semibold'>
                                        <div className='w-2 h-2 rounded-full bg-custom-dark'></div>
                                        <p>Tailwind CSS</p>
                                    </div>
                                    <div className='flex items-center gap-2 pl-1 text-lg font-semibold'>
                                        <div className='w-2 h-2 rounded-full bg-custom-dark'></div>
                                        <p>Redux</p>
                                    </div>
                                    <div className='flex items-center gap-2 pl-1 text-lg font-semibold'>
                                        <div className='w-2 h-2 rounded-full bg-custom-dark'></div>
                                        <p>Bootstrap</p>
                                    </div>
                                </div>
                                <div className='flex flex-col p-12 shadow-skill-box backdrop-blur-xl rounded-md gap-2 w-full'>
                                    <div className='flex gap-2 items-center mb-2'>
                                        <svg width="32" height="32" viewBox="0 0 256 282" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><g fill="#28293E"><path d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z" /><path d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z" /></g></svg>
                                        <p className='font-semibold text-3xl mt-2'>
                                            Backend
                                        </p>
                                    </div>
                                    <div className='flex items-center gap-2 pl-1 text-lg font-semibold'>
                                        <div className='w-2 h-2 rounded-full bg-custom-dark'></div>
                                        <p>Node.js</p>
                                    </div>
                                    <div className='flex items-center gap-2 pl-1 text-lg font-semibold'>
                                        <div className='w-2 h-2 rounded-full bg-custom-dark'></div>
                                        <p>Express</p>
                                    </div>
                                    <div className='flex items-center gap-2 pl-1 text-lg font-semibold'>
                                        <div className='w-2 h-2 rounded-full bg-custom-dark'></div>
                                        <p>RESTful APIs</p>
                                    </div>
                                </div>
                                <div className='flex flex-col p-12 shadow-skill-box backdrop-blur-xl rounded-md gap-2 w-full'>
                                    <div className='flex gap-2 items-center mb-2'>
                                        <BsDatabaseFill className='text-3xl text-custom-dark' />
                                        <p className='font-semibold text-3xl mt-2'>
                                            Databases
                                        </p>
                                    </div>
                                    <div className='flex items-center gap-2 pl-1 text-lg font-semibold'>
                                        <div className='w-2 h-2 rounded-full bg-custom-dark'></div>
                                        <p>MongoDB</p>
                                    </div>
                                    <div className='flex items-center gap-2 pl-1 text-lg font-semibold'>
                                        <div className='w-2 h-2 rounded-full bg-custom-dark'></div>
                                        <p>PostgreSQL</p>
                                    </div>
                                    <div className='flex items-center gap-2 pl-1 text-lg font-semibold'>
                                        <div className='w-2 h-2 rounded-full bg-custom-dark'></div>
                                        <p>MySQL</p>
                                    </div>
                                    <div className='flex items-center gap-2 pl-1 text-lg font-semibold'>
                                        <div className='w-2 h-2 rounded-full bg-custom-dark'></div>
                                        <p>Firebase</p>
                                    </div>
                                </div>
                                <div className='flex flex-col p-12 shadow-skill-box backdrop-blur-xl rounded-md gap-2 w-full'>
                                    <div className='flex gap-2 items-center mb-2'>
                                        <BsMenuButtonWide className='text-2xl text-custom-dark' />
                                        <p className='font-semibold text-3xl mt-1'>
                                            DevOps
                                        </p>
                                    </div>
                                    <div className='flex items-center gap-2 pl-1 text-lg font-semibold'>
                                        <div className='w-2 h-2 rounded-full bg-custom-dark'></div>
                                        <p>Docker</p>
                                    </div>
                                    <div className='flex items-center gap-2 pl-1 text-lg font-semibold'>
                                        <div className='w-2 h-2 rounded-full bg-custom-dark'></div>
                                        <p>AWS</p>
                                    </div>
                                    <div className='flex items-center gap-2 pl-1 text-lg font-semibold'>
                                        <div className='w-2 h-2 rounded-full bg-custom-dark'></div>
                                        <p>CI/CD</p>
                                    </div>
                                    <div className='flex items-center gap-2 pl-1 text-lg font-semibold'>
                                        <div className='w-2 h-2 rounded-full bg-custom-dark'></div>
                                        <p>Nginx</p>
                                    </div>
                                </div>
                                <div className='flex flex-col p-12 shadow-skill-box backdrop-blur-xl rounded-md gap-2 w-full'>
                                    <div className='flex gap-2 items-center mb-2'>
                                        <BsTools className='text-custom-dark text-2xl'/>
                                        <p className='font-semibold text-3xl mt-1'>
                                            Tools
                                        </p>
                                    </div>
                                    <div className='flex items-center gap-2 pl-1 text-lg font-semibold'>
                                        <div className='w-2 h-2 rounded-full bg-custom-dark'></div>
                                        <p>Git</p>
                                    </div>
                                    <div className='flex items-center gap-2 pl-1 text-lg font-semibold'>
                                        <div className='w-2 h-2 rounded-full bg-custom-dark'></div>
                                        <p>Webpack</p>
                                    </div>
                                    <div className='flex items-center gap-2 pl-1 text-lg font-semibold'>
                                        <div className='w-2 h-2 rounded-full bg-custom-dark'></div>
                                        <p>Babel</p>
                                    </div>
                                    <div className='flex items-center gap-2 pl-1 text-lg font-semibold'>
                                        <div className='w-2 h-2 rounded-full bg-custom-dark'></div>
                                        <p>Jest</p>
                                    </div>
                                    <div className='flex items-center gap-2 pl-1 text-lg font-semibold'>
                                        <div className='w-2 h-2 rounded-full bg-custom-dark'></div>
                                        <p>Postman</p>
                                    </div>
                                </div>
                                <div className='flex flex-col p-12 shadow-skill-box backdrop-blur-xl rounded-md gap-2 w-full'>
                                    <div className='flex gap-2 items-center mb-2'>
                                        <p className='text-3xl font-extrabold'>&lt;/&gt;</p>
                                        <p className='font-semibold text-3xl'>
                                            Other
                                        </p>
                                    </div>
                                    <div className='flex items-center gap-2 pl-1 text-lg font-semibold'>
                                        <div className='w-2 h-2 rounded-full bg-custom-dark'></div>
                                        <p>Agile Methodologies</p>
                                    </div>
                                    <div className='flex items-center gap-2 pl-1 text-lg font-semibold'>
                                        <div className='w-2 h-2 rounded-full bg-custom-dark'></div>
                                        <p>Problem Solving</p>
                                    </div>
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

export default Skills;
