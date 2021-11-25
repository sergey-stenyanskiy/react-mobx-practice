import React from 'react'

import store from './store/index'

export default React.createContext<typeof store | undefined>(undefined);
