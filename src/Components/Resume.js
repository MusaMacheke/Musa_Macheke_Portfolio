import React, { useState, useEffect } from 'react';
import { BsDownload } from "react-icons/bs";
import { Document, Page, pdfjs } from 'react-pdf'; // Import from react-pdf
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

// Import your local PDF file
import pdf from "../Resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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

  return (
    <div className='ResumePage'>
      <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} scale={width < 700 ? (width > 475 ? 0.7 : 0.5) : 1}/>
      </Document>

      <div className="controls">
        <button onClick={prevPage} disabled={pageNumber <= 1}>Previous</button>
        <span>Page {pageNumber} of {numPages}</span>
        <button onClick={nextPage} disabled={pageNumber >= numPages}>Next</button>
      </div>

      <a href={pdf} target='_blank' rel="noreferrer" download="Musa Macheke's Resume.pdf">
        <button className='downloadCV' type='button'>
          <h3><BsDownload/>&nbsp; Download CV</h3>
        </button>
      </a>
    </div>
  );
}

export default Resume;
