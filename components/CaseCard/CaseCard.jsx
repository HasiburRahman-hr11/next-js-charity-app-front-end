import React from 'react';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import convertToBase64 from '../../utils/convertToBase64.js'

const styles = {
    card: {
        backgroundColor: '#fff',
        boxShadow: 'rgba(0, 0, 0, 0.04) 0px 3px 5px',
        margin: '0 5px',
        border: '1px solid #f5f5f5'
    },
    title: {
        color: 'var(--title-color)',
        fontFamily: "'Oswald', sans-serif",
        fontSize: '25px',
        fontWeight: '600',
        padding: '30px 25px'
    },
    btnList: {
        textAlign: 'center',
        width: '100%'
    },
    caseBtn: {
        width: '100%',
        display: 'block',
        padding: '15px'
    },
    image: {
        width: '100%'
    }
}

const CaseCard = ({ data }) => {
    return (
        <Box component="div" sx={styles.card}>
            {data?.thumbnail && (
                <img src={`data:image/png;base64,${convertToBase64(data.thumbnail.data)}`} alt={data.title} />
            )}

            <Typography variant="h2" component="h2" sx={styles.title}>
                <Link href={`/cases/${data._id}`}>
                    <a >{data.title}</a>
                </Link>
            </Typography>
            <Box component="ul" sx={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <Box component="li" sx={styles.btnList}>
                    <Link href={`/cases/${data._id}`}>
                        <a style={{
                            ...styles.caseBtn,
                            borderTop: '1px dotted #ddd',
                            color: '#666'
                        }}>Learn More</a>
                    </Link>
                </Box>
                <Box component="div" sx={styles.btnList}>
                    <Link href="/donate">
                        <a style={{
                            ...styles.caseBtn,
                            backgroundImage: 'linear-gradient(90deg,#00a7d5,#27cdca)',
                            color: '#fff'
                        }}>Donate Now</a>
                    </Link>
                </Box>
            </Box>
        </Box >
    );
};

export default CaseCard;