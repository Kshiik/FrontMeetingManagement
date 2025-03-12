import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#603F99', 
    },
    secondary: {
      main: '#A3A3A3', 
    },
  },
  typography: {
    fontFamily: 'Mont, sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "16px",
          padding: "13px 26px",
          borderRadius: "0",
        },
      },
    },
  },
});

export default theme;