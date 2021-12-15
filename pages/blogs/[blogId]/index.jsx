import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from "next/router";

import { Container, Typography, Box, Grid, Button } from '@mui/material';
import PageBanner from '../../../components/PageBanner/PageBanner';
import Loading from '../../../components/Loading/Loading';

// Fake Data
import { blogs } from '../../../fakeData';


const styles = {
    title: {
        fontSize: '28px',
        color: 'var(--title-color)',
        marginTop: '25px',
        marginBottom: '35px',
        fontWeight: '600',
        fontFamily: "'Oswald', sans-serif"
    },
}

const index = () => {
    const [blog, setBlog] = useState({});
    const [loading, setLoading] = useState(true);
    const { query } = useRouter();

    useEffect(() => {
        const getBlog = async () => {
            try {
                const data = blogs.find((item) => item._id === query.blogId);
                setBlog(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        getBlog();
    }, [query.blogId]);

    if (loading) {
        return <Loading/>
    }
    return (
        <>
            <Head>
                <title>{blog?.title} | Next Js Website</title>
            </Head>
            <PageBanner
                title="Our Blog"
                bannerBg="https://images.pexels.com/photos/6918509/pexels-photo-6918509.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                breadCumb={blog?.title}
            />
            <Box component="div" sx={{
                padding: '70px 0'
            }}>
                <Container fixed>
                    <Grid container spacing={5}>
                        <Grid item md={8} xs={12}>
                            <img src={blog?.thumbnail} alt={blog?.title} />
                            <Typography variant="h2" component="h2" sx={styles.title}>
                                {blog?.title}
                            </Typography>

                            <Typography variant="p" component="p" sx={{
                                color: '#666',
                                marginBottom: '20px'
                            }}>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, id natus tenetur rerum odio tempora illo quis possimus, eum doloribus, corporis molestias delectus placeat eligendi neque autem ut nesciunt velit.
                            </Typography>
                            <Typography variant="p" component="p" sx={{
                                color: '#666',
                                marginBottom: '20px'
                            }}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sit maiores qui! Accusamus aut debitis tempore dignissimos dolorem molestias blanditiis repellendus corrupti eaque? Modi odit eum ullam, facilis quod ea, quo non, iure sed reprehenderit accusantium architecto dolorum. Velit, explicabo.
                            </Typography>
                            <Typography variant="p" component="p" sx={{
                                color: '#666'
                            }}>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione error doloribus aspernatur praesentium harum impedit doloremque facere labore maxime magnam at sequi blanditiis in, consectetur vel incidunt veniam beatae. Velit minus vitae nobis veritatis eveniet.
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