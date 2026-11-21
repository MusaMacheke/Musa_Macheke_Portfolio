const data = require('./resumeData');

/**
 * ATS-ready plain text generated from the same structured data that powers the
 * website and the PDF résumé using publicly shareable certification details.
 */
export const RESUME_TEXT = data.buildResumeText();
