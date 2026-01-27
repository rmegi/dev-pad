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
          text-slate-400
          opacity-0
          group-hover:opacity-100
          hover:text-purple-400
          hover:cursor-pointer
            transition
          "
        >
            <FaRegCopy />
        </button>
    );
};

export default CopyButton;