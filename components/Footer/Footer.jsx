import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import NewsLetter from '../NewsLetter/NewsLetter';

const Footer = () => {
    return (
        <Box component="footer" className="footer" sx={{
            backgroundColor:'#062265',
            color:'#fff'
        }}>
            <Container fixed>
                <NewsLetter/>
            </Container>
        </Box>
    );
};

export default Footer;