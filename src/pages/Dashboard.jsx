import DataTable from "@/components/table/DataTable";
import FileUploader from "@/components/upload-csv/FileUploader";
import { useCSVData } from "@/hooks/useCSVData";
import { BellIcon, UserCircle } from "lucide-react";

const Dashboard = () => {
    const { csvData, handleFileUpload } = useCSVData();

    return (
        <div>
            <header className="flex justify-between items-center mb-6 md:px-8">
                <h1 className="md:text-2xl text-xl font-semibold md:font-bold md:ml-0 md:mt-0 ml-16 mt-1">Upload CSV</h1>
                <div className="flex gap-6">
                    <BellIcon className="cursor-pointer" />
                    <UserCircle className="cursor-pointer" />
                </div>
            </header>

            <FileUploader onFileUpload={handleFileUpload} />
            {csvData.length > 0 && (
                <div className="mt-20">
                    <h2 className="text-xl font-semibold mb-4">Uploads</h2>
                    <DataTable data={csvData} />
                </div>
            )}
        </div>
    );
};

export default Dashboard;