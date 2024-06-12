import React from "react";

interface ShimmerButtonProps {
  title: string;
  icon?: React.ReactNode;
  position: string;
  handleClick?: () => void;
}

const ShimmerButton = ({
  title,
  position,
  icon,
  handleClick,
}: ShimmerButtonProps) => {
  return (
    <button
      className="md:inline-block items-center lg:inline-block xs-devices:px-2 px-6 py-2 bg-transparent border text-blue-100 border-white  rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
      onClick={handleClick}
    >
      <span className="block md:hidden">{position === "left" && icon}</span>
      <span className="hidden md:block">{title}</span>
      <span className="block md:hidden">{position === "right" && icon}</span>
    </button>
  );
};

export default ShimmerButton;
