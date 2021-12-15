import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import SectionHeader from '../SectionHeader/SectionHeader';
import BlogCard from '../BlogCard/BlogCard';


const blogs = [
    {
        _id: '01',
        title: 'Many Children are suffering a lot for food.',
        description: 'Some description text',
        thumbnail: 'https://images.pexels.com/photos/8078392/pexels-photo-8078392.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        author: 'Mr. Invisible',
        createdAt: '2021-12-15T14:05:42.138Z'
    },
    {
        _id: '02',
        title: 'Be soft and kind for the poor people.',
        description: 'Some description text',
        thumbnail: 'https://images.pexels.com/photos/7293100/pexels-photo-7293100.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        author: 'Mr. Invisible',
        createdAt: '2021-12-15T14:05:42.138Z'
    },
    {
        _id: '03',
        title: 'Be kind for the poor people and the kids.',
        description: 'Some description text',
        thumbnail: 'https://images.pexels.com/photos/1125850/pexels-photo-1125850.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        author: 'Mr. Invisible',
        createdAt: '2021-12-15T14:05:42.138Z'
    }
]

const BlogSection = () => {
    return (
        <Box component="section" className='section blog__section' sx={{
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
    );
};

export default BlogSection;