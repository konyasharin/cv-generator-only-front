import { FC, ReactNode, useRef } from 'react';

import { downloadPdf, elementToPdf } from '../utils';

interface PdfViewerProps {
  children: ReactNode;
}

export const PdfViewer: FC<PdfViewerProps> = props => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div>
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
