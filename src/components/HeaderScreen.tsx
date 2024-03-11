
import { useState } from 'react';

import { KeyboardArrowDown } from '@mui/icons-material';
import { AppBar, Box, Button, Menu, MenuItem, styled } from '@mui/material';

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


    const [anchorEl, setAnchorEl] = useState<any>(null);
    const [valor, setValor] = useState<any>(null);



    const handleClick = (event:any, valor:string) => {
        setAnchorEl(event.currentTarget);
        setValor(valor);
    };


    
    const handleClose = () => {
        setAnchorEl(null);
        setValor(null);
    };



    return (


        <AppBar component="nav" sx={{ height: 100, width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-evenly', alignItems: 'center' }}>
                {navItems.map((item:any) => (
                <div key={item}>
                    <CustomButton sx={{ color: '#fff' }} endIcon={ (item === 'Pages') ? <KeyboardArrowDown /> : ''}
                        onClick={ (evento) => handleClick(evento, item) }
                    >
                        {item}
                    </CustomButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(valor === 'Pages')}
                        onClose={ handleClose }
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                    >
                        <MenuItem onClick={ handleClose }>Subitem 1</MenuItem>
                        <MenuItem onClick={ handleClose }>Subitem 2</MenuItem>
                        <MenuItem onClick={ handleClose }>Subitem 3</MenuItem>
                    </Menu>
                </div>
                ))}
            </Box>
        </AppBar>
    )

}
