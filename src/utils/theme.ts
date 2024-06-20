import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#1976d2', // Custom primary color for light mode
      },
      secondary: {
        main: '#dc004e', // Custom secondary color for light mode
      },
      background: {
        default: '#ffffff', // Background color for light mode
        paper: '#f4f6f8', // Paper color for light mode
      },
      text: {
        primary: '#000000', // Text color for light mode
        secondary: '#555555', // Secondary text color for light mode
      },
    },
  });
  
  export const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#90caf9', // Custom primary color for dark mode
      },
      secondary: {
        main: '#f48fb1', // Custom secondary color for dark mode
      },
      background: {
        default: '#121212', // Background color for dark mode
        paper: '#1d1d1d', // Paper color for dark mode
      },
      text: {
        primary: '#ffffff', // Text color for dark mode
        secondary: '#b0bec5', // Secondary text color for dark mode
      },
    },
  });