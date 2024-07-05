import React, { useState } from "react";
import Header from "../components/Header";
import { Fade, Slide } from "react-reveal";
import Footer from "../components/Footer";
import HelpToBuildDream from "../components/HelpToBuildDream";
import Map from "../components/Map";
import ContactInfo from "../components/ContactInfo";

const Contact = () => {
  const [isClickFirst, setIsClickFirst] = useState(false);
  const [isClickSecond, setIsClickSecond] = useState(false);
  const [isClickThird, setIsClickThird] = useState(false);
  const [isClickFourth, setIsClickFourth] = useState(false);
  return (
    <div className="w-full bg-light-pink relative">
      <Header isDark={false} />
      <div className="w-full px-6  lg:px-32 bg-custom-dark md:pt-40 pt-36 pb-24 text-white ">
        <div className="flex flex-col w-full items-center mx-auto max-w-[1440px] py-4 md:gap-6 gap-4">
          <h2 className="md:text-7xl text-[56px] font-extrabold tracking-[-1px]">
            Contact
          </h2>
        </div>
      </div>
      <div className="w-full lg:pt-0 pt-16">
        <Map />
      </div>
      <div className="w-full px-6  lg:px-32">
        <Slide right>
          <div className="flex flex-col w-full mx-auto max-w-[1440px] gap-32 mt-20">
            <ContactInfo />
          </div>
        </Slide>
      </div>
      <div className="w-full px-6  lg:px-32 pt-20">
        <div className="flex flex-col w-full items-center mx-auto max-w-[1440px] pb-28 border-b border-b-light-grey">
          <Slide left>
            <div className="w-full flex md:flex-row flex-col gap-4">
              <div className="w-full md:w-[40%] flex flex-col gap-8 pb-6">
                <div className="w-full break-words text-[40px] font-extrabold leading-[48px]">
                  Frequently Asked Questions
                </div>
                <div className="flex flex-col break-words w-full  leading-8 gap-7">
                  <p className=" opacity-65 ">
                    A digital agency is a business you hire to outsource your
                    digital marketing efforts, instead of handling in-house.
                  </p>
                  <p>Ask us anything</p>
                </div>
              </div>
              <div className="flex flex-col w-full md:w-[60%]">
                <div
                  onClick={() => setIsClickFirst(!isClickFirst)}
                  className={`${
                    isClickFirst ? "bg-white" : ""
                  } rounded-t-md border border-light-grey py-10 md:px-12 px-7 md:gap-9 cursor-pointer w-full flex flex-col gap-8`}
                >
                  <div className="w-full flex justify-between items-center">
                    <p className="font-bold text-2xl">How much do we charge</p>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-custom-orange">
                      {isClickFirst ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="8"
                          viewBox="0 0 12 8"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.24701 0.859534L0.451011 6.34053C-0.114989 6.98753 0.345011 7.99953 1.20401 7.99953H10.796C11.1887 7.99987 11.5452 7.77039 11.7075 7.41284C11.8697 7.0553 11.8078 6.63586 11.549 6.34053L6.75301 0.860534C6.56311 0.643228 6.2886 0.518555 6.00001 0.518555C5.71142 0.518555 5.43691 0.643228 5.24701 0.860534V0.859534Z"
                            fill="white"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="8"
                          viewBox="0 0 12 8"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.04535 7.14L0.249351 1.658C-0.316649 1.013 0.143351 3.69899e-07 1.00235 3.69899e-07H10.5944C10.987 -0.000336283 11.3435 0.229148 11.5058 0.586693C11.6681 0.944239 11.6061 1.36367 11.3474 1.659L6.55135 7.139C6.36145 7.35631 6.08694 7.48098 5.79835 7.48098C5.50976 7.48098 5.23525 7.35631 5.04535 7.139V7.14Z"
                            fill="white"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  {isClickFirst && (
                    <p className="opacity-65 leading-8">
                      Our pricing varies depending on the scope and complexity
                      of the project. We offer competitive rates and tailor our
                      services to meet your specific needs. For a detailed
                      quote, please contact us with your project requirements.{" "}
                    </p>
                  )}
                </div>
                <div
                  onClick={() => setIsClickSecond(!isClickSecond)}
                  className={`${
                    isClickSecond ? "bg-white" : ""
                  } rounded-t-md border border-light-grey py-10 md:px-12 px-7 md:gap-9 cursor-pointer w-full flex flex-col gap-8`}
                >
                  <div className="w-full flex justify-between items-center">
                    <p className="font-bold text-2xl">How long does it take</p>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-custom-orange">
                      {isClickSecond ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="8"
                          viewBox="0 0 12 8"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.24701 0.859534L0.451011 6.34053C-0.114989 6.98753 0.345011 7.99953 1.20401 7.99953H10.796C11.1887 7.99987 11.5452 7.77039 11.7075 7.41284C11.8697 7.0553 11.8078 6.63586 11.549 6.34053L6.75301 0.860534C6.56311 0.643228 6.2886 0.518555 6.00001 0.518555C5.71142 0.518555 5.43691 0.643228 5.24701 0.860534V0.859534Z"
                            fill="white"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="8"
                          viewBox="0 0 12 8"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.04535 7.14L0.249351 1.658C-0.316649 1.013 0.143351 3.69899e-07 1.00235 3.69899e-07H10.5944C10.987 -0.000336283 11.3435 0.229148 11.5058 0.586693C11.6681 0.944239 11.6061 1.36367 11.3474 1.659L6.55135 7.139C6.36145 7.35631 6.08694 7.48098 5.79835 7.48098C5.50976 7.48098 5.23525 7.35631 5.04535 7.139V7.14Z"
                            fill="white"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  {isClickSecond && (
                    <p className="opacity-65 leading-8">
                      the timeline for each project varies based on its
                      complexity and specific requirements. We prioritize
                      quality and efficiency to deliver solutions promptly while
                      ensuring every detail is meticulously crafted. Contact us
                      to discuss your project timeline in detail.{" "}
                    </p>
                  )}
                </div>
                <div
                  onClick={() => setIsClickThird(!isClickThird)}
                  className={`${
                    isClickThird ? "bg-white" : ""
                  } rounded-t-md border border-light-grey py-10 md:px-12 px-7 md:gap-9 cursor-pointer w-full flex flex-col gap-8`}
                >
                  <div className="w-full flex justify-between items-center">
                    <p className="font-bold text-2xl">
                      Do you have any License
                    </p>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-custom-orange">
                      {isClickThird ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="8"
                          viewBox="0 0 12 8"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.24701 0.859534L0.451011 6.34053C-0.114989 6.98753 0.345011 7.99953 1.20401 7.99953H10.796C11.1887 7.99987 11.5452 7.77039 11.7075 7.41284C11.8697 7.0553 11.8078 6.63586 11.549 6.34053L6.75301 0.860534C6.56311 0.643228 6.2886 0.518555 6.00001 0.518555C5.71142 0.518555 5.43691 0.643228 5.24701 0.860534V0.859534Z"
                            fill="white"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="8"
                          viewBox="0 0 12 8"
                          fill="none"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M5.04535 7.14L0.249351 1.658C-0.316649 1.013 0.143351 3.69899e-07 1.00235 3.69899e-07H10.5944C10.987 -0.000336283 11.3435 0.229148 11.5058 0.586693C11.6681 0.944239 11.6061 1.36367 11.3474 1.659L6.55135 7.139C6.36145 7.35631 6.08694 7.48098 5.79835 7.48098C5.50976 7.48098 5.23525 7.35631 5.04535 7.139V7.14Z"
                            fill="white"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  {isClickThird && (
                    <p className="opacity-65 leading-8">
                      As a freelance software developer, I adhere to industry
                      standards and best practices in software development. I
                      ensure that all projects comply with relevant licenses,
                      including open-source licenses when applicable. Client
                      satisfaction and project integrity are my top priorities.{" "}
                    </p>
                  )}
                </div>
                {/* <div
                                    onClick={() => setIsClickFourth(!isClickFourth)}
                                    className={`${isClickFourth ? 'bg-white' : ''} rounded-t-md border border-light-grey py-10 md:px-12 px-7 md:gap-9 cursor-pointer w-full flex flex-col gap-8`}>
                                    <div className='w-full flex justify-between items-center'>
                                        <p className='font-bold text-2xl'>
                                            Can provide your business
                                        </p>
                                        <div className='w-8 h-8 rounded-full flex items-center justify-center bg-custom-orange'>
                                            {
                                                isClickFourth ? (<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.24701 0.859534L0.451011 6.34053C-0.114989 6.98753 0.345011 7.99953 1.20401 7.99953H10.796C11.1887 7.99987 11.5452 7.77039 11.7075 7.41284C11.8697 7.0553 11.8078 6.63586 11.549 6.34053L6.75301 0.860534C6.56311 0.643228 6.2886 0.518555 6.00001 0.518555C5.71142 0.518555 5.43691 0.643228 5.24701 0.860534V0.859534Z" fill="white" />
                                                </svg>) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.04535 7.14L0.249351 1.658C-0.316649 1.013 0.143351 3.69899e-07 1.00235 3.69899e-07H10.5944C10.987 -0.000336283 11.3435 0.229148 11.5058 0.586693C11.6681 0.944239 11.6061 1.36367 11.3474 1.659L6.55135 7.139C6.36145 7.35631 6.08694 7.48098 5.79835 7.48098C5.50976 7.48098 5.23525 7.35631 5.04535 7.139V7.14Z" fill="white" />
                                                    </svg>
                                                )
                                            }
                                        </div>
                                    </div>
                                    {
                                        isClickFourth && (
                                            <p className='opacity-65 leading-8'>
                                                Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.
                                            </p>
                                        )
                                    }
                                </div> */}
              </div>
            </div>
          </Slide>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
