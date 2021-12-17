import { useRouter } from 'next/router';

import { Box, Container, Grid, Typography } from '@mui/material';

import Loading from '../../components/Loading/Loading';

// Redux
import { useSelector } from 'react-redux';

// Firebase
import { useFirebase } from '../../hooks/useFirebase';
import { useEffect } from 'react';

const index = () => {

    // Redux
    const user = useSelector((state) => state.auth.user);

    const { loading } = useFirebase();
    const router = useRouter();

    

    // if (!user?.email || !user?.displayName) {
    //     router.push('/login')
    // }
    useEffect(() => {
        if (!user?.email || !user?.displayName) {
            router.push('/login')
        }
    }, [user]);

    if (loading) {
        return <Loading />
    }

    return (
        <Box component="div" sx={{
            padding: '70px 0'
        }}>
            <Container fixed>
                <Box component="div" sx={{
                    backgroundColor: '#fff',
                    padding: {
                        md: '50px 40px',
                        xs: '30px 20px'
                    },
                    boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px'
                }}>
                    <Grid container spacing={5}>
                        <Grid item md={4} sm={5} xs={12} sx={{
                            textAlign: {
                                xs: 'center',
                                sm: 'left'
                            }
                        }}>
                            <img src={user?.photo ? user.photo : '/images/avatar.png'} alt="User" style={{
                                maxWidth: '150px',
                                borderRadius: '50%'
                            }} />
                        </Grid>
                        <Grid item md={8} sm={7} xs={12}>
                            <Typography variant="h2" component="h2" sx={{
                                fontFamily: "'Oswald', sans-serif",
                                fontSize: {
                                    xs: '20px',
                                    md: '25px'
                                },
                                fontWeight: '600',
                                marginBottom: '30px'
                            }}>
                                Welcome <span style={{ color: 'var(--title-color)' }}>{user?.displayName}</span>
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default index;