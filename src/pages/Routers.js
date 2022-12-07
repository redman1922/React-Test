import React from 'react';
import { Box, Paper, ListItem, ListItemButton } from '@mui/material';
import { Link, Routes, Route } from 'react-router-dom'
import Chats from './Chats';
import Home from './Home';
import NoChats from './NoChats';
import Profile from './Profile';


const Routers = () => {

    return (
        <div>
            <Box sx={{ display: 'flex', backgroundColor: 'black' }}>
                <Paper elevation={0} sx={{ minWidth: 256, display: 'flex', backgroundColor: 'black' }}>
                    <ListItem component="div" disablePadding>
                        <ListItemButton sx={{ height: 56 }}>
                            <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>Home</Link>
                        </ListItemButton>
                    </ListItem>

                    <ListItem component="div" disablePadding>
                        <ListItemButton sx={{ height: 56}}>
                            <Link style={{ textDecoration: 'none', color: 'white' }} to='/chats'>Chats</Link>
                        </ListItemButton>
                    </ListItem>

                    <ListItem component="div" disablePadding>
                        <ListItemButton sx={{ height: 56 }}>
                            <Link style={{ textDecoration: 'none', color: 'white' }} to='/profile'>Profile</Link>
                        </ListItemButton>
                    </ListItem>
                </Paper>
            </Box>
            <div className={'messenger'}>
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/chats/:chatId' element={<Chats />} />
                    <Route path='/profile' element={<Profile />} />
                    <Route path='*' element={<NoChats />} />
                </Routes>
            </div>
        </div>
    )
}

export default Routers
