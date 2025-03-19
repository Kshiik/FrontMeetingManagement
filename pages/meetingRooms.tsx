import { useState } from "react";
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Select, MenuItem, Button, ThemeProvider } from "@mui/material";
import '../src/styles/global.css';
import theme from '../src/styles/theme';

const countRooms = 12;
const rooms = Array(countRooms).fill({
    name: "Название комнаты",
    office: "Екатеринбург",
    status: "Активна",
    availability: "Публичная",
    capacity: 8,
});
  
const MeetingRooms = () => {
    const [city, setCity] = useState("Екатеринбург");
    const [activeButton, setActiveButton] = useState("Все");
    const [accessibleButton, setAccessibleButton] = useState("Все");

    return (
        <ThemeProvider theme={theme}>
            <div style={{ width: "96%", padding: "4vh 2%" }}>

                {/* Фильтрация */}
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1em" }}>
                    <Box sx={{ display: "flex", gap: 1 }} >
                        <Typography variant='h5'>Переговорные комнаты</Typography>
                        <Typography sx={{ color: "#A3A3A3" }}>{countRooms}</Typography>
                    </Box>
                    <Box sx={{ display:"flex", alignItems: "center", gap: 2 }}>
                        <TextField variant="outlined" placeholder="Текст" sx={{ widht: "270" }} />
                        <Select value={city} onChange={(e) => setCity(e.target.value)}>
                            <MenuItem value="Екатеринбург">Екатеринбург</MenuItem>
                            <MenuItem value="Москва">Москва</MenuItem>
                            <MenuItem value="Санкт-Петербург">Санкт-Петербург</MenuItem>
                            <MenuItem value="Новосибирск">Новосибирск</MenuItem>
                            <MenuItem value="Ростов-на-Дону">Ростов-на-Дону</MenuItem>
                        </Select>
                        <Box>
                            <Button 
                                variant={activeButton === "Все" ? "contained" : "outlined"} 
                                color={activeButton === "Все" ? "success" : "secondary"}
                                onClick={() => setActiveButton("Все")} >Все
                            </Button>
                            <Button 
                                variant={activeButton === "Активные" ? "contained" : "outlined"} 
                                color={activeButton === "Активные" ? "success" : "secondary"}
                                onClick={() => setActiveButton("Активные")} >Активные
                            </Button>
                        </Box>
                        <Box>
                            <Button 
                                variant={accessibleButton === "Все" ? "contained" : "outlined"} 
                                color={accessibleButton === "Все" ? "success" : "secondary"}
                                onClick={() => setAccessibleButton("Все")} >Все
                            </Button>
                            <Button 
                                variant={accessibleButton === "Доступные мне" ? "contained" : "outlined"} 
                                color={accessibleButton === "Доступные мне" ? "success" : "secondary"}
                                onClick={() => setAccessibleButton("Доступные мне")} >Доступные мне
                            </Button>
                        </Box>
                    </Box>
                </Box>
                
                {/* Таблица */}
                <TableContainer component={Paper}>
                    <Table>
                    <TableHead color="secondary">
                        <TableRow>
                            <TableCell>Наименование</TableCell>
                            <TableCell>Офис</TableCell>
                            <TableCell>Статус</TableCell>
                            <TableCell>Доступность</TableCell>
                            <TableCell>Емкость, чел.</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rooms.map((room, index) => (
                            <TableRow key={index}>
                                <TableCell>{room.name}</TableCell>
                                <TableCell>{room.office}</TableCell>
                                <TableCell>{room.status}</TableCell>
                                <TableCell>{room.availability}</TableCell>
                                <TableCell>{room.capacity}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </ThemeProvider>
    );
};
  
export default MeetingRooms;  