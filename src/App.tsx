import React from 'react'

import MainView from './view/MainView'

import theme from './AppTheme'
import { ThemeProvider } from 'styled-components'

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <MainView />  
    </ThemeProvider>
  );
}
