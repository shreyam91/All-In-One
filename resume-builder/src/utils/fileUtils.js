import { PDFDocument } from 'pdf-lib';
import mammoth from 'mammoth';

export async function extractTextFromPDF(file) {
  const fileBuffer = await file.arrayBuffer();
  const pdfDoc = await PDFDocument.load(fileBuffer);
  const textContent = await pdfDoc.getPages().map((page) => page.getTextContent());
  return textContent.join(' ');
}

export function extractTextFromDOCX(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      mammoth.extractRawText({ arrayBuffer: event.target.result })
        .then((result) => resolve(result.value))
        .catch(reject);
    };
    reader.readAsArrayBuffer(file);
  });
}
