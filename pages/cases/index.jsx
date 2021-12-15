import React from 'react';
import Head from 'next/head';
import { Grid, Container, Box } from '@mui/material'

// Components
import PageBanner from '../../components/PageBanner/PageBanner';
import MissionSection from '../../components/MissionSection/MissionSection';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

// Fake Data
import { cases } from '../../fakeData';
import CaseCard from '../../components/CaseCard/CaseCard';


const index = () => {
    return (
        <>
            <Head>
                <title>Cases | Next Js Website</title>
            </Head>
            <div className='page cases__page'>
                <PageBanner
                    title="Our Cases"
                    bannerBg="https://images.pexels.com/photos/8948347/pexels-photo-8948347.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                    breadCumb="Cases"
                />
                <MissionSection />

                <Box component="div" sx={{
                    padding: '100px 0'
                }}>
                    <Container fixed>
                        <SectionHeader
                            title="Popular Cases What You Should Know"
                            subtitle="Our Cases?"
                        />
                        <Grid container spacing={4} sx={{
                            marginTop:'50px'
                        }}>
                            {cases.map(item => (
                                <Grid item xs={12} sm={6} md={4} key={item._id}>
                                    <CaseCard data={item} />
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>
            </div>
        </>
    );
};

export default index;