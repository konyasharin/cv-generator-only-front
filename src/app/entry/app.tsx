import { FC } from 'react';

import { Routes } from '@/modules/routing';

import { ROUTES_CONFIG } from '../configs';

const App: FC = () => {
  return <Routes config={ROUTES_CONFIG} />;
};

export default App;
