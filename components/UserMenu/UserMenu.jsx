import React, { useState } from 'react';
import Link from 'next/link';

import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

// React Icons
import { MdExitToApp } from 'react-icons/md';
import { AiFillDashboard } from 'react-icons/ai';

// Redux
import { useSelector } from 'react-redux';

// Firebase
import { useFirebase } from '../../hooks/useFirebase';


const styles = {
    muiMenu : {
        overflow: 'visible',
        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
        mt: 1.5,
        '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
        },
        '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
        },
    },
    reactIcons: {
        width: '33px',
        height: '33px',
        fontSize: '25px',
        backgroundColor: '#BDBDBD',
        marginRight: '7px',
        marginLeft: '-3px',
        color: '#fff',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
}

const UserMenu = ({ setMenuOpen }) => {

    // MUI Menu
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleUserMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleUserMenuClose = () => {
        setAnchorEl(null);
    };

    // Redux
    const user = useSelector((state) => state.userInfo.user);

    const { signOutController } = useFirebase();

    return (
        <>
            <Tooltip title="Account settings">
                <IconButton onClick={handleUserMenuClick} size="small" sx={{ ml: 2 }}>
                    <Avatar sx={{ width: 32, height: 32 }}>
                        {user?.displayName && user?.displayName?.substr(0, 1)}
                    </Avatar>
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleUserMenuClose}
                onClick={handleUserMenuClose}
                PaperProps={{
                    elevation: 0,
                    sx: styles.muiMenu,
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={() => setMenuOpen(false)}>
                    <Link href="/profile" style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%'
                    }}>
                        <a style={{ display: 'flex', alignItems: 'center' }}>
                            <Avatar /> {user?.displayName && user?.displayName?.split(' ')[0]}
                        </a>
                    </Link >
                </MenuItem>
                <MenuItem onClick={() => setMenuOpen(false)}>
                    <Link href="/dashboard" style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%'
                    }}>
                        <a style={{ display: 'flex', alignItems: 'center' }}>
                            <span style={styles.reactIcons}><AiFillDashboard /></span> Dashboard
                        </a>
                    </Link >
                </MenuItem>
                <Divider />


                <MenuItem onClick={() => {
                    signOutController();
                    setMenuOpen(false);
                }}>
                    <span style={styles.reactIcons}>
                        <MdExitToApp />
                    </span>
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
};

export default UserMenu;