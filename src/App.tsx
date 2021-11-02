import React from 'react'

import MainView from './view/MainView'

import { State } from './types/types'

import theme from './AppTheme'
import { ThemeProvider } from 'styled-components'
import { useViewModel } from './useViewModel'

const initialState: State = [];

export default () => {
  const vm = useViewModel(initialState);

  return (
    <ThemeProvider theme={theme}>
        <MainView vm={vm} />
    </ThemeProvider>
  );
}
