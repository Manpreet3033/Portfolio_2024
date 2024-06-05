import React from "react";

interface MagicButtonProps {
  title?: string;
  icon?: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: MagicButtonProps) => {
  /* Magic Button */
  return (
    <button
      className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none w-full md:w-60 md:mt-10"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        <span className="block">{title}</span>
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
