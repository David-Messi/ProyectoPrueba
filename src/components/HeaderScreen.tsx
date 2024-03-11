
import React, { useState } from 'react';

import { KeyboardArrowDown } from '@mui/icons-material';
import { AppBar, Box, Button, Menu, MenuItem, styled } from '@mui/material';

// const navItems = ['Home', 'Pages', 'About', 'Contact'];



const CustomButton = styled(Button)(({ theme }:any) => ({
    color: theme.palette.common.white, 
    fontSize: 16,
    fontWeight: 'medium', 
    '&:hover': {
      color: theme.palette.primary.main, 
      backgroundColor: 'gray', 
    },
  }));



  const navItems = [
    {
      label: 'Home',
    },
    {
      label: 'About',
      subItems: [
        {
          label: 'Our Mission',
        },
        {
          label: 'Our Team',
        },
      ],
    },
    {
      label: 'Products',
      subItems: [
        {
          label: 'Product A',
        },
        {
          label: 'Product B',
        },
        {
          label: 'Product C',
        },
      ],
    },
    {
      label: 'Contact',
    },
  ];



export const HeaderScreen = () => {


    const [anchorEl, setAnchorEl] = useState<any>(null);


    const handleOpenMenu = (event:string) => {
        setAnchorEl(event);
    };
  
    const handleCloseMenu = () => {
        setAnchorEl(null);
    };



    return (
        // <AppBar component="nav" sx={{height:100, width:'100%', display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
        //     <Box sx={{display:'flex',  width:'100%', justifyContent:'space-evenly', alignItems:'center'}}>
        //         {navItems.map((item) => (
        //         <CustomButton key={item} sx={{ color: '#fff' }}>
        //             {item}
        //         </CustomButton>
        //         ))}
        //     </Box>
        // </AppBar>

        <AppBar component="nav" sx={{ height: 100, width: '100%', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', position: 'fixed' }}>
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-evenly', alignItems: 'center' }}>
                {navItems.map((item) => {
                if (item.subItems) {
                    return (
                    <React.Fragment key={item.label}>
                        <CustomButton
                            endIcon={<KeyboardArrowDown />}
                            aria-controls={item.label}
                            aria-haspopup="true"
                            onClick={ () => handleOpenMenu(item.label)}
                            sx={{ mr: 2 }}
                        >
                        {item.label}
                        </CustomButton>
                        <Menu
                            sx={{ mt:'0px', width:'300px' }}
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl === item.label)}
                            onClose={handleCloseMenu}
                            MenuListProps={{
                                sx: {backgroundColor: 'red' },
                            }}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'right' }} 
                        >
                        {item.subItems.map((subItem) => (
                            <MenuItem key={subItem.label} onClick={handleCloseMenu}>
                            {subItem.label}
                            </MenuItem>
                        ))}
                        </Menu>
                    </React.Fragment>
                    );
                } else {
                    return (
                    <CustomButton key={item.label} sx={{ mr: 2 }}>
                        {item.label}
                    </CustomButton>
                    );
                }
                })}
            </Box>
        </AppBar>
    )

}
