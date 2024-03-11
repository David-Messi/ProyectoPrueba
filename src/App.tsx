
import { AppTheme } from './theme/AppTheme';

import { HeaderScreen, BannerScreen, Carrusel, FormularioScreen, FooterScreen } from "./components"
import { Toolbar } from '@mui/material';






export const App = () => {


  return (

    <AppTheme>
      <HeaderScreen />
      <Toolbar />

      <BannerScreen />


      <Carrusel />


      <FormularioScreen />


      <FooterScreen />

    </AppTheme>

  )


}
