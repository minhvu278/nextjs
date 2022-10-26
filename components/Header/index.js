import { AppBar, Box, IconButton, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './header.module.scss';
import { useRouter } from 'next/router';
import {logout} from "../../redux/actions/auth";
import Cookies from 'js-cookie';

const Header = () => {
    const dispatch = useDispatch();
    const router = useRouter()
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const actionLogout = () => {
        Cookies.remove('token');
        Cookies.remove('locale');
        localStorage.clear()
        router.push('/login')
    }

    const handleLogout = async (e) => {
        e.preventDefault();
        dispatch(logout())
        actionLogout()
    }

    return (
        <Box className={styles.root}>
            <AppBar
                position='fixed'>
                <Toolbar className={styles.headerSpaceBetween}>
                    <IconButton className={styles.iconMenu} aria-label='open'>
                        <MenuIcon fontSize="large" />
                    </IconButton>
                    <Box className={styles.navbar}>
                        <IconButton onClick={handleClick}>
                            <SettingsOutlinedIcon />
                        </IconButton>
                    </Box>
                    <Menu anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}>
                        <MenuItem onClick={handleLogout}>
                            <ListItemIcon>
                                <LogoutIcon fontSize='small' />
                            </ListItemIcon>
                            <ListItemText>Logout</ListItemText>
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header