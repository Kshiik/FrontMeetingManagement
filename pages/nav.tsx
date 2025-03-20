import React from 'react';
import { Box, ThemeProvider, List, ListItemButton, ListItemIcon, ListItemText, Typography, Button, Icon } from '@mui/material';
import '../src/styles/global.css';
import theme from '../src/styles/theme';

const Sidebar = () => {
  
    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ width: "15%", height: '92vh', display: 'flex', flexDirection: 'column', padding: "4vh 2%" }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Button variant="contained" color="primary" sx={{ justifyContent: 'flex-start', gap: 2 }}>
                        <svg width="22" height="22" viewBox="0 -960 960 960" fill="currentColor" >
                            <path d="M580-240q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29ZM200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/>
                        </svg>
                        Мероприятия
                    </Button>
                    <Button variant="outlined" color="secondary" sx={{ justifyContent: 'flex-start', gap: 2 }}>
                        <svg width="22" height="22" viewBox="0 -960 960 960" fill="currentColor" >
                            <path d="M120-120v-80h80v-640h400v40h160v600h80v80H680v-600h-80v600H120Zm160-640v560-560Zm160 320q17 0 28.5-11.5T480-480q0-17-11.5-28.5T440-520q-17 0-28.5 11.5T400-480q0 17 11.5 28.5T440-440ZM280-200h240v-560H280v560Z"/>
                        </svg>
                        Переговорные комнаты
                    </Button>
                    <Button variant="outlined" color="secondary" sx={{ justifyContent: 'flex-start', gap: 2 }}>
                        <svg width="22" height="22" viewBox="0 -960 960 960" fill="currentColor" >
                            <path d="M120-240q-33 0-56.5-23.5T40-320q0-33 23.5-56.5T120-400h10.5q4.5 0 9.5 2l182-182q-2-5-2-9.5V-600q0-33 23.5-56.5T400-680q33 0 56.5 23.5T480-600q0 2-2 20l102 102q5-2 9.5-2h21q4.5 0 9.5 2l142-142q-2-5-2-9.5V-640q0-33 23.5-56.5T840-720q33 0 56.5 23.5T920-640q0 33-23.5 56.5T840-560h-10.5q-4.5 0-9.5-2L678-420q2 5 2 9.5v10.5q0 33-23.5 56.5T600-320q-33 0-56.5-23.5T520-400v-10.5q0-4.5 2-9.5L420-522q-5 2-9.5 2H400q-2 0-20-2L198-340q2 5 2 9.5v10.5q0 33-23.5 56.5T120-240Z"/>
                        </svg>
                        Таймлайн
                    </Button>
                    <Button variant="outlined" color="secondary" sx={{ justifyContent: 'flex-start', gap: 2 }}>
                        <svg width="22" height="22" viewBox="0 -960 960 960" fill="currentColor" >
                            <path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z"/>
                        </svg>
                        Профиль
                    </Button>
                </Box>
                <Box sx={{ marginTop: 'auto', display: "flex", gap: 2 }}>    
                    <Typography noWrap sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap'}}>
                        Августинян Марсель Валентинович
                    </Typography>
                    <img src="/images/exit-icon.svg" alt="icon" />
                </Box>
            </Box>
        </ThemeProvider>
    );
  };
  
  export default Sidebar;