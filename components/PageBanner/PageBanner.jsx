import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";
import { Box, Container, Typography } from '@mui/material';

const PageBanner = ({ title, bannerBg }) => {
    const router = useRouter();
    return (
        <Box component="div" sx={{
            background: `linear-gradient(rgba(0,0,0,.60),rgba(0,0,0,.60)), url(${bannerBg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition:'center center',
            padding: '100px 0',
            textAlign: 'center',
            color: '#fff'
        }}>
            <Container fixed>
                <Typography variant="h3" component="h3">
                    {title}
                </Typography>
                <Typography variant="p" component="p" sx={{
                    fontSize:'18px',
                    color:'#ddd'
                }}>
                    <Link href="/">
                        <a>Home </a>
                    </Link>
                    <span style={{color:'var(--primary-color)'}}>{router.pathname ? router.pathname : ''}</span>
                </Typography>
            </Container>
        </Box>
    );
};

export default PageBanner;