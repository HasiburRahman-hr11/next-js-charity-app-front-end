import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import SectionHeader from '../SectionHeader/SectionHeader';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa'
import TeamCard from '../TeamCard/TeamCard';

const teamData = [
    {
        name: 'Nick Fury',
        designation: 'CEO & Founder',
        image:'/images/team-1.jpg',
        social: [
            { icon: <FaFacebookF />, link: '/' },
            { icon: <FaLinkedinIn />, link: '/' },
            { icon: <FaGithub />, link: '/' },
            { icon: <FaTwitter />, link: '/' }
        ]
    },
    {
        name: 'Scott Smith',
        designation: 'Volunteer',
        image:'/images/team-2.jpg',
        social: [
            { icon: <FaFacebookF />, link: '/' },
            { icon: <FaLinkedinIn />, link: '/' },
            { icon: <FaGithub />, link: '/' },
            { icon: <FaTwitter />, link: '/' }
        ]
    },
    {
        name: 'Annie Antonio',
        designation: 'Volunteer',
        image:'/images/team-3.jpg',
        social: [
            { icon: <FaFacebookF />, link: '/' },
            { icon: <FaLinkedinIn />, link: '/' },
            { icon: <FaGithub />, link: '/' },
            { icon: <FaTwitter />, link: '/' }
        ]
    }
]

const TeamSection = () => {
    return (
        <Box component="section" className='section team__section' sx={{
            padding: '100px 0'
        }}>
            <Container fixed>
                <SectionHeader
                    title="Our Expert Volunteer"
                    subtitle="Meet Our Team"
                />
                <Box component="div" className='section__body' sx={{
                    marginTop: '70px'
                }}>
                    <Grid container spacing={{ xs: 5, sm: 4 }}>
                        {teamData.map((team, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index} sx={{
                                marginBottom:{
                                    xs:'70px',
                                    md:'0'
                                }
                            }}>
                                <TeamCard team={team} />
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default TeamSection;