import { ReactNode } from 'react';

import { PATHS } from '@/modules/routing';

import { PdfPage } from '../pages';

export const ROUTES_CONFIG: Record<string, ReactNode> = {
  [PATHS.PDF]: <PdfPage />,
};
