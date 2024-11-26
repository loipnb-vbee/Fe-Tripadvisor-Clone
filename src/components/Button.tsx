import React from 'react';

type ButtonProps = {
  variant?: string;
  text: string;
  type: string;
  onClick?: () => void;
  className?: string;
};

const buttonType = {
  TEXT: 'text',
  CONTAINED: 'contained',
  OUTLINED: 'outlined',
};

const CustomButton: React.FC<ButtonProps> = ({
  type = buttonType.TEXT,
  text,
  onClick,
  className,
}) => {
  // let buttonClass = 'rounded-[20px] py-[10px] px-4 font-bold text-base';
  let buttonClass = '';

  const handleClick = () => {
    if (onClick) onClick();
  };

  switch (type) {
    case buttonType.TEXT:
      buttonClass +=
        'hover:bg-primaryButtonText-hover bg-clip-padding inline-block relative transition-colors duration-100 ease-linear appearance-none border-none box-border cursor-pointer text-center no-underline rounded-[20px] px-4 py-[10px]';
      break;
    case buttonType.CONTAINED:
      buttonClass += ' bg-yellow-500 text-white hover:bg-slate-700';
      break;
    case buttonType.OUTLINED:
      buttonClass +=
        ' bg-white border border-black text-black hover:bg-slate-300';
      break;
    default:
      break;
  }

  return (
    <button className={`${buttonClass} ${className}`} onClick={handleClick}>
      <span className="font-bold text-base">{text}</span>
    </button>
  );
};

export default CustomButton;
