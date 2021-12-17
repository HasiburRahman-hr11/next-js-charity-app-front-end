import React, { useState } from "react";
import Head from 'next/head';
import { Box, Container, Typography } from '@mui/material';

import { MdAddPhotoAlternate } from 'react-icons/md'

import DashboardHeader from '../../../components/DashboardHeader/DashboardHeader';
import RichEditor from "../../../components/RichEditor/RichEditor";
const styles = {
    formWrapper: {
        maxWidth: '850px',
        margin: '0 auto',
        backgroundColor: '#fff',
        padding: {
            md: '40px 30px',
            xs: '30px 20px'
        },
        border: '1px solid #ddd',
        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px'
    },
    title: {
        color: 'var(--primary-color)',
        fontSize: '25px',
        marginBottom: '30px',
        textAlign: 'center'
    }
}

const index = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState(null);
    const [thumbnail, setThumbnail] = useState('');
    const [thumbnailPreview, setThumbnailPreview] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
    }
    const handleThumbnailChange = (e) => {
        setThumbnailPreview(URL.createObjectURL(e.target.files[0]));
        setThumbnail(e.target.files[0]);
    }

    return (
        <>
            <Head>
                <title>Add New Blog | CharitAble Next Js Website</title>
            </Head>
            <DashboardHeader />

            <Box component="div" sx={{
                paddingTop: '110px',
                paddingBottom: '40px',
            }}>
                <Container fixed>
                    <Typography variant="h3" component="h3" className="title" sx={styles.title}>
                        Add New Blog
                    </Typography>

                    <Box component="div" sx={styles.formWrapper}>
                        <form onSubmit={submitHandler}>
                            <div className="input__group">
                                <label htmlFor="title" className="admin__label">Blog Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    className="admin__input"
                                />
                            </div>
                            <div className="input__group">
                                <label htmlFor="title" className="admin__label">Blog Description</label>
                                <RichEditor setValue={setDescription} />
                            </div>

                            <Box component="div" sx={{
                                marginBottom: '30px'
                            }}>
                                <div>
                                    <img src={thumbnailPreview ? thumbnailPreview : '/images/thumbnail.png'} alt="Thumbnail" className="admin__thumb_preview" />
                                </div>
                                <Box component="div" sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    alignItems: 'center'
                                }}>
                                    <label htmlFor="thumbnail" className="admin__add_thumbnail">
                                        <span><MdAddPhotoAlternate /></span> {thumbnailPreview ? 'Change' : 'Thumbnail'}
                                    </label>
                                    {thumbnailPreview && (
                                        <button type="button" className="admin__remove_thumbnail" onClick={() => {
                                            setThumbnail('');
                                            setThumbnailPreview('')
                                        }}>Remove</button>
                                    )}
                                </Box>
                                <input type="file" name="thumbnail" id="thumbnail" className="admin__image_input" hidden onChange={handleThumbnailChange} />
                            </Box>

                            <button type="submit" className="btn__primary">Submit</button>
                        </form>
                    </Box>
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