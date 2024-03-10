
import { AppTheme } from './theme/AppTheme';
import { Toolbar } from '@mui/material';

import { HeaderScreen, BannerScreen } from "./components"






export const App = () => {


  return (

    <AppTheme>
      <HeaderScreen />
      <Toolbar />



      <BannerScreen />
    </AppTheme>

  )


}