import React from 'react';

const ContactInfo = () => {
    return (
        <div className='w-full flex flex-col lg:flex-row'>
            <div className='px-4 w-full md:px-12 py-8 border-light-grey border rounded-l-md'>
                <div className='flex mb-6 items-center gap-6'>
                    <div className='w-[64px] h-[64px] rounded-full bg-custom-orange flex items-center justify-center'>
                        <img src='/phone.svg' />
                    </div>
                    <p className='text-custom-orange text-lg uppercase tracking-[3px]'>phone</p>
                </div>
                <p className='text-xl '>+234 90 95311593</p>
            </div>
            <div className='px-4 w-full md:px-12 py-8 border-light-grey border'>
                <div className='flex mb-6 items-center gap-6'>
                    <div className='w-[64px] h-[64px] rounded-full bg-custom-orange flex items-center justify-center'>
                        <img src='/mail.svg' />
                    </div>
                    <p className='text-custom-orange text-lg uppercase tracking-[3px]'>email</p>
                </div>
                <p className=' text-xl '>damilade@gmail.com</p>
            </div>
            <div className='px-4 w-full md:px-12 py-8 border-light-grey border rounded-r-md'>
                <div className='flex mb-6 items-center gap-6'>
                    <div className='w-[64px] h-[64px] rounded-full bg-custom-orange flex items-center justify-center'>
                        <img src='/addy.svg' />
                    </div>
                    <p className='text-custom-orange text-lg uppercase tracking-[3px]'>address</p>
                </div>
                <p className=' text-xl '>Somewhere in Lagos</p>
            </div>
        </div>
    );
}

export default ContactInfo;
