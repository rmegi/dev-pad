import React from 'react';
import { FaRegCopy } from "react-icons/fa";

interface CopyButtonProps {
    onClick?: () => void;
}
const CopyButton: React.FC<CopyButtonProps> = ({ onClick }) => {
    
    return (
        <button
          onClick={onClick}
          className="
          text-xs
          text-[var(--muted)]
          opacity-0
          group-hover:opacity-100
          hover:text-[var(--accent)]
          hover:cursor-pointer
            transition
          "
        >
            <FaRegCopy />
        </button>
    );
};

export default CopyButton;
