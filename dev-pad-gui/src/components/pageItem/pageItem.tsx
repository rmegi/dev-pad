import React from "react";
import { MdDelete } from "react-icons/md";
import { useAtom } from "jotai";
import { deleteActiveTabAtom } from "../../atoms/tabsAtom";

interface PageItemProps {
  title: string;
  active?: boolean;
  onClick?: () => void;
}

const PageItem: React.FC<PageItemProps> = ({ title, active, onClick }) => {
  const [, deleteTab] = useAtom(deleteActiveTabAtom);

  return (
    <div
      className={`px-3 py-2 rounded-md text-sm   transition flex justify-between items-center mb-2
        ${
          active
            ? "bg-slate-800 text-slate-200"
            : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
        }`}
      onClick={onClick}
    >
      {title}
      {active && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            deleteTab();
          }}
          className="text-slate-400 hover:text-red-500 hover:text-lg transition-colors"
        >
          <MdDelete />
        </button>
      )}
    </div>
  );
};

export default PageItem;
