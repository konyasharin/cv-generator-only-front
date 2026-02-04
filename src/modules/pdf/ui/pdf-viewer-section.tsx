import { ComponentProps, FC, ReactNode } from 'react';
import clsx from 'clsx';

interface PdfViewerSectionProps extends ComponentProps<'div'> {
  children?: ReactNode;
}

export const PdfViewerSection: FC<PdfViewerSectionProps> = ({
  className,
  ...attributes
}) => {
  return <div {...attributes} className={clsx(className, 'flex-[0_1]')} />;
};
