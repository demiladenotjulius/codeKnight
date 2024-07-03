import { Fade } from "react-reveal";
import { motion } from 'framer-motion';
import mycv from '../assets/mycv.pdf'

export default function HomeHero() {
    return (
        <>
            <Fade>
                <div className="w-full pt-20 md:pt-36 flex flex-col items-start text-custom-dark">
                    <div className="flex flex-col gap-1 relative h-full">
                        <h1 className="font-bold text-4xl md:text-[80px] leading-[76px] tracking-tight">
                            Hi there,<br />
                            I’m Demilade &lt;/&gt;
                        </h1>
                        <p className="relative  md:absolute md:bottom-[-100px] text-custom-orange text-lg">demiladenotjulius@gmail.com</p>
                        {/* <a href="">
                            <button className="relative rounded bg-white p-2 font-bold md:absolute md:bottom-[-160px] text-lg ">Download My CV</button>
                        </a> */}
                        <motion.button
                         whileHover={{ scale: 1.05, backgroundColor: '#fff' }}
                         whileTap={{ scale: 0.95 }}
                         className="relative rounded  p-2 font-bold md:absolute md:bottom-[-160px] text-lg "
                        // className="bg-black text-white font-bold py-2 px-4 rounded-full inline-flex items-center font-poppins transition-colors duration:300"
                        >
                      <a href={mycv} target="_blank">Download My CV</a>
                    </motion.button>
  

                    </div>
                    <div className="flex w-full md:flex-row md:justify-between flex-col">
                        <div className="md:hidden flex">
                            <img
                                src="/hero.png"
                            />
                        </div>
                        <div className="flex items-center gap-3">
                            <p className="font-bold text-[80px]">2</p>
                            <p className="leading-[32px] tracking-[10px]">
                                Years<br />
                                Experiences
                            </p>
                        </div>
                        <div className="md:flex hidden">
                            <img
                                src="/hero.png"
                            />
                        </div>
                        <div className="flex flex-row md:flex-col gap-3 md:gap-2  items-center md:justify-center">
                            <div>
                                <img
                                    src="/Google.svg"
                                />
                            </div>
                            <p className=" tracking-wide leading-[32px]">
                                Google Certified Website\ <br />
                                 software developer
                            </p>
                        </div>
                    </div>
                </div >
            </Fade>
        </>
    )
}
