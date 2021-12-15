import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/router";

import { Container, Grid, Box } from '@mui/material';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import styles from './Header.module.css';

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const router = useRouter();

    return (
        <header className={styles.header}>
            <Container fixed>
                <Grid container sx={{
                    alignItems: 'center'
                }}>
                    <Grid item xs={8} md={3}>
                        <Link href='/' >
                            <a style={{ position: "relative", width: "100%", display: 'block', maxWidth: '170px', paddingBottom: '20%' }}>
                                <Image
                                    src="/images/logo.png"
                                    alt="Logo"
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </a>
                        </Link>
                    </Grid>
                    <Grid item xs={4} md={9}>
                        <nav className={menuOpen ? `${styles.navbar} ${styles.navbar__active}` : styles.navbar}>
                            <ul className={styles.main__menu} onClick={() => setMenuOpen(false)}>
                                <li className={router.pathname == "/" ? `${styles.menu__item} ${styles.active}` : styles.menu__item}>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>
                                <li className={router.pathname == "/about" ? `${styles.menu__item} ${styles.active}` : styles.menu__item}>
                                    <Link href="/about">
                                        <a>About</a>
                                    </Link>
                                </li>
                                <li className={router.pathname == "/cases" ? `${styles.menu__item} ${styles.active}` : styles.menu__item}>
                                    <Link href="/cases">
                                        <a>Cases</a>
                                    </Link>
                                </li>
                                <li className={router.pathname == "/blogs" ? `${styles.menu__item} ${styles.active}` : styles.menu__item}>
                                    <Link href="/blogs" >
                                        <a>Blog</a>
                                    </Link>
                                </li>
                                <li className={router.pathname == "/contact" ? `${styles.menu__item} ${styles.active}` : styles.menu__item}>
                                    <Link href="/contact">
                                        <a>Contact</a>
                                    </Link>
                                </li>
                                <li className={router.pathname == "/login" ? `${styles.menu__item} ${styles.active}` : styles.menu__item}>
                                    <Link href="/login">
                                        <a>Login</a>
                                    </Link>
                                </li>
                            </ul>

                            {/* Toggle Menu Close */}
                            <span className={styles.menu__close} onClick={() => setMenuOpen(false)}>
                                <AiOutlineClose />
                            </span>
                        </nav>

                        {/* Toggle Menu Open */}
                        <span className={styles.menu__open} onClick={() => setMenuOpen(!menuOpen)}>
                            <AiOutlineMenu />
                        </span>
                        <div className={menuOpen ? `${styles.menu__overlay} ${styles.menu__overlay_active}` : styles.menu__overlay} onClick={() => setMenuOpen(false)}></div>
                    </Grid>
                </Grid>
            </Container>
        </header>
    );
};

export default Header;