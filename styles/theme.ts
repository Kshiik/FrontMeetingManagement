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
          fontSize: "14px",
          padding: "13px 13px",
          boxShadow: 'none',
          borderRadius: "0",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: 'collapse',
          width: '100%',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderRadius: "0",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          backgroundColor: '#E3E3E3',
          color: '#858585',
          padding: '12px 16px',
          // borderLeft: '1px solid #858585', 
        },
        body: {
          color: '#333',
          padding: '12px 16px',
          borderBottom: "none",
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:nth-of-type(odd)': {
            backgroundColor: '#F4F4F4',
          },
        },
      },
    },
  },
});

export default theme;