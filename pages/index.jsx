import React from 'react';
import Head from 'next/head';
import HeroSection from '../components/HeroSection/HeroSection';
import MissionSection from '../components/MissionSection/MissionSection';
import AboutSection from '../components/AboutSection/AboutSection';
import CaseSection from '../components/CaseSection/CaseSection';
import CounterSection from '../components/CounterSection/CounterSection';
import TeamSection from '../components/TeamSection/TeamSection';
import WorldSection from '../components/WorldSection/WorldSection';
import BlogSection from '../components/BlogSection/BlogSection';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | Next Js Website</title>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Oswald:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <div className='page home__page'>
        <HeroSection />
        <MissionSection />
        <AboutSection />
        <CaseSection />
        <CounterSection />
        <TeamSection />
        <WorldSection />
        <BlogSection />
      </div>
    </>
  );
};

export default Home;