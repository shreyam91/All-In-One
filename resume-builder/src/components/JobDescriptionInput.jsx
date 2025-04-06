import React from 'react';

function JobDescriptionInput({ jobDescription, onChange }) {
  return (
    <div>
      <h3>Enter Job Description</h3>
      <textarea
        value={jobDescription}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste the job description here..."
        rows="10"
        style={{ width: '100%' }}
      />
    </div>
  );
}

export default JobDescriptionInput;
