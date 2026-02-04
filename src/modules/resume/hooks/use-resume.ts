import { useCallback, useState } from 'react';

import { ResumeContext } from '../context';
import { EditResumeSection, ResumeSection } from '../types';

import { generateId, Id } from '@/shared';

export const useResume = (): ResumeContext => {
  const [sections, setSections] = useState<ResumeSection[]>([]);

  const addSection = useCallback(() => {
    setSections([
      ...sections,
      { id: generateId(sections), title: '', content: '' },
    ]);
  }, [sections]);

  const removeSection = useCallback(
    (id: Id) => {
      setSections(sections.filter(section => section.id === id));
    },
    [sections],
  );

  const updateSection = useCallback(
    (id: Id, newSection: EditResumeSection) => {
      if (!sections.some(section => section.id === id)) {
        console.error(`Секция с id ${id} не существует`);
        return;
      }

      setSections([
        ...sections.filter(section => section.id !== id),
        { id, ...newSection },
      ]);
    },
    [sections],
  );

  return {
    sections,
    addSection,
    removeSection,
    updateSection,
  };
};
