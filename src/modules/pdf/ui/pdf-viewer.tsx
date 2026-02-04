import { ComponentProps, FC, ReactNode, useRef, useState } from 'react';

import { PDF_HEIGHT, PDF_MARGIN, PDF_WIDTH } from '../constants';
import { downloadPdf, elementToPdf } from '../utils';

import { PdfViewerSection } from './pdf-viewer-section';

interface PdfViewerProps {
  children: ReactNode;
}

type PdfViewer = FC<PdfViewerProps> & {
  Section: FC<ComponentProps<typeof PdfViewerSection>>;
};

const PdfViewer: PdfViewer = props => {
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
      <div ref={ref} className={'flex h-full'}>
        {props.children}
      </div>
      <button
        className={'absolute top-0 left-0 bg-blue-300'}
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

PdfViewer.Section = PdfViewerSection;

export { PdfViewer };
