import { useState } from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Select, MenuItem, Button, ThemeProvider } from "@mui/material";
import '../src/styles/global.css';
import theme from '../src/styles/theme';

const room = {
    name: "Название комнаты",
    office: "Екатеринбург",
    status: "Активна",
    availability: "Публичная",
    capacity: 8,
};
  
const MeetingRooms = () => {
    return (
        <ThemeProvider theme={theme}>
            <div style={{ width: "96%", padding: "2%" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant='h6'>Переговорные комнаты</Typography>
                    <Box sx={{ display:"flex", alignItems: "center" }}>
                        <TextField variant="outlined" placeholder="Text" />
                        <Select  >
                            <MenuItem value="Екатеринбург">Екатеринбург</MenuItem>
                            <MenuItem value="Москва">Москва</MenuItem>
                            <MenuItem value="Санкт-Петербург">Санкт-Петербург</MenuItem>
                            <MenuItem value="Новосибирск">Новосибирск</MenuItem>
                            <MenuItem value="Ростов-на-Дону">Ростов-на-Дону</MenuItem>
                        </Select>
                        <Box>
                            <Button variant="contained" color="success">Все</Button>
                            <Button variant="outlined">Активные</Button>
                        </Box>
                        <Box>
                            <Button variant="contained" color="success">Все</Button>
                            <Button variant="outlined">Доступные мне</Button>
                        </Box>
                    </Box>
                </Box>
                
                <TableContainer component={Paper}>
                    <Table>
                    <TableHead>
                        <TableRow>
                        <TableCell>Наименование</TableCell>
                        <TableCell>Офис</TableCell>
                        <TableCell>Статус</TableCell>
                        <TableCell>Доступность</TableCell>
                        <TableCell>Емкость, чел.</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                        <TableCell>{room.name}</TableCell>
                        <TableCell>{room.office}</TableCell>
                        <TableCell>{room.status}</TableCell>
                        <TableCell>{room.availability}</TableCell>
                        <TableCell>{room.capacity}</TableCell>
                        </TableRow>
                    </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </ThemeProvider>
    );
};
  
export default MeetingRooms;  