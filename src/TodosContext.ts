import React from 'react'

import TodoStore from './store/index'

export default React.createContext<TodoStore | undefined>(undefined);
