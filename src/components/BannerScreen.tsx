import { Button, Grid, Typography } from "@mui/material"




export const BannerScreen = () => {



    const handleBanner = () => {
        console.log('Go There')
    }




    return (

        <Grid container sx={{background:'#0C1726', minHeight:'90vh', pt:30, px:10, display:'flex', flexDirection:'column'}}>
            <Grid item xs={12}>
                <Typography variant="h1">Lorem ipsum</Typography>
            </Grid>

            <Grid item xs={12} mt={1}>
                <Typography variant="h2">Neque porro quisquam</Typography>
            </Grid>

            <Grid item xs={12} mt={1}>
                <Typography variant="h3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quod, adipisci quae perspiciatis vitae officia modi optio molestiae laborum, possimus nemo consectetur non? Perferendis rem architecto, odio veritatis nisi quae?</Typography>
            </Grid>

            <Grid item xs={12} mt={7}>
                <Button variant="contained" color="secondary" onClick={ handleBanner }>
                    <Typography sx={{color:'white'}}>Get there...</Typography>
                </Button>
            </Grid>

        </Grid>
        
    )
}
