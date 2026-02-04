import { FC, ReactNode } from 'react';

import { ResumeContext } from '../context';
import { useResume } from '../hooks';

interface ResumeContextProviderProps {
  children?: ReactNode;
}

export const ResumeContextProvider: FC<ResumeContextProviderProps> = props => {
  const controller = useResume();

  return (
    <ResumeContext.Provider value={controller}>
      {props.children}
    </ResumeContext.Provider>
  );
};
