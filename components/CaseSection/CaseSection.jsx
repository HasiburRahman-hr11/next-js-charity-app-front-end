import React from 'react';
import Head from 'next/head';
import { Container, Grid, Box } from '@mui/material';

import SectionHeader from '../SectionHeader/SectionHeader';
import CaseSlider from '../CaseSlider/CaseSlider';

const cases = [
    {
        _id: '01',
        title: 'Ensure Education for every poor children',
        image: 'https://images.pexels.com/photos/8618062/pexels-photo-8618062.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    },
    {
        _id: '02',
        title: 'Ensure Education for every poor children',
        image: 'https://images.pexels.com/photos/8618062/pexels-photo-8618062.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    },
    {
        _id: '03',
        title: 'Ensure Education for every poor children',
        image: 'https://images.pexels.com/photos/8618062/pexels-photo-8618062.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    },
    {
        _id: '04',
        title: 'Ensure Education for every poor children',
        image: 'https://images.pexels.com/photos/8618062/pexels-photo-8618062.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    },
    {
        _id: '05',
        title: 'Ensure Education for every poor children',
        image: 'https://images.pexels.com/photos/8618062/pexels-photo-8618062.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    },
    {
        _id: '06',
        title: 'Ensure Education for every poor children',
        image: 'https://images.pexels.com/photos/8618062/pexels-photo-8618062.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    },
    {
        _id: '07',
        title: 'Ensure Education for every poor children',
        image: 'https://images.pexels.com/photos/8618062/pexels-photo-8618062.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
    }
]

const CaseSection = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
            </Head>
            <Box component="section" className='section case__section' sx={{
                backgroundColor: '#F7FBFE',
                padding: '100px 0'
            }}>
                <Container fixed>
                    <SectionHeader
                        title="Popular Cases What You Should Know"
                        subtitle="Our Cases?"
                    />
                    <Box component="div" className='section__body' sx={{
                        marginTop: '70px'
                    }}>
                        <CaseSlider cases={cases} />
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default CaseSection;