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
      setSections(sections.filter(section => section.id !== id));
    },
    [sections],
  );

  const updateSection = useCallback(
    (id: Id, newSection: EditResumeSection) => {
      if (!sections.some(section => section.id === id)) {
        console.error(`Секция с id ${id} не существует`);
        return;
      }

      setSections(
        sections.map(section => {
          if (section.id === id) return { id, ...newSection };
          return section;
        }),
      );
    },
    [sections],
  );

  const swapSections = useCallback(
    (fromId: Id, toId: Id) => {
      const fromSectionIdx = sections.findIndex(
        section => section.id === fromId,
      );
      const toSectionIdx = sections.findIndex(section => section.id === toId);
      if (fromSectionIdx === -1 || toSectionIdx === -1) {
        console.error(
          `Секция с id ${fromSectionIdx} или ${toSectionIdx} не найдена`,
        );
        return;
      }

      const newSections = [...sections];
      const tmp = newSections[fromSectionIdx];

      newSections[fromSectionIdx] = newSections[toSectionIdx];
      newSections[toSectionIdx] = tmp;
      setSections(newSections);
    },
    [sections],
  );

  return {
    sections,
    addSection,
    removeSection,
    updateSection,
    swapSections,
  };
};
