import React from 'react';


interface StepData {
  icon?: JSX.Element | null;
  title: string;
  subtitle?: string | null;
  content: JSX.Element;
}

interface StepperProps {
  steps: StepData[];
}

const Stepper: React.FC<StepperProps> = ({ steps }) => {


  return (
    <ul className="relative flex flex-row gap-x-2">

      {steps.map((step, index) => (
        <li key={index} className="flex items-center gap-x-2 shrink basis-0 flex-1 group">
          <div className="min-w-7 min-h-7 inline-flex justify-center items-center text-xs align-middle">
            <span className="size-7 flex justify-center items-center flex-shrink-0 bg-gray-800 font-medium text-white rounded-full dark:bg-white dark:text-gray-800">
              {step.icon ?? index + 1}
            </span>
            <div className="ms-2 stext-sm dark:text-white">
              <h4 className='text-md text-gray-800'>{step.title}</h4>
              <p className='text-md text-gray-500'>{step.subtitle}</p>


            </div>

          </div>
          <div className="w-full h-px flex-1 bg-gray-200 group-last:hidden dark:bg-gray-700">
            
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Stepper;