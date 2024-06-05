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
    // <button
    //   className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
    //   onClick={handleClick}
    // >
    //   <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    //   <span
    //     className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
    //        bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
    //   >
    //     {position === "left" && icon}
    //     {title}
    //     {position === "right" && icon}
    //   </span>
    // </button>
    <button className="p-[3px] relative" onClick={handleClick}>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className="px-8 py-2 flex items-center gap-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </div>
    </button>
  );
};

export default MagicButton;
