import {createTheme} from '@mui/material';

const Theme = createTheme({
  palette: {
    common: {
      black: 'rgba(0, 0, 0, 0.5)',
    },
    primary: {
      main: '#FBBC05',
    },
    secondary: {
      main: 'rgba(0, 0, 0, 0.7)',
    },
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    h1: {
      fontFamily: ['Roboto', 'sans-serif'].join(','),
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
    },
    h4: {
      fontSize: '1.5rem',
    },
    h5: {
      fontSize: '1.25rem',
    },
    h6: {
      fontSize: '1rem',
    },
  },
});

export default Theme;
