import React from 'react';

function ResumeEditor({ resumeText, suggestedChanges, onChange }) {
  return (
    <div>
      <h3>Resume Editor</h3>
      <div>
        <textarea
          value={resumeText}
          onChange={(e) => onChange(e.target.value)}
          style={{ width: '100%', height: '200px' }}
        ></textarea>
      </div>
      <div>
        <h4>Suggested Changes</h4>
        <ul>
          {suggestedChanges.map((change, index) => (
            <li key={index}>{change}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ResumeEditor;
