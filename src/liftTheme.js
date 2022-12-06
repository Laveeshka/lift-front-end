import { createTheme } from '@mui/material/styles';

export const liftTheme = createTheme({
    palette: {
        primary: {
            main: '#ff0056'
        },
        text: {
            main: '#4e5262'
        },
        heading: {
            main: '#2d3038'
        },
        background: {
            main: '#ffffff'
        },
        surface: {
            main: '#f8f7fc',
            darker: '#eeedf2'
        },
        outline: {
            main: '#dedede'
        }
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(',')
        },
    breakpoints: {
        values: {
            mobile: 360,
            tablet: 768,
            laptop: 1024,
            desktop: 1280,
        }
    }
})