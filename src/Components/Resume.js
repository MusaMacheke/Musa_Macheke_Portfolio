import React, { useState, useEffect, useRef } from 'react';
import { BsDownload } from "react-icons/bs";
import { Document, Page, pdfjs } from 'react-pdf'; // Import from react-pdf
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { RESUME_TEXT } from '../content/siteCopy';
import '../content/Content.css';

// Generated from src/content/resumeData.js by scripts/generate-resume.js
import pdf from "../Resume_Current.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const pageWrapRef = useRef(null);
  const [pageWidth, setPageWidth] = useState(760);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const element = pageWrapRef.current;
    if (!element) return undefined;
    const measure = () => setPageWidth(Math.min(760, Math.max(220, element.clientWidth)));
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  const nextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const copyResumeText = async () => {
    try {
      await navigator.clipboard.writeText(RESUME_TEXT);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className='ResumePage'>
      <header className="resume-page-heading">
        <p className="section-kicker">Experience and qualifications</p>
        <h1>Résumé</h1>
        <p>View or download my current professional résumé.</p>
      </header>
      <section className="resume-viewer" aria-label="Résumé PDF preview">
        <div className="resume-viewer-toolbar">
          <div className="controls" aria-label="Résumé page navigation">
            <button type="button" onClick={prevPage} disabled={pageNumber <= 1} aria-label="Previous résumé page">← <span>Previous</span></button>
            <span className="resume-page-count">Page <strong>{pageNumber}</strong> of {numPages || '…'}</span>
            <button type="button" onClick={nextPage} disabled={!numPages || pageNumber >= numPages} aria-label="Next résumé page"><span>Next</span> →</button>
          </div>
          <a className="downloadCV" href={pdf} target='_blank' rel="noreferrer" download="Musa Macheke Resume.pdf">
            <BsDownload aria-hidden="true" /> <span>Download PDF</span>
          </a>
        </div>
        <div className="resume-document-wrap" ref={pageWrapRef}>
          <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess} loading={<p className="resume-loading">Loading résumé…</p>}>
            <Page pageNumber={pageNumber} width={pageWidth} />
          </Document>
        </div>
      </section>

      <section className="resume-ats" aria-labelledby="ats-heading">
        <div className="resume-ats-heading">
          <h2 id="ats-heading">ATS-ready résumé text</h2>
          <button className="resume-copy-button" type="button" onClick={copyResumeText}>
            {copied ? 'Copied ✓' : 'Copy text'}
          </button>
        </div>
        <p className="resume-ats-note">
          This is the same content as the PDF above — generated from one source so the two never drift. Select all and paste into application forms without losing formatting.
        </p>
        <pre>{RESUME_TEXT}</pre>
      </section>
    </main>
  );
}

export default Resume;
