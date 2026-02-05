import { FC } from 'react';

import { Routes } from '@/modules/routing';

import { ROUTES_CONFIG } from '../configs';

const App: FC = () => {
  return (
    <div className={'p-2'}>
      <Routes config={ROUTES_CONFIG} />
    </div>
  );
};

export default App;
