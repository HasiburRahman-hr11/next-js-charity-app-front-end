import React from 'react';
import Head from 'next/head';
import { Grid, Container, Box } from '@mui/material'

// Components
import PageBanner from '../../components/PageBanner/PageBanner';
import SectionHeader from '../../components/SectionHeader/SectionHeader';


// Fake Data
import {blogs} from '../../fakeData';
import BlogCard from '../../components/BlogCard/BlogCard';

const Blogs = () => {
    return (
        <>
            <Head>
                <title>Blogs | Charitable Next Js Website</title>
            </Head>
            <PageBanner
                title="Our Blog"
                bannerBg="https://images.pexels.com/photos/6918509/pexels-photo-6918509.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                breadCumb="Blog"
            />
            <Box component="div" sx={{
                padding: '100px 0'
            }}>
                <Container fixed>
                    <SectionHeader
                        title="Latest News"
                        subtitle="Our Blog"
                    />
                    <Box component="div" className='section__body' sx={{
                        marginTop: '70px'
                    }}>
                        <Grid container spacing={{ xs: 5, sm: 4 }}>
                            {blogs.map(blog => (
                                <Grid item xs={12} sm={6} md={4} key={blog._id}>
                                    <BlogCard blog={blog} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default Blogs;