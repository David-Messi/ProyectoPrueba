

import { Autocomplete, Button, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography, styled } from "@mui/material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;


const CustomInput = styled(TextField)(({ theme }:any) => ({
    '& label.Mui-InputLabel-root': {
      color: theme.palette.common.white, 
    },
    '& .MuiInputBase-input': {
      color: theme.palette.common.white, 
      backgroundColor: theme.palette.background.paper, 
    },
    '& .MuiInputBase-root': {
      borderColor: 'transparent',
    },
  }));



export const FormularioScreen = () => {

    const opciones = ['Opcion 1', 'Opcion 2', 'Opcion 3', 'Opcion 4', 'Opcion 5', 'Opcion 6', 'Opcion 7'];

    return (


        <Grid container spacing={2} sx={{background:'white', px:10,pt:6, pb:10}}>

            <Grid item xs={12} sm={6} md={4}>
                <Autocomplete
                    multiple
                    id="checkboxes-tags-demo"
                    options={opciones}
                    disableCloseOnSelect
                    getOptionLabel={(option) => option}
                    renderOption={(props, option, { selected }) => (
                        <li {...props}>
                        <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                        />
                        {option}
                        </li>
                    )}
                    renderInput={(params) => (
                        <TextField {...params} label="Seleccione" placeholder="Seleccione" />
                    )}
                />
            </Grid>

            <Grid item xs={12} sm={6} md={4} sx={{display:'flex', justifyContent:'center', width:'100%'}}>
                <FormControl sx={{mt:-1}}>
                    {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
                    <RadioGroup aria-labelledby="demo-radio-buttons-group-label">
                        {opciones.map( item => (
                            <FormControlLabel value={item} key={item} control={<Radio />} label={item} />
                        ))
                        }
                    </RadioGroup>
                </FormControl>
            </Grid>


            <Grid item xs={12} sm={6} md={4} sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                <TextField label="Nombre" 
                    variant="outlined" 
                    fullWidth
                />
                <TextField label="Email" 
                    sx={{mt:2}}
                    variant="outlined" 
                    fullWidth
                />

                <TextField 
                    placeholder="Render the input text information here..." 
                    sx={{mt:2}}
                    variant="outlined" 
                    fullWidth
                    multiline
                    rows={3}
                />


                <Button variant="contained" color="secondary" sx={{mt:2}}>
                    <Typography sx={{color:'white'}}>Submit</Typography>
                </Button>
            </Grid>

        </Grid>
        

    )


}
