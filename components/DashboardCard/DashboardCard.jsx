import React from 'react';
import Link from 'next/link';

import { Box, Typography } from '@mui/material';
import { FiEdit } from 'react-icons/fi';

const DashboardCard = ({ data, link }) => {
    return (
        <Box component="div" sx={{
            backgroundColor: '#fff',
            boxShadow: 'rgba(17, 17, 26, 0.1) 0px 0px 16px',
            padding: '40px 30px',
            position: 'relative',
            minHeight: '150px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row'
        }}>
            <Typography variant="h3" component="h3" className="title" sx={{
                color: 'var(--title-color)',
                fontSize: '20px',
                textAlign: 'center'
            }}>
                {data.title}
            </Typography>
            <span className='icon__wrapper_primary' style={{
                width: '35px',
                height: '35px',
                fontSize: '22px',
                position: 'absolute',
                right: '10px',
                top: '10px'
            }}>
                <Link href={`${link}/${data._id}`}>
                    <a><FiEdit /></a>
                </Link>
            </span>
        </Box>
    );
};

export default DashboardCard;