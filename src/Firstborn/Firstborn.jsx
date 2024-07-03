import React from 'react';
import Footer from '../components/Footer';
import HelpToBuildDream from '../components/HelpToBuildDream';
import ContactInfo from '../components/ContactInfo';
import Map from '../components/Map';
import GiveNewLook from '../components/GiveNewLook';
import Certification from '../components/Certification';
import ClientsRating from '../components/ClientsRating';
import TimelineItem from '../components/TimeLine';
import HomeHero from '../components/HomeHero';
import WhatIcanDo from '../components/WhatIcanDo';
import LatestWork from '../components/LatestWork';
import { Fade, Slide } from 'react-reveal';
import Header from '../components/Header';

export default function Firstborn() {

  return (
    <div className="w-full bg-light-pink relative">
      <Header isDark={true} />
      <div className='w-full px-6  lg:px-32 bg-light-brown'>
        <div className='flex flex-col w-full items-center mx-auto max-w-[1440px] py-4'>
            <HomeHero />
        </div>
      </div>
      <div className='w-full px-6  lg:px-32'>
        <div className='flex flex-col w-full items-center mx-auto max-w-[1440px]'>
          <Slide left>
            <WhatIcanDo />
          </Slide>
        </div>
      </div>
      <div className='w-full px-6  lg:px-32 bg-white py-16 md:py-32'>
        <Slide bottom>
          <div className='flex flex-col w-full items-center mx-auto max-w-[1440px] py-4'>
            <h2 className='font-extrabold text-[40px] md:text-[56px] mb-8'>
              My Work Experiences
            </h2>
            <TimelineItem
              dateRange="June 2023 - Present "
              location="UAD TECH, Nigeria"
              title="Web Developer"
              description="I'm currently interning as a software engineer, gaining hands-on experience in developing solutions with modern technologies like React for frontend, MongoDB and Firebase for databases, PrismJS for code formatting, and exploring AI."
              circleColor="green"
            />
            <TimelineItem
              dateRange="Jan 2023 - June 2023"
              location="Afritage, Nigeria"
              title="Software Engineer Internship"
              description="Had the opportunity to undertake a software engineering internship where I worked extensively with technologies such as React, JavaScript, Node.js, PrismJS, MongoDB, Firebase, and Rapid AI. During this time, I developed and implemented robust solutions, gained hands-on experience in frontend and backend development, and honed my skills in database management and integrating AI technologies. It was a valuable experience that enhanced my proficiency in building scalable and efficient software solutions."
              circleColor="red"
            />
            <TimelineItem
              dateRange="Feb 2022 - Dec 2022"
              location="3chub, Nigeria"
              title="IT Internship"
              description="Gained valuable experience during my IT internship, where I was actively involved in various projects. I learned hands-on skills in troubleshooting, software installation, and system maintenance, and I enjoyed applying my knowledge to contribute to the team's success."
              circleColor="blue"
            />
          </div>
        </Slide>
      </div>
      <div className='w-full px-6  lg:px-32 bg-custom-dark'>
        <Fade>
          <LatestWork />
        </Fade>
      </div>
      <div className='w-full px-6  lg:px-32'>
        <div className='flex flex-col w-full mx-auto max-w-[1440px] pt-12'>
          <Fade>
            <ClientsRating />
          </Fade>
          <Fade>
            <Certification />
          </Fade>
          <Fade>
            <GiveNewLook />
          </Fade>
        </div>
      </div>
      <Map />
      <div className='w-full px-6  lg:px-32'>
        <Slide right>
          <div className='flex flex-col w-full mx-auto max-w-[1440px] gap-32 mt-20'>
            <ContactInfo />
            <HelpToBuildDream />
          </div>
        </Slide>
      </div>
      <Footer />
    </div>
  )

}