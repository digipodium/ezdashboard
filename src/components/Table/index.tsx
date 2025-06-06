// src/components/Table/index.tsx
import React, { FC, ReactNode, SyntheticEvent } from 'react';
import clsx from 'clsx';

interface TableRowData extends Record<string, any> {}

interface TableProps {
  data?: TableRowData[];
  headings?: string[];
  uniqueKeyField?: string;
  className?: string;
  alignHeading?: 'left' | 'center' | 'right';
  alignData?: 'left' | 'center' | 'right';
  primaryAction?: (e: SyntheticEvent, uniqueId: string) => void;
  secondaryAction?: (e: SyntheticEvent, uniqueId: string) => void;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryButtonIcon?: ReactNode;
  secondaryButtonIcon?: ReactNode;
  emptyMessage?: string;
  striped?: boolean;
  hoverable?: boolean;
  compact?: boolean;
}

const alignmentClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

const Table: FC<TableProps> = ({
  data = [],
  headings = [],
  uniqueKeyField = 'id',
  className,
  alignHeading = 'left',
  alignData = 'left',
  primaryAction,
  secondaryAction,
  primaryButtonText = 'Edit',
  secondaryButtonText = 'Delete',
  primaryButtonIcon,
  secondaryButtonIcon,
  emptyMessage = 'No data available.',
  striped = true,
  hoverable = true,
  compact = false,
}) => {
  if (!data.length) {
    return (
      <div className={clsx(
        'flex items-center justify-center p-8 text-gray-500 bg-gray-50 dark:bg-gray-800 rounded-lg',
        className
      )}>
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className={clsx('w-full overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700', className)}>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              {headings.map((heading, index) => (
                <th
                  key={index}
                  className={clsx(
                    'px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-400',
                    alignmentClasses[alignHeading],
                    compact ? 'py-2' : 'py-3'
                  )}
                >
                  {heading}
                </th>
              ))}
              {(primaryAction || secondaryAction) && (
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center dark:text-gray-400">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
            {data.map((row, rowIndex) => (
              <tr
                key={String(row[uniqueKeyField]) || rowIndex}
                className={clsx(
                  striped && rowIndex % 2 === 0 && 'bg-gray-50 dark:bg-gray-800/50',
                  hoverable && 'hover:bg-gray-100 dark:hover:bg-gray-800/70 transition-colors duration-150',
                  alignmentClasses[alignData]
                )}
              >
                {headings.map((headingKey, colIndex) => (
                  <td
                    key={`${rowIndex}-${colIndex}`}
                    className={clsx(
                      'px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-200',
                      compact ? 'py-2' : 'py-4'
                    )}
                  >
                    {row[headingKey]}
                  </td>
                ))}
                {(primaryAction || secondaryAction) && (
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2">
                      {primaryAction && (
                        <button
                          onClick={(e) => primaryAction(e, String(row[uniqueKeyField]))}
                          className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-150"
                        >
                          {primaryButtonIcon && <span className="w-4 h-4">{primaryButtonIcon}</span>}
                          {primaryButtonText}
                        </button>
                      )}
                      {secondaryAction && (
                        <button
                          onClick={(e) => secondaryAction(e, String(row[uniqueKeyField]))}
                          className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-150"
                        >
                          {secondaryButtonIcon && <span className="w-4 h-4">{secondaryButtonIcon}</span>}
                          {secondaryButtonText}
                        </button>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;