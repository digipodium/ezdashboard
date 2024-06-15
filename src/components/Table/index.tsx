import React from 'react';
import{ alignmentClasses } from '../../themes/themes';

interface TableProps {
  data: Object[];
  alignHeading?: 'left' | 'center' | 'right';
  alignData?: 'left' | 'center' | 'right';
}

const Table: React.FC<TableProps> = ({ data, alignHeading='left', alignData="left" }) => {

  const extractHeadings = (data: Object[]) => {
    return Object.keys(data[0]);
  }


  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className={`bg-gray-50 dark:bg-gray-800 ${alignmentClasses[alignHeading]}`}>
                <tr>
                  {extractHeadings(data).map((heading, index) => (
                    <th key={index} className="px-6 py-3 text-xs font-medium text-gray-800 dark:text-gray-200 uppercase tracking-wider">{heading}</th>
                  ))}
                  <th className="px-6 py-3 text-xs font-medium text-right text-gray-800 dark:text-gray-200 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {data.map((row, index) => (
                  <tr key={index} className={`bg-white dark:bg-gray-800 ${alignmentClasses[alignData]}`}>
                    {Object.values(row).map((value, index) => (
                      <td key={index} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">{value}</td>
                    ))}
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                      <a href="#" className="text-red-600 hover:text-red-900">Delete</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;