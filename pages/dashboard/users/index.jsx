import React from 'react';
import Head from 'next/head';
import { Box, Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

import DashboardHeader from '../../../components/DashboardHeader/DashboardHeader';

import { FiEdit } from 'react-icons/fi';
import { AiOutlineDelete } from 'react-icons/ai';


const users = [
    {
        name: 'John Doe',
        email: 'john@doe.com',
        role: 'Subscriber'
    },
    {
        name: 'John Doe',
        email: 'john@doe.com',
        role: 'Subscriber'
    },
    {
        name: 'John Doe',
        email: 'john@doe.com',
        role: 'Subscriber'
    },
    {
        name: 'John Doe',
        email: 'john@doe.com',
        role: 'Subscriber'
    },
];

const styles = {
    icon: {
        width: '38px',
        height: '38px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F7FBFE',
        borderRadius: '50%',
        fontSize: '22px',
        cursor:'pointer'
    }
}

const index = () => {
    return (
        <>
            <Head>
                <title>Users | CharitAble Next Js Website</title>
            </Head>
            <DashboardHeader />
            <Box component="div" sx={{
                paddingTop: '110px',
                paddingBottom: '40px',
            }}>
                <Container fixed>
                    <Typography variant="h3" component="h3" className="title" sx={{
                        color: 'var(--primary-color)',
                        fontSize: '25px',
                        marginBottom: '30px'
                    }}>
                        All Users
                    </Typography>

                    <TableContainer component="div" sx={{
                        backgroundColor: '#fff',
                        border: '1px solid #f1f1f1',
                        boxShadow: 'rgba(0, 0, 0, 0.08) 0px 4px 12px'
                    }}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="left">Email</TableCell>
                                    <TableCell align="left">Role</TableCell>
                                    <TableCell align="left">Edit</TableCell>
                                    <TableCell align="left">Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map((user) => (
                                    <TableRow
                                        key={user.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {user.name}
                                        </TableCell>
                                        <TableCell align="left">{user.email}</TableCell>
                                        <TableCell align="left">{user.role}</TableCell>
                                        <TableCell align="left">
                                            <span style={{...styles.icon, color:'#666'}}><FiEdit /></span>
                                        </TableCell>
                                        <TableCell align="left">
                                            <span style={{...styles.icon, color:'#DD5044'}}><AiOutlineDelete /></span>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

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