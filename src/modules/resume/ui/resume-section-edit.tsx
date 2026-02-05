import { FC } from 'react';
import { Button, Textarea, TextInput } from '@mantine/core';

import { useResumeSectionEdit } from '../hooks';
import { ResumeSection } from '../types';

interface ResumeSectionEditProps {
  section: ResumeSection;
}

export const ResumeSectionEdit: FC<ResumeSectionEditProps> = props => {
  const controller = useResumeSectionEdit(props.section);

  return (
    <form
      onSubmit={controller.form.onSubmit(controller.onSubmit)}
      className={'flex gap-3'}
    >
      <div className={'flex flex-col gap-2'}>
        <TextInput
          {...controller.form.getInputProps('title')}
          placeholder={'Название раздела'}
        />
        <Textarea
          {...controller.form.getInputProps('content')}
          placeholder={'Контент раздела'}
        />
        <div className={'flex gap-1'}>
          <Button type={'submit'}>Сохранить</Button>
          <Button
            onClick={() => controller.resume.removeSection(props.section.id)}
          >
            Удалить раздел
          </Button>
        </div>
      </div>
      <div className={'flex flex-col gap-2 h-full'}>
        <Button
          h={'100%'}
          disabled={controller.prevSectionId === null}
          onClick={() => {
            if (controller.prevSectionId !== null)
              controller.resume.swapSections(
                props.section.id,
                controller.prevSectionId,
              );
          }}
        >
          ↑
        </Button>
        <Button
          h={'100%'}
          disabled={controller.nextSectionId === null}
          onClick={() => {
            if (controller.nextSectionId !== null)
              controller.resume.swapSections(
                props.section.id,
                controller.nextSectionId!,
              );
          }}
        >
          ↓
        </Button>
      </div>
    </form>
  );
};
