import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import SectionHeader from '../SectionHeader/SectionHeader';
import MissionCard from '../MissionCard/MissionCard';


const missions = [
    {
        image: '/images/icon1.png',
        title: 'Clean Water',
        text: 'Lorem ipsum dolor amet cosectetur adipiscing, sed do eiusmod.'
    },
    {
        image: '/images/icon2.png',
        title: 'Healthy Food',
        text: 'Lorem ipsum dolor amet cosectetur adipiscing, sed do eiusmod.'
    },
    {
        image: '/images/icon3.png',
        title: 'Pure Education',
        text: 'Lorem ipsum dolor amet cosectetur adipiscing, sed do eiusmod.'
    },
    {
        image: '/images/icon4.png',
        title: 'Medical Facilities',
        text: 'Lorem ipsum dolor amet cosectetur adipiscing, sed do eiusmod.'
    }
]

const MissionSection = () => {
    return (
        <Box component="section" className='section mission__section' sx={{
            backgroundColor: '#F7FBFE',
            padding: '100px 0'
        }}>
            <Container fixed>
                <SectionHeader
                    title="We Are In A Mission To Help The Helpless"
                    subtitle="What We Do?"
                />
                <Box component="div" className='section__body' sx={{
                    marginTop:'70px'
                }}>
                    <Grid container spacing={{ xs: 5, sm: 4 }}>
                        {missions.map((mission, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <MissionCard mission={mission} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default MissionSection;