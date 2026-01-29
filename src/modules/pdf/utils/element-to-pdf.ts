import jsPDF from 'jspdf';

export const elementToPdf = (element: HTMLElement) => {
  const doc = new jsPDF({
    format: 'a4',
    unit: 'px',
  });

  return doc.html(element);
};
