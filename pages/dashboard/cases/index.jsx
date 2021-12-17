import React from 'react';
import Head from 'next/head';
import { Box, Container, Grid, Typography } from '@mui/material';
import DashboardHeader from '../../../components/DashboardHeader/DashboardHeader';

import { cases } from '../../../fakeData';

import DashboardCard from '../../../components/DashboardCard/DashboardCard';

const index = () => {
    return (
        <>
            <Head>
                <title>Cases | CharitAble Next Js Website</title>
            </Head>
            <DashboardHeader />
            <Box component="div" sx={{
                paddingTop: '110px',
                paddingBottom: '40px',
            }}>
                <Container fixed>
                    <Typography variant="h3" component="h3" className="title" sx={{
                        color: 'var(--primary-color)',
                        fontSize: '25px',
                        marginBottom: '30px'
                    }}>
                        All Cases
                    </Typography>
                    <Grid container spacing={5}>
                        {cases.map(item => (
                            <Grid item xs={12} sm={6} md={4} key={item._id}>
                                <DashboardCard data={item} link='/dashboard/cases/edit' />
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default index;

index.getLayout = function pageLayout(page) {
    return (
        <>
            {page}
        </>
    )
}