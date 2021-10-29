import React from 'react'

import MainView from './view/MainView'

import theme from './AppTheme'
import { ThemeProvider } from 'styled-components'
import { useVM } from './useVM'

export default () => {
  const vm = useVM();

  return (
    <ThemeProvider theme={theme}>
        <MainView vm={vm} />
    </ThemeProvider>
  );
}
