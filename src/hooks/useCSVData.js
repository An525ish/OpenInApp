import { useState, useCallback } from 'react';
import Papa from 'papaparse';

export const useCSVData = () => {
  const [csvData, setCsvData] = useState([]);

  const handleFileUpload = useCallback((file) => {
    return new Promise((resolve, reject) => {
      Papa.parse(file, {
        complete: (result) => {
          setCsvData(result.data.slice(1));
          resolve();
        },
        error: reject,
        header: true,
      });
    });
  }, []);

  return { csvData, handleFileUpload };
};
