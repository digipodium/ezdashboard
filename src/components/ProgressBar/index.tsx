import React from 'react';
import { cssColors, tailwindThemeClasses,  } from '../../themes/themes';

interface ProgressBarProps {
  label: string;
  value: number;
  radius?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'| undefined;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'dark' | 'light'| undefined;
  size?:  'xs' | 'sm' | 'md' | 'lg' | 'xl'| undefined;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ label="Unknown", value=0, radius='md', color='primary', size='md' }) => {
  const tooltipText =`${label}: ${value}%`;
  const progressValue = Math.min(value, 100);

  return (
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div style={{backgroundColor:cssColors.colors[color]}} className={` ${tailwindThemeClasses.radius[radius ]}`} >
          <span className ="text-xs font-semibold inline-block py-1 px-2 uppercase text-white dark:text-gray-800 ">
            {tooltipText}
          </span>
        </div>
        <div style={{ color:cssColors.colors[color]}} className="text-right">
          <span className="text-xs font-semibold inline-block">
            {progressValue}%
          </span>
        </div>
      </div>
      <div style={{ width: `${progressValue}%`, backgroundColor: cssColors.colors[color] }} className={`overflow-hidden h-2 mb-4 text-xs flex dark:bg-blue-500 ${tailwindThemeClasses.radius[radius]}  ${tailwindThemeClasses.sizes[size]}`}>
        <div className={`shadow-none w-full flex flex-col text-center whitespace-nowrap text-white justify-center `}></div>
      </div>
    </div>
  );
};



export default ProgressBar;