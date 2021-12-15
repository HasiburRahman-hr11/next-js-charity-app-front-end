import React from 'react';
import Head from 'next/head';
import { Container, Grid, Box } from '@mui/material';

// Components
import SectionHeader from '../SectionHeader/SectionHeader';
import CaseSlider from '../CaseSlider/CaseSlider';

// Fake Data
import {cases} from '../../fakeData';

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