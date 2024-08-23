import TableRow from './TableRow';

const DataTable = ({ data }) => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-800 text-left">
                        <th className="py-2 px-4 whitespace-nowrap">Sl No.</th>
                        <th className="py-2 px-4 whitespace-nowrap">Links</th>
                        <th className="py-2 px-4 whitespace-nowrap">Prefix</th>
                        <th className="py-2 px-4 whitespace-nowrap">Add Tags</th>
                        <th className="py-2 px-4 whitespace-nowrap w-64">Selected Tags</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <TableRow key={index} data={row} index={index + 1} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;