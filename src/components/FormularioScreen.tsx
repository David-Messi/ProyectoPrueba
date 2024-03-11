
import { useState } from "react";

import { Autocomplete, Button, Checkbox, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from "@mui/material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';


const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;




export const FormularioScreen = () => {

    const opciones = ['Opcion 1', 'Opcion 2', 'Opcion 3', 'Opcion 4', 'Opcion 5', 'Opcion 6', 'Opcion 7'];


    const [form, setForm] = useState<any>({multiple: [], radio: '', nombre: '', email: '', texto:'' });
    const { multiple, radio, nombre, email, texto } = form;


    const onChangeInput = ({ target }:any) => {
        setForm({
            ...form,
            [target.name]: target.value
        });
    }


    const onChangeMultiple = (valor:any) => {
        const selectedValues = new Set(valor); 
        const updatedArray = Array.from(selectedValues);
        setForm({
            ...form,
            multiple: updatedArray,
        });
    }


    const handleEnviarInfo = () => {
        console.log({ form });

        setForm({multiple:[], radio: '', nombre: '', email: '', texto:''});
    }




    return (


        <Grid container spacing={2} sx={{background:'white', px:10,pt:6, pb:10}}>

            <Grid item xs={12} sm={6} md={4}>
                <Autocomplete
                    multiple
                    value={opciones.filter((option:any) => multiple.includes(option))}
                    onChange={ (_, newValor) => onChangeMultiple(newValor) }
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
                    <FormLabel>
                        <Typography variant="h3" sx={{color:'black', fontWeight:'bold'}}>Opciones</Typography>
                    </FormLabel>
                    <RadioGroup 
                        name="radio"
                        value={ radio }
                        onChange={ onChangeInput }
                    >
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
                    name="nombre"
                    value={ nombre }
                    onChange={ onChangeInput }
                />
                <TextField label="Email" 
                    sx={{mt:2}}
                    variant="outlined" 
                    fullWidth
                    name="email"
                    value={ email }
                    onChange={ onChangeInput }
                />

                <TextField 
                    placeholder="Render the input text information here..." 
                    sx={{mt:2}}
                    variant="outlined" 
                    fullWidth
                    multiline
                    rows={3}
                    name="texto"
                    value={ texto }
                    onChange={ onChangeInput }
                />

                <Button variant="contained" color="secondary" sx={{mt:2}} onClick={ handleEnviarInfo }>
                    <Typography sx={{color:'white'}}>Submit</Typography>
                </Button>
            </Grid>
        </Grid>
    )
}
