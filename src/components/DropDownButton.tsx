import { useEffect, useRef, useState } from "react";

type DropDownButtonProps = {
  text: string;
  items: { id: string; onClick?: () => void; description: string }[];
};

type DropDownItemProps = {
  text: string;
  onClick?: () => void;
};

const DropdownItem: React.FC<DropDownItemProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="block px-4 py-2 text-base text-black hover:bg-gray-100 w-full text-left font-bold"
    >
      {text}
    </button>
  );
};

const DropdownButton: React.FC<DropDownButtonProps> = ({ text, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleToggleDropDown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      )
        setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Button to open dropdown */}
      <button
        onClick={handleToggleDropDown}
        className="rounded-[20px] py-[10px] px-4 font-bold text-base bg-transparent hover:bg-gray-100"
      >
        {text}
      </button>
      {/* Dropdown menu */}
      {isOpen && (
        <div className="origin-top-right absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-1">
            {items.map((item) => (
              <DropdownItem
                key={item.id}
                text={item.description}
                onClick={item.onClick}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
