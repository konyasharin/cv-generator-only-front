import { HTMLWorker } from 'jspdf';

export const downloadPdf = (pdf: HTMLWorker, filename?: string) => {
  const BASE_FILENAME = 'pdf';

  pdf.save(filename ?? BASE_FILENAME);
};
