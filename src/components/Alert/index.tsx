import React from 'react';


interface AlertProps {
  title: string;
  description: string;
}

const Alert: React.FC<AlertProps> = ({ title, description }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 dark:bg-gray-800 dark:border-gray-700" role="alert">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className="flex-shrink-0 w-4 h-4 text-blue-600 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
        </div>
        <div className="ms-3">
          <h3 className="text-gray-800 font-semibold dark:text-white">
            {title}
          </h3>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Alert;