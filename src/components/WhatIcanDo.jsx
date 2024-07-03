export default function WhatIcanDo() {
    return (
        <div className="w-full flex flex-col border-t border-b border-orange-border pt-5 md:pt-32">
            <div className="w-full flex md:gap-16">
                <div className="hidden md:flex flex-col gap-10 w-[55%]">
                    <div className="px-8 py-4 flex items-center gap-2 w-full bg-light-brown rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                        <div className="w-20 h-20 rounded-full flex items-center justify-center bg-[#D9D9D9]">
                            <img src="/iphone.svg" />
                        </div>
                        <p className="text-[40px]">
                            10+ Mobile Applications
                        </p>
                    </div>
                    <div className="px-8 py-4 flex items-center gap-2 w-full bg-light-brown rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                        <div className="w-20 h-20 rounded-full flex items-center justify-center bg-[#BCEB98]">
                            <img src="/coding.svg" />
                        </div>
                        <p className="text-[40px]">
                            20+ Website
                        </p>
                    </div>
                </div>
                <div className=" md:w-[45%] w-full flex flex-col md:gap-7 gap-4">
                    <p className=" text-4xl md:text-[56px] font-extrabold leading-[64px] tracking-tight break-words">
                        What can i do to<br /> help?
                    </p>
                    <div className="md:text-base text-xs flex flex-col md:gap-10 gap-4 opacity-65 mt-2 md:pr-20 lg:pr-32">
                        <p>
                            I provide full stack development for your website and mobile applications. (DESIGN)
                        </p>
                        <p>
                            I Find the problems with your website and help you with long lasting solutions. (DEVELOPMENT)
                        </p>
                        <p>
                            I work with team of specialized Ui/Ux designers to give your website the best look and experiences  (RESEARCH)
                        </p>
                    </div>
                </div>
            </div>
            <div className="relative w-full grid grid-cols-3 md:mt-32 mt-6">
                <div className="z-10 w-full border border-light-grey flex flex-col px-3 md:px-12 py-1 md:py-11 gap-[1px] md:gap-5 rounded-l-md">
                    <p className="text-base md:text-[40px] font-extrabold">
                        2
                    </p>
                    <p className="text-[10px] md:text-[20px]">
                        Years of experience
                    </p>
                </div>
                <div className="z-10 w-full border border-light-grey flex flex-col px-3 md:px-12 py-1 md:py-11 gap-[1px] md:gap-5 ">
                    <p className="text-base md:text-[40px] font-extrabold">
                        30+
                    </p>
                    <p className="text-[10px] md:text-[20px]">
                        Happy Clients
                    </p>
                </div>
                <div className="z-10 w-full border border-light-grey flex flex-col px-3 md:px-12 py-1 md:py-11 gap-[1px] md:gap-5 rounded-r-md">
                    <p className="text-base md:text-[40px] font-extrabold">
                        55+
                    </p>
                    <p className="text-[10px] md:text-[20px]">
                        Projects complete
                    </p>
                </div>
                <div className="absolute top-[-180px] left-8 md:flex items-end justify-center hidden w-52 h-52 rounded-full overflow-hidden bg-custom-orange">
                    <img src="/port.png" className="" />
                </div>
            </div>
            <div className="flex md:hidden flex-col gap-4 my-6 w-full">
                    <div className="px-4 py-2 flex items-center gap-2 w-full bg-light-brown rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#D9D9D9]">
                            <img src="/iphone.svg" />
                        </div>
                        <p className="text-[20px]">
                            91+ Mobile Applications
                        </p>
                    </div>
                    <div className="px-4 py-2 flex items-center gap-2 w-full bg-light-brown rounded-md shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center bg-[#BCEB98]">
                            <img src="/coding.svg" />
                        </div>
                        <p className="text-[20px]">
                            131+ Website
                        </p>
                    </div>
                </div>
            <div className="w-full grid grid-cols-5 py-4 mt-4 md:py-8">
                <div className="w-full flex items-center justify-center p-2">
                    <img 
                    className=""
                    src="/canLogo1.svg"
                    />
                </div>
                <div className="w-full flex items-center justify-center p-2">
                    <img 
                    className=""
                    src="/canLogo2.svg"
                    />
                </div>
                <div className="w-full flex items-center justify-center p-2">
                    <img 
                    className=""
                    src="/canLogo3.svg"
                    />
                </div>
                <div className="w-full flex items-center justify-center p-2">
                    <img 
                    className=""
                    src="/canLogo4.svg"
                    />
                </div>
                <div className="w-full flex items-center justify-center p-2">
                    <img 
                    className=""
                    src="/canLogo5.svg"
                    />
                </div>
            </div>
        </div>
    )
}
