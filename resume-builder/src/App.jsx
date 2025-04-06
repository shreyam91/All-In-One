import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import ResumeEditor from './components/ResumeEditor';
import ResumeAnalysis from './components/ResumeAnalysis';
import JobDescriptionInput from './components/JobDescriptionInput';

function App() {
  const [resumeText, setResumeText] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [suggestedChanges, setSuggestedChanges] = useState([]);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [showSuggestedChanges, setShowSuggestedChanges] = useState(false);

  // Handles file upload for the resume
  const handleFileUpload = (text) => {
    setResumeText(text);  // Assuming uploaded file is resume
  };

  // Handles changes to the job description text area
  const handleJobDescriptionChange = (text) => {
    setJobDescription(text);
  };

  // Handles changes to the resume text in the editor or text area
  const handleResumeTextChange = (updatedText) => {
    setResumeText(updatedText);
  };

  // Functions to toggle different sections
  const toggleAnalysis = () => {
    if (resumeText && jobDescription) {
      setShowAnalysis(true);
      setShowSuggestedChanges(false);
    }
  };

  const toggleSuggestedChanges = () => {
    setShowSuggestedChanges(true);
    setShowAnalysis(false);
  };

  const clearInputs = () => {
    setResumeText('');
    setJobDescription('');
    setShowAnalysis(false);
    setShowSuggestedChanges(false);
  };

  return (
    <div>
      <h1>Resume Builder & Editor</h1>

      {/* File Upload for Resume */}
      <FileUpload onFileUploaded={handleFileUpload} />

      {/* Resume Text Area (if the user prefers to paste resume) */}
      <div>
        <h3>Or, paste your resume here:</h3>
        <textarea
          value={resumeText}
          onChange={(e) => handleResumeTextChange(e.target.value)}
          placeholder="Paste your resume text here..."
          rows="10"
          style={{ width: '100%' }}
        />
      </div>

      {/* Job Description Input */}
      <JobDescriptionInput
        jobDescription={jobDescription}
        onChange={handleJobDescriptionChange}
      />

      {/* Buttons for controlling actions */}
      <div style={{ marginTop: '20px' }}>
        <button onClick={toggleAnalysis}>Resume Analysis</button>
        <button onClick={toggleSuggestedChanges}>Suggested Changes</button>
        <button onClick={clearInputs}>Clear All</button>
      </div>

      {/* Resume Analysis Section */}
      {showAnalysis && (
        <ResumeAnalysis jobDescription={jobDescription} resumeText={resumeText} />
      )}

      {/* Suggested Changes Section */}
      {showSuggestedChanges && (
        <ResumeEditor
          resumeText={resumeText}
          suggestedChanges={suggestedChanges}
          onChange={handleResumeTextChange}
        />
      )}
    </div>
  );
}

export default App;
