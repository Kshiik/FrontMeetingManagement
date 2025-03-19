import React from 'react';
import { Box, ThemeProvider, List, ListItemButton, ListItemIcon, ListItemText, Typography, Button } from '@mui/material';
import '../src/styles/global.css';
import theme from '../src/styles/theme';

import EventIcon from '@mui/icons-material/Event';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import TimelineIcon from '@mui/icons-material/Timeline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Sidebar = () => {
  
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: "15%", height: '92vh', display: 'flex', flexDirection: 'column', padding: "4vh 2%" }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Button variant="contained" color="primary">
                        <img src="/images/account-icon.svg" alt="icon" style={{ marginRight: 10 }} />
                        Мероприятия
                    </Button>
                    <Button variant="outlined" color="secondary">
                        <img src="/images/account-icon.svg" alt="icon" style={{ marginRight: 10 }} />
                        Переговорные комнаты
                    </Button>
                    <Button variant="outlined" color="secondary">
                        <img src="/images/account-icon.svg" alt="icon" style={{ marginRight: 10 }} />
                        Таймлайн
                    </Button>
                    <Button variant="outlined" color="secondary">
                        <img src="/images/account-icon.svg" alt="icon" style={{ marginRight: 10 }} />
                        Профиль
                    </Button>
                </Box>
                <Box sx={{ marginTop: 'auto', display: "flex" }}>    
                    <Typography> Августинян Марсель Валентинович </Typography>
                    <img src="/images/exit-icon.svg" alt="icon" style={{ marginRight: 10 }} />
                </Box>
            </Box>
        </ThemeProvider>
    );
  };
  
  export default Sidebar;