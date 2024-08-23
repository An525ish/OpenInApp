import { useMemo, useState } from 'react';
import TableRow from './TableRow';

const DataTable = ({ data }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState('asc');
    const itemsPerPage = 10;

    const sortedData = useMemo(() => {
        if (!sortColumn) return data;
        return [...data].sort((a, b) => {
            if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
            if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
            return 0;
        });
    }, [data, sortColumn, sortDirection]);

    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        return sortedData.slice(startIndex, startIndex + itemsPerPage);
    }, [sortedData, currentPage]);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handleSort = (column) => {
        if (sortColumn === column) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortColumn(column);
            setSortDirection('asc');
        }
    };

    const renderSortIcon = (column) => {
        if (sortColumn !== column) return null;
        return sortDirection === 'asc' ? ' ▲' : ' ▼';
    };

    return (
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-800 text-left">
                        <th className="py-2 px-4 whitespace-nowrap cursor-pointer" onClick={() => handleSort('index')}>
                            Sl No.{renderSortIcon('index')}
                        </th>
                        <th className="py-2 px-4 whitespace-nowrap cursor-pointer" onClick={() => handleSort('links')}>
                            Links{renderSortIcon('links')}
                        </th>
                        <th className="py-2 px-4 whitespace-nowrap cursor-pointer" onClick={() => handleSort('prefix')}>
                            Prefix{renderSortIcon('prefix')}
                        </th>
                        <th className="py-2 px-4 whitespace-nowrap">Add Tags</th>
                        <th className="py-2 px-4 whitespace-nowrap w-64">Selected Tags</th>
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.map((row, index) => (
                        <TableRow key={index} data={row} index={(currentPage - 1) * itemsPerPage + index + 1} />
                    ))}
                </tbody>
            </table>
            <div className="mt-4 flex justify-between items-center">
                <div>
                    Page {currentPage} of {totalPages}
                </div>
                <div>
                    <button
                        className="px-4 py-2 bg-gray-800 text-white rounded mr-2"
                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <button
                        className="px-4 py-2 bg-gray-800 text-white rounded"
                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DataTable;