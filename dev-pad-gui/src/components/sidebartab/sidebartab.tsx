import React from "react";

interface SidebarTabProps {
  label: string;
  active?: boolean;
}

const SidebarTab: React.FC<SidebarTabProps> = ({ label, active }) => {
  return (
    <button
      className={`w-full text-left px-3 py-2 rounded-md text-sm transition
        ${
          active
            ? "bg-slate-800 text-purple-400"
            : "text-slate-400 hover:bg-slate-800 hover:text-slate-200"
        }`}
    >
      {label}
    </button>
  );
};

export default SidebarTab;
