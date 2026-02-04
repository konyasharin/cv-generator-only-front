import { FC } from 'react';
import { Button } from '@mantine/core';

import { PdfViewer } from '@/modules/pdf';
import { ResumeSectionEdit, useResumeContext } from '@/modules/resume';

export const PdfPage: FC = () => {
  const resume = useResumeContext();

  if (!resume) return;
  return (
    <div className={'flex gap-1'}>
      {resume.sections.map(section => (
        <ResumeSectionEdit
          section={section}
          updateSection={resume.updateSection}
          key={section.id}
        />
      ))}
      <Button onClick={resume.addSection}>+</Button>
      <PdfViewer>
        <PdfViewer.Section className={'basis-2/3'}>
          1233233 12312312312313 1231312313 12313123123123 12321213 123 12 123
        </PdfViewer.Section>
        <PdfViewer.Section className={'basis-1/3 pl-2 border-l'}>
          1233233 12312312312313 1231312313 12313123123123 12321213 123 12 123
          1233233 12312312312313 1231312313 12313123123123 12321213 123 12 123
          1233233 12312312312313 1231312313 12313123123123 12321213 123 12 123
          1233233 12312312312313 1231312313 12313123123123 12321213 123 12 123
          1233233 12312312312313 1231312313 12313123123123 12321213 123 12 123
          1233233 12312312312313 1231312313 12313123123123 12321213 123 12 123
        </PdfViewer.Section>
      </PdfViewer>
    </div>
  );
};
