import { FC, ReactNode } from 'react';

import { ResumeContextProvider } from '@/modules/resume';

interface StoreProviderProps {
  children?: ReactNode;
}

export const StoreProvider: FC<StoreProviderProps> = props => {
  return <ResumeContextProvider>{props.children}</ResumeContextProvider>;
};
