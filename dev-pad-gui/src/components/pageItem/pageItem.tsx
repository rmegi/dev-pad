import React from "react";

interface PageItemProps {
  title: string;
  active?: boolean;
  onClick?: () => void;
}


const PageItem: React.FC<PageItemProps> = ({ title, active, onClick }) => {
  return (
    <div
      className={`px-3 py-2 rounded-md text-sm cursor-pointer transition
        ${
          active
            ? "bg-slate-800 text-slate-200"
            : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
        }`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default PageItem;
