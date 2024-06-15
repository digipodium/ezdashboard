import React from 'react';


  
interface LinkData {
  text: string;
  url: string;
  
}


interface LinksProps {
  links: LinkData[];


}


const Links: React.FC<LinksProps> = ({ links }) => {
  return (
    <>
      {links.map((link, index) => (
        <div className="flex">
          <a key={index} href={link.url} className="inline-flex items-center gap-x-1 text-sm text-gray-800 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-500">
          <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          {link.text}
        </a>
        </div>
        
      ))}
    </>
  );
};

export default Links;
