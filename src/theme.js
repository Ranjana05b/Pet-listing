import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#80AF81', // Sets the background color
    },
    text: {
      primary: '#31363F', // Sets text color
    },
  },
  typography: {
    h4: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          backgroundColor: '#508D4E',
          color: '#fff',
          borderRadius: 8,
          '&:hover': {
            backgroundColor: '#1A5319',
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage:
            'url("https://www.transparenttextures.com/patterns/foggy-birds.png")',
        },
      },
    },
  },
});

export default theme;
