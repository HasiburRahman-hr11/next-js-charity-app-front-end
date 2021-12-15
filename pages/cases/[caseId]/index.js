import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from "next/router";

import { Container, Typography, Box, Grid, Button } from '@mui/material';
import PageBanner from '../../../components/PageBanner/PageBanner';
import Loading from '../../../components/Loading/Loading';

// Fake Data
import { cases } from '../../../fakeData';


const styles = {
    title: {
        fontSize: '28px',
        color: 'var(--title-color)',
        marginTop: '25px',
        marginBottom: '35px',
        fontWeight: '600',
        fontFamily: "'Oswald', sans-serif"
    },
    donateBtn: {
        backgroundImage: 'linear-gradient(90deg,#00a7d5,#27cdca)',
        color: '#fff',
        borderRadius: '30px',
        display: 'inline-block',
        marginTop: '20px',
        boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px',
        padding: '13px 20px'
    }
}

const index = () => {
    const [singleCase, setSingleCase] = useState({});
    const [loading, setLoading] = useState(true);
    const { query } = useRouter();

    useEffect(() => {
        const getSingleCase = async () => {
            try {
                const data = cases.find((item) => item._id === query.caseId);
                setSingleCase(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        getSingleCase();
    }, [query.caseId]);

    if (loading) {
        return <Loading />
    }
    return (
        <>
            <Head>
                <title>{singleCase?.title} | Next Js Website</title>
            </Head>
            <PageBanner
                title="Case Details"
                bannerBg="https://images.pexels.com/photos/8948347/pexels-photo-8948347.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                breadCumb={singleCase?.title}
            />
            <Box component="div" sx={{
                padding: '70px 0'
            }}>
                <Container fixed>
                    <Grid container spacing={5}>
                        <Grid item md={8} xs={12}>
                            <Box component="div">
                                <img src={singleCase?.thumbnail} alt={singleCase?.title} />
                                <Link href="/donate">
                                    <a style={styles.donateBtn}>Donate Now</a>
                                </Link>
                            </Box>
                            <Typography variant="h2" component="h2" sx={styles.title}>
                                {singleCase?.title}
                            </Typography>

                            <Typography variant="p" component="p" sx={{
                                color: '#666',
                                marginBottom: '20px'
                            }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, id natus tenetur rerum odio tempora illo quis possimus, eum doloribus, corporis molestias delectus placeat eligendi neque autem ut nesciunt velit.
                            </Typography>
                            <Typography variant="p" component="p" sx={{
                                color: '#666'
                            }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, id natus tenetur rerum odio tempora illo quis possimus, eum doloribus, corporis molestias delectus placeat eligendi neque autem ut nesciunt velit.
                            </Typography>
                        </Grid>
                        <Grid item md={4} xs={12} sx={{
                            display: {
                                md: 'block',
                                xs: 'none'
                            }
                        }}>
                            <h2>Sidebar</h2>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default index;