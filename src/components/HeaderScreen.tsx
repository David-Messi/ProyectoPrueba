import { AppBar, Box, Button, styled } from '@mui/material';

const navItems = ['Home', 'Pages', 'About', 'Contact'];



const CustomButton = styled(Button)(({ theme }:any) => ({
    color: theme.palette.common.white, 
    fontSize: 16,
    fontWeight: 'medium', 
    '&:hover': {
      color: theme.palette.primary.main, 
      backgroundColor: 'gray', 
    },
  }));





export const HeaderScreen = () => {



    return (
        <AppBar component="nav" sx={{height:100, width:'100%', display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
            <Box sx={{display:'flex',  width:'100%', justifyContent:'space-evenly', alignItems:'center'}}>
                {navItems.map((item) => (
                <CustomButton key={item} sx={{ color: '#fff' }}>
                    {item}
                </CustomButton>
                ))}
            </Box>
        </AppBar>
    )

}
