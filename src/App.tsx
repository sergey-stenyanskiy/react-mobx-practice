import React from 'react'

import { State } from './types/types'

import { ThemeProvider } from 'styled-components'

import { useViewModel } from './useViewModel'

import theme from './AppTheme'
import MainView from './view/MainView'

const initialState: State = [];

export default () => {
  const vm = useViewModel(initialState);

  return (
    <ThemeProvider theme={theme}>
      <MainView vm={vm} />
    </ThemeProvider>
  );
}
