import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Box, Container, Typography } from '@mui/material';
import { AiOutlineGoogle, AiFillGithub } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

const index = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formData);
    }
    return (
        <>
            <Head>
                <title>Sign In | Next Js Website</title>
            </Head>
            <Box component="div" className='login__page'>
                <Container fixed>
                    <Box component="div" className='auth__form_wrapper' sx={{
                        padding: {
                            xs: '30px 25px',
                            sm: '50px 40px'
                        }
                    }}>
                        <h3 className="auth__form_title">Sign In</h3>
                        <form action="" className='auth__form' onSubmit={submitHandler}>
                            <div className="input__group">
                                <input
                                    type="email"
                                    name='email'
                                    placeholder='Email'
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>
                            <div className="input__group">
                                <input
                                    type="password"
                                    name='password'
                                    placeholder='password'
                                    required
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                            </div>
                            <button type='submit' className="auth__submit">
                                Sign In
                            </button>
                            <Typography variant="p" component="p" sx={{
                                padding: '20px 0',
                                textAlign: 'center',
                                color: '#777',
                                fontSize: '14px'
                            }}>
                                Or Sign In With -
                            </Typography>

                            <ul className="auth__alter">
                                <li>
                                    <button type='button' className='google__btn'>
                                        <AiOutlineGoogle />
                                    </button>
                                </li>
                                <li>
                                    <button type='button' className='facebook__btn'>
                                        <FaFacebookF />
                                    </button>
                                </li>
                                <li>
                                    <button type='button' className='github__btn'>
                                        <AiFillGithub />
                                    </button>
                                </li>
                            </ul>

                            <Typography variant="p" component="p" sx={{
                                textAlign: 'center',
                                color: '#777',
                                marginTop: '20px'
                            }}>
                                Don't have an account?
                                <Link href="/register"><a style={{
                                    color:'#0E88EE',
                                    marginLeft:'5px'
                                }}>Sign Up.</a></Link>
                            </Typography>
                        </form>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default index;