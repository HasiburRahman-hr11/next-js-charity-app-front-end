import React from 'react';
import Head from 'next/head';

// Components
import PageBanner from '../../components/PageBanner/PageBanner';
import MissionSection from '../../components/MissionSection/MissionSection';
import AboutSection from '../../components/AboutSection/AboutSection';

const About = () => {
    return (
        <>
            <Head>
                <title>About | Charitable Next Js Website</title>
            </Head>
            <PageBanner
                title="About Us"
                bannerBg="https://images.pexels.com/photos/6994985/pexels-photo-6994985.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                breadCumb="About"
            />
            <MissionSection />
            <AboutSection />
        </>
    );
};

export default About;