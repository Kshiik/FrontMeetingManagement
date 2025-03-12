import { useState } from "react";
import { Box, ThemeProvider, TextField, Button, Checkbox, FormControlLabel, Select, MenuItem, Typography } from "@mui/material";
import '../src/styles/global.css';
import theme from '../src/styles/theme';

const ProfilePage = () => {
        const [profile, setProfile] = useState({
            firstName: "Марсель",
            lastName: "Августиниан",
            middleName: "Валентинович",
            email: "maenko121212@gmail.com",
            office: "Екатеринбург",
            emailNotifications: true,
            webPush: true,
    });

    const [isEditingPassword, setIsEditingPassword] = useState(false);
    const [password, setPassword] = useState("");
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
            <div style={{ width: "96%", padding: "2%" }}>
                {/* Заголовок */}
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="h6">Профиль</Typography>
                    <Button variant="contained" color="primary">Архив мероприятий</Button>
                </Box>

                {/* Данные пользователя */}
                <Box sx={{ borderBottom: "1px solid #A3A3A3", marginBottom: "20px" }}>
                    <Box sx={{ width: "50%", display: "flex", gap: 2, marginBottom: "20px" }}>
                        <Box sx={{ width: "50%", display: "flex", flexDirection: "column", gap: 2 }}>
                            <TextField label="Имя" value={profile.firstName} onChange={handleChange} fullWidth />
                            <TextField label="Фамилия" value={profile.lastName} onChange={handleChange} fullWidth/>
                            <TextField label="Отчество" value={profile.middleName} onChange={handleChange} fullWidth />
                        </Box>
                        <Box sx={{ width: "50%", display: "flex", flexDirection: "column", gap: 2 }}>
                            <TextField label="Email" name="email" value={profile.email} fullWidth />
                            <TextField label="Новый пароль" variant="outlined" type="password" fullWidth sx={{ display: "none" }} />
                            <Button variant="outlined" color="secondary" fullWidth
                                    onClick={() => setIsEditingPassword(!isEditingPassword)}>
                                <img src="/images/edit-icon.svg" alt="icon" style={{ marginRight: 5 }} /> 
                                Изменить пароль
                            </Button>
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
                        <img src="/images/cancel-icon.svg" alt="icon" style={{ marginRight: 5 }} />
                        Отменить
                    </Button>
                    <Button variant={isEdited ? "contained" : "outlined"} color={isEdited ? "primary" : "secondary"}>
                        <img src="/images/save-icon.svg" alt="icon" style={{ marginRight: 5 }} />
                        Сохранить
                    </Button>
                </Box>
            </div>
        </ThemeProvider>
    );
};

export default ProfilePage;  