import React from 'react';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';

const styles = {
    list: {
        marginBottom: '15px',
        '&:last-child': {
            marginBottom: '0'
        }
    }
}

const FooterLinks = () => {
    return (
        <Box component="ul">
            <Box component="li" sx={styles.list}>
                <Link href="/about">
                    <a>About Us</a>
                </Link>
            </Box>
            <Box component="li" sx={styles.list}>
                <Link href="/blogs">
                    <a>Our Blogs</a>
                </Link>
            </Box>
            <Box component="li" sx={styles.list}>
                <Link href="/cases">
                    <a>Our Cases</a>
                </Link>
            </Box>
            <Box component="li" sx={styles.list}>
                <Link href="/events">
                    <a>Our Events</a>
                </Link>
            </Box>
            <Box component="li" sx={styles.list}>
                <Link href="/contact">
                    <a>Contact Us</a>
                </Link>
            </Box>
        </Box>
    );
};

export default FooterLinks;