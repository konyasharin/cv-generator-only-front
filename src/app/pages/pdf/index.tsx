import { FC } from 'react';
import { Button, Text, Title } from '@mantine/core';

import { PdfViewer } from '@/modules/pdf';
import { ResumeSectionEdit, useResumeContext } from '@/modules/resume';

export const PdfPage: FC = () => {
  const resume = useResumeContext();

  if (!resume) return;
  return (
    <div className={'flex gap-2'}>
      <div className={'flex flex-col gap-3.5'}>
        {resume.sections.map(section => (
          <ResumeSectionEdit section={section} key={section.id} />
        ))}
        <Button onClick={resume.addSection}>+</Button>
      </div>
      <PdfViewer>
        <PdfViewer.Section className={'basis-2/3'}>
          {resume.sections
            .filter(section => section.title && section.content)
            .map(resumeBlock => (
              <div>
                <Title>{resumeBlock.title}</Title>
                <Text>{resumeBlock.content}</Text>
              </div>
            ))}
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
