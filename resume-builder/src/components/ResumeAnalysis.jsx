import React, { useState, useEffect } from 'react';
import compromise from 'compromise';

function ResumeAnalysis({ jobDescription, resumeText }) {
  const [suggestedChanges, setSuggestedChanges] = useState([]);

  useEffect(() => {
    // Make sure analysis only happens if both resumeText and jobDescription are available
    if (jobDescription && resumeText) {
      analyzeResume(jobDescription, resumeText);
    }
  }, [jobDescription, resumeText]);

  const analyzeResume = (jobDescription, resumeText) => {
    const jobSkills = extractSkills(jobDescription);
    const matchedSkills = matchSkills(resumeText, jobSkills);
    setSuggestedChanges(matchedSkills);
  };

  const extractSkills = (text) => {
    const doc = compromise(text);
    return doc.match('#Skill').out('array');
  };

  const matchSkills = (resumeText, jobSkills) => {
    const resumeDoc = compromise(resumeText);
    const resumeSkills = resumeDoc.match('#Skill').out('array');
    return resumeSkills.filter((skill) => jobSkills.includes(skill));
  };

  return (
    <div>
      <h3>Resume Analysis</h3>
      <p>Matching skills from the job description:</p>
      <ul>
        {suggestedChanges.length > 0 ? (
          suggestedChanges.map((skill, index) => <li key={index}>{skill}</li>)
        ) : (
          <li>No matching skills found</li>
        )}
      </ul>
    </div>
  );
}

export default ResumeAnalysis;
