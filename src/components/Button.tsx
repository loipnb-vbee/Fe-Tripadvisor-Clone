import React from "react";

type ButtonProps = {
  variant?: string;
  text: string;
  type: string;
  onClick?: () => void;
};

const buttonType = {
  TEXT: "text",
  CONTAINED: "contained",
  OUTLINED: "outlined",
};

const CustomButton: React.FC<ButtonProps> = ({
  type = buttonType.TEXT,
  text,
  onClick,
}) => {
  let buttonClass = "rounded-[20px] py-[10px] px-4 font-bold text-base";

  switch (type) {
    case buttonType.TEXT:
      buttonClass += " bg-transparent hover:bg-gray-100";
      break;
    case buttonType.CONTAINED:
      buttonClass += " bg-red-500 text-white hover:bg-slate-700";
      break;
    case buttonType.OUTLINED:
      buttonClass += " border border-red-500 text-red-500 hover:bg-slate-700";
      break;
    default:
      break;
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
