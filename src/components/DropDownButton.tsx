import { useState } from "react";

type DropDownButtonProps = {
  text: string;
  // type: string;
};

type DropDownItemProps = {
  text: string;
  // type: string;
  onClick?: () => void;
};

const dropDownButtonType = {
  TEXT: "text",
};

const DropdownItem: React.FC<DropDownItemProps> = ({ text }) => {
  return (
    <a
      href="#"
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    >
      {text}
    </a>
  );
};

const DropdownButton: React.FC<DropDownButtonProps> = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the dropdown
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left" onBlur={toggleDropdown}>
      {/* Button to open dropdown */}
      <button
        onClick={toggleDropdown}
        className="rounded-[20px] py-[10px] px-4 font-bold text-base bg-transparent hover:bg-gray-100"
      >
        {text}
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <DropdownItem text="Option1" />
            <DropdownItem text="Option2" />
            <DropdownItem text="Option1" />
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
