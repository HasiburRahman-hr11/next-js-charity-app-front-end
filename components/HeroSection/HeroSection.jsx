import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Container, Grid, Box, Typography } from '@mui/material';

import styles from './HeroSection.module.css';
const HeroSection = () => {
    return (
        <Box component="section" className='section hero__section' sx={{
            overflow:'hidden'
        }}>
            <Container fixed sx={{
                position: 'relative',
                minHeight:{
                    md:'950px'
                },
                paddingTop:'100px'
            }}>
                <Grid container sx={{
                height:'100%'
            }}>
                    <Grid item xs={12} md={4}>
                        <Box component="div">
                            <Typography variant='h1' component="h1" >
                                Lets be kind for
                                <Box component="span">Children</Box>
                            </Typography>
                            <Typography variant='p' component="p">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate perferendis sapiente aut.
                            </Typography>
                            <Link href="/cases">
                                <a>Donate Now</a>
                            </Link>
                        </Box>
                    </Grid>
                    {/* <Grid item xs={12} md={6}>
                        <Box component="div" sx={{
                            position: 'relative'

                        }}>
                            <Image
                                src='/images/hero.png'
                                alt="Hero Banner"
                            />
                        </Box>
                    </Grid> */}
                </Grid>
                <Box className="hero__right" sx={{
                    position: 'absolute',
                    right: '0',
                    top: '0',
                    width: '800px',
                    height: '727px',
                    zIndex: '-1',
                    '&::before': {
                        content: '',
                        content: '""',
                        background: `url('/images/hero.png') 50%/cover no-repeat local`,
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        right: '-100px',
                        bottom: '0',
                        top: '100px'
                    }
                }}></Box>
            </Container>
        </Box>
    );
};

export default HeroSection;