import React, { useState } from "react";
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Container, Typography , CircularProgress } from '@mui/material';

import { MdAddPhotoAlternate } from 'react-icons/md'

import DashboardHeader from '../../../components/DashboardHeader/DashboardHeader';
import RichEditor from "../../../components/RichEditor/RichEditor";
import AdminRoute from "../../../utils/AdminRoute";

import { addNewCase } from '../../../redux/cases/apiCalls'

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

const AddCase = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState(null);
    const [thumbnail, setThumbnail] = useState('');
    const [thumbnailPreview, setThumbnailPreview] = useState('');

    const router = useRouter();
    const dispatch = useDispatch();
    const { isFetching } = useSelector(state => state.cases);




    const handleThumbnailChange = (e) => {
        if (e.target.files[0].size > 870400) {
            alert('File size is too large. Max size is 850kb')
        } else {
            setThumbnailPreview(URL.createObjectURL(e.target.files[0]));
            setThumbnail(e.target.files[0]);
        }

    }

    const submitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('title', title);
        formData.append('description', description);
        formData.append('thumbnail', thumbnail);

        addNewCase(dispatch, formData , router);
    }

    return (
        <AdminRoute>
            <Head>
                <title>Add New Case | CharitAble Next Js Website</title>
            </Head>
            <DashboardHeader />

            <Box component="div" sx={{
                paddingTop: '110px',
                paddingBottom: '40px',
            }}>
                <Container fixed>
                    <Typography variant="h3" component="h3" className="title" sx={styles.title}>
                        Add New Case
                    </Typography>

                    <Box component="div" sx={styles.formWrapper}>
                        <form onSubmit={submitHandler} encType="multipart/form-data">
                            <div className="input__group">
                                <label htmlFor="title" className="admin__label">Case Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    id="title"
                                    className="admin__input"
                                    required
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            <div className="input__group">
                                <label htmlFor="title" className="admin__label">Case Description</label>
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
                                <input type="file" accept="image/*" name="thumbnail" id="thumbnail" className="admin__image_input" hidden onChange={handleThumbnailChange} />
                            </Box>

                            <button type="submit" className="btn__primary" style={{ maxHeight: '45px', width: '120px' }}>
                                {isFetching ? <CircularProgress sx={{
                                    color: '#fff',
                                    width: '25px !important',
                                    height: '25px !important'
                                }} /> : 'Submit'}
                            </button>
                        </form>
                    </Box>
                </Container>
            </Box>

        </AdminRoute>
    );
};

export default AddCase;

AddCase.getLayout = function pageLayout(page) {
    return (
        <>
            {page}
        </>
    )
}