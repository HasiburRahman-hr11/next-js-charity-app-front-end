import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from "next/router";
import axios from 'axios';

import convertToBase64 from '../../../utils/convertToBase64';
import { Container, Typography, Box, Grid } from '@mui/material';
import PageBanner from '../../../components/PageBanner/PageBanner';
import Loading from '../../../components/Loading/Loading';



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
        const getCase = async () => {
            try {
                const { data } = await axios.get(`https://charit-able-api.herokuapp.com/cases/${query.caseId}`);
                setSingleCase(data);
                setLoading(false);
            } catch (error) {
                console.log();
                setLoading(false);
            }
        }
        if (query.caseId) {
            getCase();
        }
    }, [query.caseId]);

    if (loading) {
        return <Loading />
    }
    return (
        <>
            <Head>
                <title>{singleCase?.title} | Charitable Next Js Website</title>
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
                                {singleCase.thumbnail && (
                                    <img src={`data:image/png;base64,${convertToBase64(singleCase.thumbnail.data)}`} alt={singleCase.title} />
                                )}
                                <Link href="/donate">
                                    <a style={styles.donateBtn}>Donate Now</a>
                                </Link>
                            </Box>
                            <Typography variant="h2" component="h2" sx={styles.title}>
                                {singleCase?.title}
                            </Typography>

                            <div dangerouslySetInnerHTML={{ __html: singleCase.description }}></div>
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