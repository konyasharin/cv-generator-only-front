import jsPDF from 'jspdf';

import { PDF_HEIGHT, PDF_MARGIN, PDF_WIDTH } from '../constants';

export const elementToPdf = (element: HTMLElement) => {
  const doc = new jsPDF({
    format: [PDF_WIDTH, PDF_HEIGHT],
    unit: 'px',
  });

  return doc.html(element, {
    margin: PDF_MARGIN,
  });
};
