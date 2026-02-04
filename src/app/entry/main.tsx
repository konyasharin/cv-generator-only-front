import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

import App from './app';
import { StoreProvider } from './store-provider';

import './index.css';
import '@mantine/core/styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider>
        <StoreProvider>
          <App />
        </StoreProvider>
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>,
);
