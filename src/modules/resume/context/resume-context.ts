import { createContext } from 'react';

import { EditResumeSection, ResumeSection } from '../types';

import { Id } from '@/shared';

export interface ResumeContext {
  sections: ResumeSection[];
  addSection: () => void;
  removeSection: (id: Id) => void;
  updateSection: (id: Id, newSection: EditResumeSection) => void;
}

export const ResumeContext = createContext<ResumeContext | null>(null);
