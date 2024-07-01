import React from 'react';

const Map = () => {
    return (
        <div className='relative flex flex-col items-center gap-16 w-full'>
            <div className='w-full h-full relative min-h-[720px] bg-[url(/Bitmap.png)] bg-cover bg-center'>
                {/* <img
                    src='/Bitmap.png'
                    className='h-full object-center object-cover'
                /> */}
                <div className='w-[72px] h-[72px] rounded-full bg-custom-orange flex items-center justify-center absolute top-[calc(50%-36px)] right-[calc(50%-36px)] lg:right-[20%]'>
                    <img src='/pos.svg' />
                </div>
            </div>
            <div className='flex flex-col gap-4 px-7 lg:px-12 pt-14 pb-12 bg-white relative rounded-md w-[calc(100%-56px)] lg:w-auto lg:absolute lg:left-20 lg:top-[50%] lg:-translate-y-1/2 order-first'>
                <p className='text-custom-brown font-bold text-2xl'>Get In Touch</p>
                <input className='border border-light-grey rounded-md p-2 px-3 text-lg w-full lg:w-[360px]' placeholder='Your email' />
                <input className='border border-light-grey rounded-md p-2 px-3 text-lg w-full lg:w-[360px]' placeholder='Subject' />
                <textarea className='border border-light-grey rounded-md p-2 px-3 text-lg w-full lg:w-[360px] min-h-28' placeholder='Message' />
                <button className='text-sm uppercase font-extrabold text-white w-[154px] h-[48px] bg-custom-orange rounded-md ml-auto mt-2'>
                    submit now
                </button>
            </div>
        </div>
    );
}

export default Map;
