import { useForm } from '@mantine/form';

import { EditResumeSection } from '../types';

export const useResumeSectionEditForm = (initialValues: EditResumeSection) => {
  return useForm<EditResumeSection>({
    mode: 'uncontrolled',
    initialValues,
    validate: {
      title: value => (value.length ? null : 'Введите название раздела'),
      content: value => (value.length ? null : 'Введите контент раздела'),
    },
  });
};
