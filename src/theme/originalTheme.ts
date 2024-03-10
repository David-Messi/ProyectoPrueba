import { createTheme } from "@mui/material";



export const originalTheme = createTheme({
    palette: {
        primary: {
            main: '#0C1726'
        },
        secondary: {
            main: '#3C5973'
        },
        
    },

    components: {
        MuiTypography: {
            styleOverrides: {
                h1: {
                    fontSize: 60,
                    color: 'white'               
                },
                h2: {
                    fontSize: 40,
                    fontWeight: 'bold',
                    color:'white'
                },
                h3: {
                    fontSize: 20,
                    fontWeight:300,
                    color:'white'
                },
                // h4: {
                //     fontSize: 22,
                //     fontWeight: 'bold',
                //     fontFamily: 'arial',
                // },
                // h5: {
                //     fontSize: 16,
                //     fontFamily: 'arial',
                //     color: 'white',
                // },

                // h6: {
                //     fontSize: 17,
                //     fontFamily: 'arial',
                //     color: '#C4C4C4'
                // },
                
                // body2: {
                //     fontSize: 15,
                //     fontFamily: 'arial'
                // },
            }
        }
    }
})