import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import HeroSection from '../components/HeroSection/HeroSection';
import MissionSection from '../components/MissionSection/MissionSection';
import AboutSection from '../components/AboutSection/AboutSection';
import CaseSection from '../components/CaseSection/CaseSection';
import CounterSection from '../components/CounterSection/CounterSection';
import TeamSection from '../components/TeamSection/TeamSection';
import WorldSection from '../components/WorldSection/WorldSection';
import BlogSection from '../components/BlogSection/BlogSection';
import Loading from '../components/Loading/Loading';

import { getAllCases } from '../redux/cases/apiCalls';
import { getAllBlogs } from '../redux/blogs/apiCalls';

const Home = () => {

  const { isFetching, cases } = useSelector(state => state.cases);
  const { isFetching: blogFetching, blogs } = useSelector(state => state.blogs);

  const dispatch = useDispatch();

  useEffect(() => {
    getAllCases(dispatch);
    getAllBlogs(dispatch);
  }, []);


  if (isFetching || blogFetching) {
    return <Loading />
  }

  return (
    <>
      <Head>
        <title>Home | Next Js Website</title>
      </Head>
      <div className='page home__page'>
        <HeroSection />
        <MissionSection />
        <AboutSection />
        {cases.length > 0 && <CaseSection />}
        <CounterSection />
        <TeamSection />
        <WorldSection />
        {blogs.length > 0 && <BlogSection />}

      </div>
    </>
  );
};

export default Home;