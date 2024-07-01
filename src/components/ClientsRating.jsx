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
                        A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.
                    </div>
                    <div className='flex items-center gap-6'>
                        <div>
                            <img
                                src='/client/client1.png'
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-2xl font-bold'>Alan Martí</p>
                            <p className='text-lg'>Meta Inc.</p>
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
                        Provide your business with a variety of digital solutions to promote your product or service online.
                    </div>
                    <div className='flex items-center gap-6 mt-5'>
                        <div>
                            <img
                                src='/client/client2.png'
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p className='text-2xl font-bold'>Richardo Kann</p>
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
                        Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety.
                    </div>
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
                        Promote your product or service online and help you hit your marketing goals and grow your business.
                    </div>
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
