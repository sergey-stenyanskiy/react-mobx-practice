import React from 'react'

import { ThemeProvider } from 'styled-components'

import theme from './AppTheme'
import MainView from './view/MainView'

export default () => (
  <ThemeProvider theme={theme}>
    <MainView />
  </ThemeProvider>
)
