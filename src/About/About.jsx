import React from "react";
import Header from "../components/Header";
import { Fade, Slide } from "react-reveal";
import ReactPlayer from "react-player";
import ReactPlayerStart from "../components/ReactPlayerStart";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import harvey from "../About/harvey.jpeg";

const About = () => {
  return (
    <div className="w-full bg-light-pink relative">
      <Header isDark={false} />
      <div className="w-full px-6  lg:px-32 bg-custom-dark md:pt-40 pt-36 pb-24 text-white ">
        <div className="flex flex-col w-full items-center mx-auto max-w-[1440px] py-4 md:gap-6 gap-4">
          <h2 className="md:text-7xl text-[56px] font-extrabold tracking-[-1px]">
            About Me
          </h2>
          <p className="text-center w-full md:w-[45%]">
            "I provide a full range of services, including software development,
            technical skills, and research."
          </p>
        </div>
      </div>
      <div className="w-full px-6  lg:px-32 pt-20 ">
        <div className="flex flex-col w-full items-center mx-auto max-w-[1440px]">
          <Slide left>
            <div className="w-full flex flex-col md:items-center gap-3">
              {/* <div className='w-full'>
                                <img src='/about/about.jpg' className='w-full' />
                            </div> */}
              <div className="flex flex-col break-words w-full md:w-[500px]">
                <p className="uppercase text-custom-orange">Demilade julius</p>
                <h3 className="md:text-[56px] text-[40px] tracking-[-1px] leading-[64px] font-extrabold">
                  Software Engineer
                </h3>
              </div>
              <p className="w-full break-words opacity-65">
                I am DEMILADE JULIUS, a passionate web developer with over two
                years of experience crafting seamless and innovative web
                solutions. My journey into the world of coding started with a
                simple HTML tutorial, and it quickly blossomed into a
                full-fledged career that I absolutely love.
                <br />
                My expertise spans across front-end and back-end development,
                with a particular fondness for creating interactive and
                user-friendly interfaces. I’m well-versed in HTML, CSS,
                JavaScript, and various frameworks such as React and Next Js for
                front-end development. On the back-end, I’m proficient with
                Node.js, Express, and databases like MongoDB and SQL.
                <br />
                I thrive on challenges and am always eager to learn and adapt to
                new technologies. My portfolio includes diverse projects ranging
                from e-commerce websites to sophisticated web applications, all
                designed with a keen eye for detail and a strong emphasis on
                performance and scalability.
                <br />
                Coming from an average background family with little hope for
                the future, learning to code changed my life for the better. I'm
                truly grateful for the opportunities it has provided me, and I'm
                passionate about helping children from poor families transform
                their lives through coding and technology. <br />
                When I’m not coding, you can find me exploring the latest tech
                trends, contributing to open-source projects, or enjoying a good
                book with a cup of coffee and sometimes, i'm on trains. I
                believe in the power of community and collaboration, and I’m
                always excited to connect with fellow developers and tech
                enthusiasts. Let’s build something amazing together!
              </p>
              <div className="relative w-full grid grid-cols-3 md:mt-20 mt-8">
                <div className="z-10 w-full border border-light-grey flex flex-col px-3 md:px-12 py-1 md:py-11 gap-[1px] md:gap-5 rounded-l-md">
                  <p className="text-base md:text-[40px] font-extrabold">2</p>
                  <p className="text-[10px] md:text-[20px]">
                    Years of experience
                  </p>
                </div>
                <div className="z-10 w-full border border-light-grey flex flex-col px-3 md:px-12 py-1 md:py-11 gap-[1px] md:gap-5 ">
                  <p className="text-base md:text-[40px] font-extrabold">20+</p>
                  <p className="text-[10px] md:text-[20px]">Happy Clients</p>
                </div>
                <div className="z-10 w-full border border-light-grey flex flex-col px-3 md:px-12 py-1 md:py-11 gap-[1px] md:gap-5 rounded-r-md">
                  <p className="text-base md:text-[40px] font-extrabold">55+</p>
                  <p className="text-[10px] md:text-[20px]">
                    Projects complete
                  </p>
                </div>
              </div>
            </div>
          </Slide>
          <Slide right>
            <div className="w-full flex flex-col md:items-center gap-3 md:mt-32 mt-9 pb-4 md:pb-16">
              <div className="w-full md:w-[530px] flex flex-col items-center gap-3">
                <h3 className="text-[40px] tracking-[-1px] leading-[64px] font-extrabold">
                  Harvey Specter - the epitome of confidence and
                  strategic brilliance.
                  <br /> 
                </h3>
                <p className="opacity-65 break-words w-full">
                "I don’t get lucky. I make my own luck."
                </p>
                <div className="w-full aspect-video rounded-md z-10">
                  <img src={harvey} alt="" />
                  {/* <ReactPlayer width='100%' height='100%' url='https://www.youtube.com/watch?v=LXb3EKWsInQ' playIcon={ReactPlayerStart()} light /> */}
                </div>
                <p className="opacity-65 break-words w-full">
                  Ability to understand the client's perspective. I aim to
                  partner for the long term, acting as an extension of the
                  client's team.{" "}
                </p>
                <p className="opacity-65 break-words w-full">
                  As a software developer, I provide businesses with a variety
                  of development solutions to build and enhance their products
                  or services and support their technology goals.
                </p>{" "}
              </div>
            </div>
          </Slide>
          <Slide bottom>
            <div className="border-t border-b border-light-grey w-full flex flex-col md:pt-32 pt-16 md:pb-48 pb-6">
              <div className="flex flex-col w-full md:w-[800px]  md:mx-auto ">
                <div className="flex justify-between w-full">
                  <p className=" text-custom-orange">Demilade’s Words</p>
                  <div className="relative top-[-40px] md:top-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="80"
                      viewBox="0 0 100 80"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clipRule="evenodd"
                        d="M44.9664 45C44.9964 45.15 45.9507 58.3 36.5177 68.54C29.508 76.145 18.9009 80 4.99627 80H0V65.9L4.012 65.1C10.9118 63.72 15.6933 60.985 18.2314 56.98C19.5312 54.8753 20.2692 52.4719 20.3748 50H4.99627C2.23691 50 0 47.7614 0 45V10C0 4.485 4.48165 0 9.99253 0H39.9701C42.7295 0 44.9664 2.23858 44.9664 5V45ZM99.9603 45C99.9903 45.15 100.94 58.3 91.5116 68.54C84.5019 76.145 73.8948 80 59.9902 80H54.9939V65.9L59.0059 65.1C65.9058 63.72 70.6872 60.985 73.2253 56.98C74.5251 54.8753 75.2631 52.4719 75.3687 50H59.9902C57.2308 50 54.9939 47.7614 54.9939 45V10C54.9939 4.485 59.4756 0 64.9865 0H94.9641C97.7234 0 99.9603 2.23858 99.9603 5V45Z"
                        fill="#F9E5DA"
                      />
                    </svg>
                  </div>
                </div>
                <p className="w-full break-words font-extrabold text-[40px] leading-[48px] md:mt-10 mt-5">
                  "Every moment counts, so I work tirelessly to bring ideas to
                  life through code. Preparedness and perseverance ensure I'm
                  ready for whatever comes next."{" "}
                </p>
                <p className="text-xl mt-3">Damilade Julius</p>
              </div>
            </div>
          </Slide>
        </div>
      </div>
      {/* <Fade>
        <div className="w-full mx-auto max-w-[1440px] grid grid-cols-5 py-4 mt-4 md:py-8">
          <div className="w-full flex items-center justify-center p-2">
            <img className="" src="/canLogo1.svg" />
          </div>
          <div className="w-full flex items-center justify-center p-2">
            <img className="" src="/canLogo2.svg" />
          </div>
          <div className="w-full flex items-center justify-center p-2">
            <img className="" src="/canLogo3.svg" />
          </div>
          <div className="w-full flex items-center justify-center p-2">
            <img className="" src="/canLogo4.svg" />
          </div>
          <div className="w-full flex items-center justify-center p-2">
            <img className="" src="/canLogo5.svg" />
          </div>
        </div>
      </Fade> */}
      <div className="w-full px-6  lg:px-32 bg-light-grey pt-10 md:pt-16 pb-20 md:pb-12  ">
        <div className="flex md:flex-row flex-col w-full md:items-center mx-auto max-w-[1440px] gap-8 md:gap-20 lg:gap-40 md:justify-between">
          <div className="gap-3 flex flex-col">
            <p className="uppercase text-custom-orange">Get Started</p>
            <h4 className=" text-2xl font-bold ">
              I Help your website Move Faster
            </h4>
            <Link to={"/contact"}>
              <button className="bg-custom-orange w-[154px] h-[48px] rounded-md flex items-center text-sm justify-center uppercase text-white">
                contact me
              </button>
            </Link>
            {/* <button className='bg-custom-orange w-[154px] h-[48px] rounded-md flex items-center text-sm justify-center uppercase text-white'>
                            contact me
                        </button> */}
          </div>
          <div className="w-full flex flex-col md:flex-row justify-start md:justify-end md:items-center gap-7">
            <div className="w-full max-w-[400px] opacity-65">
              Put themselves in the merchant's shoes. It is meant to partner on
              the long run.
            </div>
            <div>
              <img src="/group.png" />
            </div>
          </div>
        </div>
      </div>
      <Footer isDark={true} />
    </div>
  );
};

export default About;
