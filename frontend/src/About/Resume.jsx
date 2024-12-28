import { useState } from 'react';
import { Document, Page } from 'react-pdf';




export default function Resume(){

    const [numPages, setNumPages] = useState()
    const [pageNumber] = useState(1)
    
  
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages)
      }
      

    return(
        <>
        <div>
      <Document file="somefile.pdf" onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
        </>

    );
}