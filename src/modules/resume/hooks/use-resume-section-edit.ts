import { useCallback, useMemo } from 'react';

import { ResumeSection } from '../types';

import { useResumeContext } from './use-resume-context';
import { useResumeSectionEditForm } from './use-resume-section-edit-form';

export const useResumeSectionEdit = (section: ResumeSection) => {
  const resume = useResumeContext();
  if (!resume) throw new Error('Context not found');

  const form = useResumeSectionEditForm(section);

  const [prevSectionId, nextSectionId] = useMemo(() => {
    const currentSectionIdx = resume.sections.findIndex(
      currentSection => currentSection.id === section.id,
    );
    if (currentSectionIdx === undefined) return [null, null];

    if (currentSectionIdx === 0) {
      if (currentSectionIdx === resume.sections.length - 1) return [null, null];
      return [null, resume.sections[currentSectionIdx + 1].id];
    } else {
      if (currentSectionIdx === resume.sections.length - 1)
        return [resume.sections[currentSectionIdx - 1].id, null];
      return [
        resume.sections[currentSectionIdx - 1].id,
        resume.sections[currentSectionIdx + 1].id,
      ];
    }
  }, [resume.sections, section]);

  const onSubmit = useCallback(
    (values: typeof form.values) => {
      resume.updateSection(section.id, values);
    },
    [resume.updateSection, section],
  );

  return {
    resume,
    onSubmit,
    prevSectionId,
    nextSectionId,
    form,
  };
};
