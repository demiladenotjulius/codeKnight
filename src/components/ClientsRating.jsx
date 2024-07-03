import React from 'react';

const ClientsRating = () => {
    return (
        <div className='w-full flex flex-col items-center gap-14 py-12'>
            <h2 className='font-extrabold md:text-[56px] text-[40px]'>
                Clients Rating
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 w-full'>
                <div className='w-full flex flex-col px-6 md:px-12 pt-12 gap-9 border border-light-grey pb-3'>
                    <div>
                        <img
                            src='/client/star.svg'
                            alt='star'
                        />
                    </div>
                    <div className=' break-words text-lg opacity-65'>
                    Excellent job on our web interface. The site is incredibly fast and smooth. The attention to detail and responsiveness to our needs were outstanding. We are highly satisfied with the results.                    </div>
                    <div className='flex items-center gap-6'>
                        <div>
                            <img
                                src='/client/blessing.jpeg'
                            className='w-20 h-20' style={{borderRadius: '50px', objectFit: 'cover'}}/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-2xl font-bold'>Blessing Mo</p>
                            <p className='text-lg'>Vel triplum</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col px-6 md:px-12 pt-12 gap-9 border border-light-grey pb-3'>
                    <div>
                        <img
                            src='/client/star.svg'
                            alt='star'
                        />
                    </div>
                    <div className=' -mb-4 break-words text-lg opacity-65'>
                    Outstanding job on our Node.js and React.js website. Fast, user-friendly, and visually impressive. Great communication and on-time delivery. Highly recommend                  </div>
                    <div className='flex items-center gap-6 mt-5'>
                        <div>
                            <img
                                src='/client/cowater.jpeg'
                                className='w-21 h-20 ' style={{borderRadius: '50px', objectFit: 'cover'}}/>

                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-2xl font-bold'>Ozoro Cowater</p>
                            <p className='text-lg'>Photogram</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col px-6 md:px-12 pt-12 gap-9 border border-light-grey pb-8'>
                    <div>
                        <img
                            src='/client/star.svg'
                            alt='star'
                        />
                    </div>
                    <div className=' break-words text-lg opacity-65'>
                    Fantastic work on our website. It's fast and user-friendly. The team also ensures excellent ongoing maintenance.                   </div>
                    <div className='flex items-center gap-6 mt-5'>
                        <div>
                            <img
                                src='/client/client3.png'
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-2xl font-bold'>Graham Griffiths</p>
                            <p className='text-lg'>Twitor</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col px-6 md:px-12 pt-12 gap-9 border border-light-grey pb-3'>
                    <div>
                        <img
                            src='/client/star.svg'
                            alt='star'
                        />
                    </div>
                    <div className=' break-words text-lg opacity-65'>
                    Great work on our website and its marketing. The team’s digital marketing skills drove significant traffic and engagement. We're very impressed!                    </div>
                    <div className='flex items-center gap-6 mt-5'>
                        <div>
                            <img
                                src='/client/client4.png'
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-2xl font-bold'>Maria Trofimova</p>
                            <p className='text-lg'>Whochat</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClientsRating;
