import { useCSVData } from "@/hooks/useCSVData";
import FileUploader from "./FileUploader";
import DataTable from "../table/DataTable";
import { BellIcon, UserCircle } from "lucide-react";

const UploadCSV = () => {
    const { csvData, handleFileUpload } = useCSVData();

    return (
        <div>
            <header className="flex justify-between">
                <h1 className="text-2xl font-bold mb-6">Upload CSV</h1>

                <div className="flex gap-4">
                    <BellIcon className="cursor-pointer" />
                    <UserCircle className="cursor-pointer" />
                </div>
            </header>

            <FileUploader onFileUpload={handleFileUpload} />
            {csvData.length > 0 && (
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Uploads</h2>
                    <DataTable data={csvData} />
                </div>
            )}
        </div>
    );
};

export default UploadCSV;