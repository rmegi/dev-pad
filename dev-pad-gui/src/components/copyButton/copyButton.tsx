import React from "react";
import { FaRegCopy } from "react-icons/fa";

interface CopyButtonProps {
  onClick?: () => void;
}

const CopyButton: React.FC<CopyButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="focus-ring inline-flex h-7 w-7 items-center justify-center rounded-full text-xs text-[var(--muted)] opacity-0 transition-all duration-[var(--duration-fast)] ease-[var(--easing-standard)] group-hover:opacity-100 hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
      aria-label="Copy code"
    >
      <FaRegCopy />
    </button>
  );
};

export default CopyButton;
