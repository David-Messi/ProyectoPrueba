import { Grid, Link, Typography } from '@mui/material';




export const FooterScreen = () => {



    const handleInformacion  = () => {
        console.log('(footer link)')
    }


    return (

        <Grid container spacing={2} sx={{background:'#0C1726', px:10, pt:6, pb:4, display:'flex', justifyContent:'center'}}>

            <Grid item xs={12} md={4} sx={{display:'flex', flexDirection:'column', alignItems:{xs:'center', md:'start'}}}>
                <Typography variant='h3' sx={{fontWeight:'bold'}}>Lorem ipsum dolor amet</Typography>
                <Typography variant='h4'>consectetur adipiscing elit.Quisqueeu consectetur mi.</Typography>
            </Grid>

            <Grid item xs={12} md={4} sx={{display:'flex', flexDirection:'column', alignItems:{xs:'center', md:'start'}}}>
                <Typography variant='h3' sx={{fontWeight:'bold'}}>Lorem ipsum dolor amet</Typography>
                <Typography variant='h4'>consectetur adipiscing elit.Quisqueeu consectetur mi.</Typography>
            </Grid>


            <Grid item xs={12} md={4} sx={{display:'flex', flexDirection:'column', alignItems:{xs:'center', md:'start'}}}>
                <Typography variant='h3' sx={{fontWeight:'bold'}}>Lorem ipsum dolor amet</Typography>
                <Typography variant='h4'>consectetur adipiscing elit.Quisqueeu consectetur mi.</Typography>
            </Grid>

            <Grid item xs={12} sx={{display:'flex', justifyContent:'center', mt:8}}>
                <Typography variant='h5' sx={{textAlign:'center'}}>Lorem ipsum dolor amet, consectetur adipiscing elit {'  '} 
                <Link component="button" onClick={ handleInformacion } sx={{color:'white', cursor:'pointer', mt:-0.3}} color="inherit" underline="always">Link here</Link>  
                {'  '} Lorem ipsum</Typography>
            </Grid>

        </Grid>

    )
}
