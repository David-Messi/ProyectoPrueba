
import { useState } from "react";
import { Button, Grid, Typography } from "@mui/material"




export const BannerScreen = () => {


     const [isButtonPressed, setIsButtonPressed] = useState(false);

    const handleBanner = () => {
        console.log('Go There')
        setIsButtonPressed(true);
    }




    return (


        <Grid container sx={{ background: '#0C1726', minHeight: '80vh', pt: 30, px: 10, display: 'flex', flexDirection: 'column' }}>
            <Grid item xs={12} sx={{'&:active': { transform: isButtonPressed ? 'scale(0.95)' : 'scale(1)' }}}>
            <Typography variant="h1">Lorem ipsum</Typography>
            </Grid>
    
            <Grid item xs={12} mt={1} sx={{ animation: isButtonPressed ? '$shakeAnimation 0.5s ease-in-out' : '' }}>
            <Typography variant="h2">Neque porro quisquam</Typography>
            </Grid>
    
            <Grid item xs={12} mt={1} sx={{ animation: isButtonPressed ? '$shakeAnimation 0.5s ease-in-out' : '' }}>
            <Typography variant="h3">Lorem ipsum dolor sit amet consectetur adipisicing elit...</Typography>
            </Grid>
    
            <Grid item xs={12} mt={7} mb={5}>
            <Button
                variant="contained"
                color="secondary"
                onClick={handleBanner}
                sx={{ '&:active': {transform: 'scale(0.95)'} }}
            >
                <Typography sx={{ color: 'white' }}>Get there...</Typography>
            </Button>
            </Grid>
        </Grid>
        
    )
}
