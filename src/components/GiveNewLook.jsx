import React from 'react';

const GiveNewLook = () => {
    return (
        <div className='w-full hidden md:flex items-center justify-between pb-40 '>
            <div className='flex flex-col gap-6 '>
                <h2 className='text-[56px] font-extrabold tracking-tight leading-[60px]'>
                    Give Your Site<br />
                    A New Look
                </h2>
                <p className='text-xl'>
                    Service range including technical skills, design,<br />developing, business understanding.
                </p>
                <div className='flex flex-col gap-4'>
                    <div className='flex items-center gap-4'>
                        <div className='w-[32px] h-[32px] rounded-full bg-custom-orange flex items-center justify-center'>
                            <img src='/check.svg' />
                        </div>
                        <p>Range including technical skills</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='w-[32px] h-[32px] rounded-full bg-custom-orange flex items-center justify-center'>
                            <img src='/check.svg' />
                        </div>
                        <p>Business understanding</p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='w-[32px] h-[32px] rounded-full bg-custom-orange flex items-center justify-center'>
                            <img src='/check.svg' />
                        </div>
                        <p>Partner on the long run</p>
                    </div>
                </div>
            </div>
            <div>
                <img src='/picGiveNewLook.png' />
            </div>
        </div>
    );
}

export default GiveNewLook;
