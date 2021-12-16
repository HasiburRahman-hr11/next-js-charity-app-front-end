import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './DashboardHeader.module.css'
import { Box, Container, Grid } from '@mui/material';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';



const DashboardHeader = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Box component="div" className={styles.dashboard__header}>
            <Container fixed>
                <Grid container>
                    <Grid item xs={8} md={6}>
                        <Link href="/">
                            <a><img src="/images/logo.png" alt="Logo" className={styles.logo} /></a>
                        </Link>
                    </Grid>
                    <Grid item xs={4} md={6}>
                        <ul className={styles.dashboard__menu}>
                            <li>
                                <span className={styles.menu__open} onClick={() => setMenuOpen(!menuOpen)}>
                                    <AiOutlineMenu />
                                </span>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </Container>

            <div className={menuOpen ? `${styles.dashboard__sidebar} ${styles.active}` : styles.dashboard__sidebar}>
                <ul className={styles.dashboard__sidebar_menu}>
                    <li>
                        <Link href="/"><a>Cases</a></Link>
                    </li>
                    <li>
                        <Link href="/"><a>Add Case</a></Link>
                    </li>
                    <li>
                        <Link href="/"><a>Blogs</a></Link>
                    </li>
                    <li>
                        <Link href="/"><a>Add Blog</a></Link>
                    </li>
                    <li>
                        <Link href="/"><a>Users</a></Link>
                    </li>
                    <li>
                        <span>Logout</span>
                    </li>
                </ul>

                <span className={styles.menu__close} onClick={() => setMenuOpen(false)}>
                    <AiOutlineClose />
                </span>
            </div>

            <div className={menuOpen ? `${styles.menu__overlay} ${styles.menu__overlay_active}` : styles.menu__overlay} onClick={() => setMenuOpen(false)}></div>
        </Box>
    );
};

export default DashboardHeader;