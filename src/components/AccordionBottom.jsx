import PropTypes from 'prop-types';
import { useState } from "react";

function AccordionBottom({title, id, children}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleAccordion}
        type="button"
        className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 ${
          isOpen
            ? "hover:bg-gray-100"
            : "bg-gray-100"
        }`}
        aria-expanded={isOpen}
        aria-controls={`collapse${id}`}
      >
        <span>{title}</span>
        <svg
          className={`w-6 h-6 transition-all duration-200 transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div
          id={`collapse${id}`}
          className="p-5 border border-t-0 border-gray-200"
        >
          <div className="mb-2 text-gray-500">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

AccordionBottom.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};


export default AccordionBottom;
