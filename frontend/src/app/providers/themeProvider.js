'use client'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7986cb',
    },
    secondary: {
      main: '#ba68c8',
    },
    error: {
      main: '#ff5252',
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides:{
        root: {
          minHeight: '0px',
          height:'100%',

        }
      }
     
    },
    MuiButtonGroup:{
      styleOverrides:{
        root: {
          lineHeight: 0,
          height:'100%'

        }
      }
    },
    MuiButton: {
      styleOverrides:{
        root: {
          fontSize: '.7rem',
          fontWeight:'bolder',
          padding: '0 10px',
          minWidth: 0,
          minHeight:0,
          height:'100%',
          letterSpacing:'.15rem',
          color: '#ba68c8'
        }
      }
    },
    MuiTextField:{
      styleOverrides:{
        root: {
          border:'none'
        }
      }
    }
  }
});

export default function Theme({children}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme/>
      {children}
    </ThemeProvider>

  )
}


