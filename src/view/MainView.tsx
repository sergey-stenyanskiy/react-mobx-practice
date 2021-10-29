import React from 'react'
import { TodoVM } from '../types/types';

import Home from './Home/Home'

type MainViewProps = {
  vm: TodoVM
}

export default ({
  vm
}: MainViewProps) => {
  return <Home vm={vm} />;
}
