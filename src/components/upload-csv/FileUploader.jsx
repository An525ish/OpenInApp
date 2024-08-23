import excelSheet from '@/assets/excel-sheet.svg';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUploader = ({ onFileUpload }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const onDrop = useCallback((acceptedFiles) => {
        setSelectedFile(acceptedFiles[0]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const handleUpload = async () => {
        if (selectedFile) {
            setIsLoading(true);
            await onFileUpload(selectedFile);
            setIsLoading(false);
            setSelectedFile(null)
        }
    };

    const handleRemove = () => {
        setSelectedFile(null);
    };

    return (
        <div className='w-3/5 mx-auto shadow bg-background-alt p-4 rounded-lg'>
            {!selectedFile ? (
                <div {...getRootProps()} className="border-2 border-dashed border-grey-dark p-4 md:p-8 mb-4 md:mb-6 text-center cursor-pointer">
                    <input {...getInputProps()} />
                    {isDragActive ? (
                        <p>Drop the Excel sheet here...</p>
                    ) : (
                        <div>
                            <img src={excelSheet} alt="" className='w-24 h-24 mx-auto' />
                            <p className="mt-2 text-sm md:text-base">Drop your Excel sheet here or <span className="text-primary font-semibold">browse</span></p>
                        </div>
                    )}
                </div>
            ) : (
                <div className="border-2 border-grey-dark rounded-lg p-4 md:p-8 mb-4 md:mb-6 text-center">
                    <img src={excelSheet} alt="" className='w-24 h-24 mx-auto' />
                    <p className="mt-2 text-sm md:text-base">{selectedFile.name}</p>
                    <button
                        onClick={handleRemove}
                        className="mt-2 text-red hover:text-red/60 text-sm"
                    >
                        Remove
                    </button>
                </div>
            )}
            <button
                className="w-full bg-primary hover:bg-primary/70 cursor-pointer transition text-white font-bold py-2 px-4 rounded flex items-center justify-center"
                onClick={handleUpload}
                disabled={!selectedFile || isLoading}
            >
                {isLoading ? (
                    <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Uploading...
                    </>
                ) : (
                    'Upload'
                )}
            </button>
        </div>
    );
};

export default FileUploader;