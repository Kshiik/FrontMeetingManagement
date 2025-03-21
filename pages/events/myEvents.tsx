import React, { useState } from 'react';
import { Box, Typography, Menu, MenuItem, Tabs, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Select, Button, ThemeProvider, IconButton, Collapse } from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import '../../styles/global.css';
import theme from '../../styles/theme';

const countEvent = 12;
const events = Array(countEvent).fill({
    name: "Литературно-музыкальная гостиная «8 июля – День семьи, любви и верности»",
    author: "Августиниан Марсель Валенинович",
    room: "Переговорная комната 1",
    date: "30.12.9999",
    startTime: "12:59",
    endTime: "00:01",
    menuIcon: <svg height="24px" viewBox="0 -960 960 960" width="24px" fill="#858585"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>,
    repeats: "Каждую неделю",
    description: "Есть над чем задуматься: явные признаки победы институционализации неоднозначны и будут объединены в целые кластеры себе подобных. Как уже неоднократно упомянуто, действия представителей оппозиции, вне зависимости от их уровня, должны быть заблокированы в рамках своих собственных рациональных ограничений. Являясь всего лишь частью общей картины, многие известные личности могут быть функционально разнесены на независимые элементы.",
    employees: [
        "Иванов Иван Иванович",
        "Иванов Иван Иванович",
        "Иванов Иван Иванович",
    ],
});

  
const MyEvents = () => {

    const [value, setValue] = useState(0);
    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const [room, setRoom] = useState("Переговорная комната 1");
    const [openRows, setOpenRows] = useState({});

    const toggleRow = (index) => {
        setOpenRows((prev) => ({ ...prev, [index]: !prev[index] }));
    };

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
        <ThemeProvider theme={theme}>
            <div style={{ width: "96%", padding: "4vh 2%" }}>

                {/* Фильтрация */}
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1em" }}>
                    <Tabs value={value} onChange={handleChange} aria-label="event tabs" TabIndicatorProps={{ style: { display: 'none' } }}>
                        <Tab label={
                            <Box sx={{ display: "flex", gap: 1  }}>
                                <Typography variant='h5' sx={{ color: value === 0 ? '#000' : '#A3A3A3' }}>Мои мероприятия</Typography>
                                <Typography sx={{ fontSize: '14px', color: '#A3A3A3' }}>{countEvent}</Typography>
                            </Box>
                        } sx={{ opacity: value === 0 ? 1 : 0.5 }} />
                        <Tab label={
                            <Box sx={{ display: "flex", gap: 1  }}>
                                <Typography variant='h5' sx={{ color: value === 1 ? '#000' : '#A3A3A3' }}>Участвую</Typography>
                                <Typography sx={{ fontSize: '14px', color: '#A3A3A3' }}>{countEvent}</Typography>
                            </Box>
                        } sx={{ opacity: value === 1 ? 1 : 0.5 }} />
                    </Tabs>
                    <Box sx={{ display:"flex", alignItems: "center", gap: 2 }}>
                        {value === 0 && (
                            <Button variant="outlined" color="secondary" >
                                <svg height="24px" viewBox="0 -960 960 960" width="24px" fill="#858585">
                                    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
                                </svg>
                            </Button>
                        )}
                        <TextField variant="outlined" placeholder="Текст" sx={{ widht: "270" }} />
                        <Select value={room} onChange={(e) => setRoom(e.target.value)}>
                            <MenuItem value="Переговорная комната 1">Переговорная комната 1</MenuItem>
                            <MenuItem value="Переговорная комната 2">Переговорная комната 2</MenuItem>
                            <MenuItem value="Переговорная комната 3">Переговорная комната 3</MenuItem>
                            <MenuItem value="Переговорная комната 4">Переговорная комната 4</MenuItem>
                            <MenuItem value="Переговорная комната 5">Переговорная комната 5</MenuItem>
                        </Select>
                    </Box>
                </Box>
                
                {/* Таблица "Мои мероприятия" */}
                {value === 0 && (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead color="secondary">
                            <TableRow>
                                <TableCell />
                                <TableCell>Наименование</TableCell>
                                <TableCell>Переговорная комната</TableCell>
                                <TableCell>Дата</TableCell>
                                <TableCell>Время начала</TableCell>
                                <TableCell>Время оканчания</TableCell>
                                <TableCell align="center" sx={{ padding: "0" }}>
                                    <svg width="16" height="24" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2 4C1.45 4 0.979167 3.80417 0.5875 3.4125C0.195833 3.02083 0 2.55 0 2C0 1.45 0.195833 0.979167 0.5875 0.5875C0.979167 0.195833 1.45 0 2 0C2.55 0 3.02083 0.195833 3.4125 0.5875C3.80417 0.979167 4 1.45 4 2C4 2.55 3.80417 3.02083 3.4125 3.4125C3.02083 3.80417 2.55 4 2 4ZM8 4C7.45 4 6.97917 3.80417 6.5875 3.4125C6.19583 3.02083 6 2.55 6 2C6 1.45 6.19583 0.979167 6.5875 0.5875C6.97917 0.195833 7.45 0 8 0C8.55 0 9.02083 0.195833 9.4125 0.5875C9.80417 0.979167 10 1.45 10 2C10 2.55 9.80417 3.02083 9.4125 3.4125C9.02083 3.80417 8.55 4 8 4ZM14 4C13.45 4 12.9792 3.80417 12.5875 3.4125C12.1958 3.02083 12 2.55 12 2C12 1.45 12.1958 0.979167 12.5875 0.5875C12.9792 0.195833 13.45 0 14 0C14.55 0 15.0208 0.195833 15.4125 0.5875C15.8042 0.979167 16 1.45 16 2C16 2.55 15.8042 3.02083 15.4125 3.4125C15.0208 3.80417 14.55 4 14 4Z" fill="#858585"/>
                                    </svg>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {events.map((event, index) => (
                                <React.Fragment key={index}>
                                {/* Основная строка */}
                                <TableRow sx={{
                                    '&:nth-of-type(odd)': {
                                        backgroundColor: '#FFFFFF',
                                    },
                                    '&:nth-of-type(4n-3)': {
                                        backgroundColor: '#F4F4F4',
                                    },
                                }}>
                                    <TableCell>
                                        <IconButton onClick={() => toggleRow(index)} size="small" sx={{ padding: "0" }}>
                                            {openRows[index] ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                                        </IconButton>
                                    </TableCell>
                                    <TableCell>{event.name}</TableCell>
                                    <TableCell>{event.room}</TableCell>
                                    <TableCell>{event.date}</TableCell>
                                    <TableCell>{event.startTime}</TableCell>
                                    <TableCell>{event.endTime}</TableCell>
                                    <TableCell align="center">
                                        <IconButton onClick={handleClick} sx={{ padding: "0" }} >
                                            {event.menuIcon}
                                        </IconButton>
                                        <Menu anchorEl={anchorEl} open={open} onClose={handleClose} sx={{ border: "1px solid #858585" }}>
                                            <MenuItem onClick={() => console.log('Изменить данные')} sx={{ gap: 1 }}>
                                                <svg height="20px" viewBox="0 -960 960 960" width="20px">
                                                    <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/>
                                                </svg>
                                                Изменить данные
                                            </MenuItem>
                                            <MenuItem onClick={() => console.log('Удалить мероприятие')} sx={{ gap: 1 }}>
                                                <svg height="20px" viewBox="0 -960 960 960" width="20px">
                                                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                                                </svg> Удалить мероприятие
                                            </MenuItem>
                                        </Menu>
                                    </TableCell>
                                </TableRow>
                  
                                {/* Расширяемая строка */}
                                <TableRow>
                                    <TableCell sx={{ padding: 0 }} />
                                    <TableCell colSpan={7} sx={{ padding: 0 }}>
                                        <Collapse in={openRows[index]} timeout="auto" unmountOnExit>
                                            <Box sx={{ margin: 2 }}>
                                                <Box sx={{ paddingBottom: 1 }}>
                                                    <Typography color='#858585' sx={{ backgroundColor: '#E3E3E3', padding: 1 }}>Повторы</Typography>
                                                    <Typography sx={{ backgroundColor: '#F4F4F4', padding: 1 }}>{event.repeats}</Typography>
                                                </Box>
                                                <Box sx={{ paddingBottom: 1 }}>
                                                    <Typography color='#858585' sx={{ backgroundColor: '#E3E3E3', padding: 1 }}>Описание</Typography>
                                                    <Typography sx={{ backgroundColor: '#F4F4F4', padding: 1 }}>{event.description}</Typography>
                                                </Box>
                                                <Box sx={{ paddingBottom: 1 }}>
                                                    <Typography color='#858585' sx={{ backgroundColor: '#E3E3E3', padding: 1 }}>Участники</Typography>
                                                    <Typography sx={{ backgroundColor: '#F4F4F4', padding: 1 }}>{event.employees?.join(', ')}</Typography>
                                                </Box>
                                            </Box>
                                        </Collapse>
                                    </TableCell>
                                </TableRow>
                              </React.Fragment>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                )}
                
                {/* Таблица "Участвую" */}
                {value === 1 && (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead color="secondary">
                            <TableRow>
                                <TableCell />
                                <TableCell>Наименование</TableCell>
                                <TableCell>Автор</TableCell>
                                <TableCell>Переговорная комната</TableCell>
                                <TableCell>Дата</TableCell>
                                <TableCell>Время начала</TableCell>
                                <TableCell>Время оканчания</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {events.map((event, index) => (
                            <React.Fragment key={index}>
                                {/* Основная строка */}
                                <TableRow sx={{
                                    '&:nth-of-type(odd)': {
                                        backgroundColor: '#FFFFFF',
                                    },
                                    '&:nth-of-type(4n-3)': {
                                        backgroundColor: '#F4F4F4',
                                    },
                                }}>
                                    <TableCell>
                                        <IconButton onClick={() => toggleRow(index)} size="small" sx={{ padding: "0" }}>
                                            {openRows[index] ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                                        </IconButton>
                                    </TableCell>
                                    <TableCell>{event.name}</TableCell>
                                    <TableCell>{event.author}</TableCell>
                                    <TableCell>{event.room}</TableCell>
                                    <TableCell>{event.date}</TableCell>
                                    <TableCell>{event.startTime}</TableCell>
                                    <TableCell>{event.endTime}</TableCell>
                                </TableRow>
                  
                                {/* Расширяемая строка */}
                                <TableRow>
                                    <TableCell sx={{ padding: 0 }} />
                                    <TableCell colSpan={7} sx={{ padding: 0 }}>
                                        <Collapse in={openRows[index]} timeout="auto" unmountOnExit>
                                            <Box sx={{ margin: 2 }}>
                                                <Box sx={{ paddingBottom: 1 }}>
                                                    <Typography color='#858585' sx={{ backgroundColor: '#E3E3E3', padding: 1 }}>Повторы</Typography>
                                                    <Typography sx={{ backgroundColor: '#F4F4F4', padding: 1 }}>{event.repeats}</Typography>
                                                </Box>
                                                <Box sx={{ paddingBottom: 1 }}>
                                                    <Typography color='#858585' sx={{ backgroundColor: '#E3E3E3', padding: 1 }}>Описание</Typography>
                                                    <Typography sx={{ backgroundColor: '#F4F4F4', padding: 1 }}>{event.description}</Typography>
                                                </Box>
                                                <Box sx={{ paddingBottom: 1 }}>
                                                    <Typography color='#858585' sx={{ backgroundColor: '#E3E3E3', padding: 1 }}>Участники</Typography>
                                                    <Typography sx={{ backgroundColor: '#F4F4F4', padding: 1 }}>{event.employees?.join(', ')}</Typography>
                                                </Box>
                                            </Box>
                                        </Collapse>
                                    </TableCell>
                                </TableRow>
                            </React.Fragment>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                )}
            </div>
        </ThemeProvider>
    );
};
  
export default MyEvents;  