import React from 'react';
import Head from 'next/head';
import { Container, Box, Typography } from '@mui/material';

// Components
import PageBanner from '../../components/PageBanner/PageBanner';
import DonationForm from '../../components/DonationForm/DonationForm';

const styles = {
    title: {
        fontSize: '25px',
        color: 'var(--title-color)',
        marginBottom: '30px',
        textAlign: 'center'
    }
}

const Donate = () => {
    return (
        <>
            <Head>
                <title>Donate | Charitable Next Js Website</title>
            </Head>
            <PageBanner
                title="Donate Now"
                bannerBg="https://images.pexels.com/photos/259165/pexels-photo-259165.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                breadCumb="Donate"
            />
            <Box component="div" sx={{
                padding: '100px 0'
            }}>
                <Container fixed>
                    <Typography variant="h4" component="h4"
                        className='title'
                        sx={styles.title}
                    >
                        Make a Donation
                    </Typography>

                    <DonationForm />
                    
                </Container>
            </Box>
        </>
    );
};

export default Donate;