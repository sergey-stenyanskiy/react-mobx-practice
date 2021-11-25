import React from 'react'

import { ThemeProvider } from 'styled-components'

import store from './store/index'

import TodosContext from './TodosContext'

import theme from './AppTheme'
import MainView from './view/MainView'

export default () => (
  <TodosContext.Provider value={store}>
    <ThemeProvider theme={theme}>
      <MainView />
    </ThemeProvider>
  </TodosContext.Provider>
)
