import React, { useEffect, useState } from 'react';
import Head from 'next/head';
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
}

const SingleBlog = () => {
    const [blog, setBlog] = useState({});
    const [loading, setLoading] = useState(true);
    const { query } = useRouter();

    useEffect(() => {
        const getBlog = async () => {
            try {
                const { data } = await axios.get(`https://charit-able-api.herokuapp.com/blogs/${query.blogId}`);
                setBlog(data);
                setLoading(false);
            } catch (error) {
                console.log();
                setLoading(false);
            }
        }
        if (query.blogId) {
            getBlog();
        }
    }, [query.blogId]);

    if (loading) {
        return <Loading />
    }
    return (
        <>
            <Head>
                <title>{blog?.title} | Charitable Next Js Website</title>
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
                            {blog.thumbnail && (
                                <img src={`data:image/png;base64,${convertToBase64(blog.thumbnail.data)}`} alt={blog.title} />
                            )}
                            <Typography variant="h2" component="h2" sx={styles.title}>
                                {blog?.title}
                            </Typography>

                            <div dangerouslySetInnerHTML={{ __html: blog.description }}></div>
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

export default SingleBlog;