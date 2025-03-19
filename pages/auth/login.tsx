import { useState } from 'react';
import { TextField, Button, Typography, Dialog } from '@mui/material';
import { Box, ThemeProvider } from '@mui/system';
import '../../src/styles/global.css';
import theme from '../../src/styles/theme';

const Login = () => {
  const [open] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  return (
    <ThemeProvider theme={theme}>
      <Dialog open={open}  sx={{ "& .MuiPaper-root": { padding: 3, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" } }}>
        <Box sx={{ minWidth: "400px" }}>

          <Box sx={{ display: "flex" }}>
              <img src="/images/account-icon.svg" alt="icon" style={{ marginRight: 5 }} />
              <Typography variant="h5">Вход</Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 3 }}>
            <TextField label="Почта" variant="outlined" fullWidth onChange={(e) => setEmail(e.target.value)} />
            <TextField label="Пароль" variant="outlined" type="password" fullWidth onChange={(e) => setPassword(e.target.value)} />
            <Button variant="contained" color="primary" disabled={!isFormValid}> → Войти </Button>
          </Box>
        </Box>
      </Dialog>
    </ThemeProvider>
  );
};

export default Login;
