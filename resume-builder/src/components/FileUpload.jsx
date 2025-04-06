import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { extractTextFromPDF, extractTextFromDOCX } from '../utils/fileUtils';

function FileUpload({ onFileUploaded }) {
  const [file, setFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
    processFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.pdf, .docx, .txt',
  });

  const processFile = (file) => {
    if (file.type === 'application/pdf') {
      extractTextFromPDF(file).then((text) => onFileUploaded(text));
    } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
      extractTextFromDOCX(file).then((text) => onFileUploaded(text));
    }
  };

  return (
    <div>
      <div {...getRootProps()} style={{ border: '2px dashed #ccc', padding: '20px', cursor: 'pointer' }}>
        <input {...getInputProps()} />
        <p>Drag and drop your resume file here, or click to select one.</p>
      </div>
      {file && <p>File Selected: {file.name}</p>}
    </div>
  );
}

export default FileUpload;
