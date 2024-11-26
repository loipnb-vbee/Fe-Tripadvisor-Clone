import { useEffect, useRef, useState } from 'react';

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
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownRef]);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Button to open dropdown */}
      <button
        onClick={handleToggleDropDown}
        className="hover:bg-primaryButtonText-hover bg-clip-padding inline-block relative transition-colors duration-100 ease-linear appearance-none border-none box-border cursor-pointer text-center no-underline rounded-[20px] px-4 py-[10px]"
      >
        <span className="font-bold text-base">{text}</span>
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
