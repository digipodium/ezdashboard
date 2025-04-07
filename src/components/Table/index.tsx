import React, { BaseSyntheticEvent } from 'react';
import { alignmentClasses } from '../../themes/themes';
import {
  IconTrash,
  IconPencil,
} from '@tabler/icons-react';
import clsx from 'clsx';

interface TableProps {
  data: Array<Record<string, string | number | boolean>>;
  className?: string;
  alignHeading?: 'left' | 'center' | 'right';
  alignData?: 'left' | 'center' | 'right';
  primaryAction?: (e: BaseSyntheticEvent, v: string) => void;
  secondaryAction?: (e: BaseSyntheticEvent, v: string) => void;
  primaryButtonIcon?: React.ReactNode;
  secondaryButtonIcon?: React.ReactNode;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  key?: string;
}

const Table: React.FC<TableProps> = ({
  data,
  className,
  key = "_id",
  primaryAction = (e: BaseSyntheticEvent, v: string) => { },
  secondaryAction = (e: BaseSyntheticEvent, v: string) => { },
  primaryButtonIcon = <IconTrash size={20} />,
  secondaryButtonIcon = <IconPencil size={20} />,
  primaryButtonText = "",
  secondaryButtonText = "",
  alignHeading = 'left',
  alignData = "left" }) => {

  const extractHeadings = (data: { [key: string]: any }[]) => {
    return Object.keys(data[0]);
  }

  return (
    <div className={clsx('flex flex-col', className)}>
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg shadow overflow-hidden dark:border-gray-700 dark:shadow-gray-900">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className={`bg-gray-50 dark:bg-gray-800 ${alignmentClasses[alignHeading]}`}>
                <tr>
                  {extractHeadings(data).map((heading, index) => (
                    <th key={index} className="px-6 py-3 text-xs font-medium text-gray-800 dark:text-gray-200 uppercase tracking-wider">{heading}</th>
                  ))}
                  <th className="w-5 px-6 py-3 text-xs font-medium text-gray-800 dark:text-gray-200 uppercase tracking-wider text-center">Actions</th>
                </tr>
              </thead>
              <tbody className={`divide-y divide-gray-200 dark:divide-gray-700 ${alignmentClasses[alignData]}`}>
                {data.map((row: Record<string, string | number | boolean>, index) => (
                  <tr key={index} className={`bg-white dark:bg-gray-800 ${alignmentClasses[alignData]}`}>
                    {Object.values(row).map((value, index) => (
                      <td key={index} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200">{value}</td>
                    ))}
                    <td className="flex gap-2 px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={(e: BaseSyntheticEvent) => primaryAction(e, String(row[key]))}
                        className="flex items-center gap-3 bg-red-500 text-white rounded-full py-1.5 px-3 hover:bg-red-700">
                        {primaryButtonIcon}
                        {primaryButtonText}
                      </button>
                      <button
                        onClick={(e: BaseSyntheticEvent) => secondaryAction(e, String(row[key]))}
                        className="flex items-center gap-3 bg-blue-500 text-white rounded-full py-1.5 px-3 hover:bg-blue-700">
                        {secondaryButtonIcon}
                        {secondaryButtonText}
                      </button>
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