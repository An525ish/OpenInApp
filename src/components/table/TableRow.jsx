import { useTagSelection } from '@/hooks/useTagSelection';

const TableRow = ({ data, index }) => {
    const { selectedTags, allTags, handleTagSelect } = useTagSelection(data);

    return (
        <tr className="border-b border-gray-700">
            <td className="py-2 px-4 whitespace-nowrap">{index}</td>
            <td className="py-2 px-4 whitespace-nowrap">
                <a href={data.links} className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                    {data.links}
                </a>
            </td>
            <td className="py-2 px-4 whitespace-nowrap">{data.prefix}</td>
            <td className="py-2 px-4 whitespace-nowrap">
                <select
                    className="bg-black-alt text-white p-2 rounded-md"
                    onChange={(e) => handleTagSelect(e.target.value)}
                    value=""
                >
                    <option value="">Select Tags</option>
                    {allTags.map(tag => (
                        <option key={tag} value={tag}>{tag}</option>
                    ))}
                </select>
            </td>
            <td className="py-2 px-4 w-64">
                <div className="flex w-64 overflow-x-auto scrollbar-hide">
                    {selectedTags.map(tag => (
                        <span
                            key={tag}
                            className="inline-block bg-primary text-white rounded px-2 py-1 text-sm mr-2 mb-2 cursor-pointer whitespace-nowrap"
                            onClick={() => handleTagSelect(tag)}
                        >
                            {tag}
                            <span className='ml-3'>
                                ✕
                            </span>
                        </span>
                    ))}
                </div>
            </td>
        </tr>
    );
};

export default TableRow;