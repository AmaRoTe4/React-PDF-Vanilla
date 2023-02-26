import React from 'react';
import { PDFViewer , PDFDownloadLink } from '@react-pdf/renderer';
import { MyDocument } from './components/MyDocument.jsx';

function App() {
  //elemento de descarga
  {/*<div>
    <PDFDownloadLink 
      document={<MyDocument />} fileName="somename.pdf"
      >
      Bajar
    </PDFDownloadLink>
  </div>*/}
  return (
      <PDFViewer style={{width: "100%" , height: "96vh" , margin:0 , padding: 0}}>
        <MyDocument />
      </PDFViewer>
  )
}

export default App
