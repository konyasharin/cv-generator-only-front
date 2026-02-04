import { FC, useCallback } from 'react';
import { Button, TextInput } from '@mantine/core';

import { ResumeContext } from '../context';
import { useResumeSectionEditForm } from '../hooks';
import { ResumeSection } from '../types';

interface ResumeSectionEditProps extends Pick<ResumeContext, 'updateSection'> {
  section: ResumeSection;
}

export const ResumeSectionEdit: FC<ResumeSectionEditProps> = props => {
  const form = useResumeSectionEditForm(props.section);
  const onSubmit = useCallback(
    (values: typeof form.values) => {
      props.updateSection(props.section.id, values);
    },
    [props.updateSection, props.section],
  );

  return (
    <form onSubmit={form.onSubmit(onSubmit)}>
      <TextInput
        {...form.getInputProps('title')}
        placeholder={'Название раздела'}
      />
      <TextInput
        {...form.getInputProps('content')}
        placeholder={'Контент раздела'}
      />
      <Button type={'submit'}>Сохранить</Button>
    </form>
  );
};
