import { FC, ReactNode, useRef, useState } from 'react';

import { PDF_HEIGHT, PDF_MARGIN, PDF_WIDTH } from '@/modules/pdf/constants';

import { downloadPdf, elementToPdf } from '../utils';

interface PdfViewerProps {
  children: ReactNode;
}

export const PdfViewer: FC<PdfViewerProps> = props => {
  const [scale] = useState<number>(1);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={'border rounded-md overflow-hidden origin-top-left'}
      style={{
        transform: `scale(${scale})`,
        height: PDF_HEIGHT,
        width: PDF_WIDTH,
        padding: PDF_MARGIN,
      }}
    >
      <div ref={ref}>{props.children}</div>
      <button
        onClick={() => {
          if (ref.current) {
            const pdf = elementToPdf(ref.current);
            downloadPdf(pdf);
          }
        }}
      >
        Скачать
      </button>
    </div>
  );
};
