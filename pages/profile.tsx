import { useState } from "react";
import { Box, ThemeProvider, TextField, Button, Checkbox, FormControlLabel, Select, MenuItem, Typography } from "@mui/material";
import '../src/styles/global.css';
import theme from '../src/styles/theme';

const ProfilePage = () => {
        const [profile, setProfile] = useState({
            firstName: "Марсель",
            lastName: "Августиниан",
            patronymic: "Валентинович",
            email: "maenko121212@gmail.com",
            password: "12345",
            office: "Екатеринбург",
            emailNotifications: true,
            webPush: true,
    });

    const [isEditingPassword, setIsEditingPassword] = useState(false);
    const [isEdited, setIsEdited] = useState(false);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProfile((prev) => ({ ...prev, [name]: value }));
        setIsEdited(true);
    };
    
    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setProfile((prev) => ({ ...prev, [name]: checked }));
        setIsEdited(true);
    };

    return (
        <ThemeProvider theme={theme}>
            <div style={{ width: "96%", padding: "4vh 2%" }}>

                {/* Заголовок */}
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="h5">Профиль</Typography>
                    <Button variant="contained" color="primary">Архив мероприятий</Button>
                </Box>

                {/* Данные пользователя */}
                <Box sx={{ borderBottom: "1px solid #A3A3A3", marginBottom: "20px" }}>
                    <Box sx={{ width: "50%", display: "flex", gap: 2, marginBottom: "20px" }}>
                        <Box sx={{ width: "50%", display: "flex", flexDirection: "column", gap: 2 }}>
                            <TextField label="Имя" name="firstName" fullWidth value={profile.firstName} onChange={handleChange} />
                            <TextField label="Фамилия" name="lastName" fullWidth value={profile.lastName} onChange={handleChange} />
                            <TextField label="Отчество" name="patronymic" fullWidth value={profile.patronymic} onChange={handleChange} />
                        </Box>
                        <Box sx={{ width: "50%", display: "flex", flexDirection: "column", gap: 2 }}>
                            <TextField label="Email" name="email" fullWidth value={profile.email} onChange={handleChange} />
                            {isEditingPassword ? (
                                <TextField label="Новый пароль" name="password" fullWidth value={profile.password} onChange={handleChange} />
                            ) : (
                                <Button variant="outlined" color="secondary" fullWidth
                                        onClick={() => setIsEditingPassword(true)} >
                                    <img src="/images/edit-icon.svg" alt="icon" style={{ marginRight: 5 }} />
                                    Изменить пароль
                                </Button>
                            )}
                        </Box>
                    </Box>   
                </Box>
                
                {/* Офис и другие изменения */}
                <Box sx={{ width: "50%", display: "flex", flexDirection: "column" }}>
                    <Typography variant="subtitle1" gutterBottom>Офис по умолчанию</Typography>
                    <Select name="office" value={profile.office} onChange={(e) => setProfile({ ...profile, office: e.target.value })} fullWidth sx={{ width: "50%" }}>
                        <MenuItem value="Екатеринбург">Екатеринбург</MenuItem>
                        <MenuItem value="Москва">Москва</MenuItem>
                        <MenuItem value="Санкт-Петербург">Санкт-Петербург</MenuItem>
                        <MenuItem value="Новосибирск">Новосибирск</MenuItem>
                        <MenuItem value="Ростов-на-Дону">Ростов-на-Дону</MenuItem>
                    </Select>
                    <FormControlLabel control={<Checkbox onChange={handleCheckboxChange} name="emailNotifications" />} label="Уведомления на почту о мероприятиях" />
                    <FormControlLabel control={<Checkbox onChange={handleCheckboxChange} name="webPush" />} label="Web-пуши о мероприятиях" />
                </Box>

                {/* Кнопки */}
                <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end", marginTop: "17%" }}>
                    <Button variant="outlined" color="secondary">
                        <img width="18" height="18" src="/images/cancel-icon.svg" alt="icon" style={{ marginRight: 10 }} />
                        Отменить
                    </Button>
                    <Button variant={isEdited ? "contained" : "outlined"} color={isEdited ? "primary" : "secondary"}>
                        <svg width="16" height="16" viewBox="0 0 19 19" fill="currentColor" style={{ marginRight: 10 }}>
                            <path d="M18 4.5V16.5C18 17.05 17.8042 17.5208 17.4125 17.9125C17.0208 18.3042 16.55 18.5 16 18.5H2C1.45 18.5 0.979167 18.3042 0.5875 17.9125C0.195833 17.5208 0 17.05 0 16.5V2.5C0 1.95 0.195833 1.47917 0.5875 1.0875C0.979167 0.695833 1.45 0.5 2 0.5H14L18 4.5ZM16 5.35L13.15 2.5H2V16.5H16V5.35ZM9 15.5C9.83333 15.5 10.5417 15.2083 11.125 14.625C11.7083 14.0417 12 13.3333 12 12.5C12 11.6667 11.7083 10.9583 11.125 10.375C10.5417 9.79167 9.83333 9.5 9 9.5C8.16667 9.5 7.45833 9.79167 6.875 10.375C6.29167 10.9583 6 11.6667 6 12.5C6 13.3333 6.29167 14.0417 6.875 14.625C7.45833 15.2083 8.16667 15.5 9 15.5ZM3 7.5H12V4.5H3V7.5ZM2 5.35V16.5V2.5V5.35Z"/>
                        </svg>
                        Сохранить
                    </Button>
                </Box>
            </div>
        </ThemeProvider>
    );
};

export default ProfilePage;  