import React from 'react'
import { ViewModel } from '../types/types';

import Home from './Home/Home'

type MainViewProps = {
  vm: ViewModel
}

export default ({
  vm
}: MainViewProps) => <Home vm={vm} />