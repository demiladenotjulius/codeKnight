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
              dateRange="Sep 2022 - Dec 2023"
              location="Self Employed, Nigeria"
              title="Web Developer"
              description="Worked as a web developer senior intern with Google experience designers. Worked on couple of projects, lead, follow, plan and execute."
              circleColor="green"
            />
            <TimelineItem
              dateRange="Sep 2022 - Dec 2023"
              location="Self Employed, Nigeria"
              title="Senior Developer"
              description="Worked as a web developer senior intern with Google experience designers. Worked on couple of projects, lead, follow, plan and execute."
              circleColor="red"
            />
            <TimelineItem
              dateRange="Sep 2022 - Dec 2023"
              location="Self Employed, Nigeria"
              title="Web Developer"
              description="Worked as a web developer senior intern with Google experience designers. Worked on couple of projects, lead, follow, plan and execute."
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