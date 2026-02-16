import React from "react";
import { MdDelete } from "react-icons/md";
import { useAtom } from "jotai";
import { deleteActiveTabAtom } from "../../atoms/tabsAtom";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface TabItemProps {
  id: string;
  title: string;
  active?: boolean;
  onClick?: () => void;
}

const TabItem: React.FC<TabItemProps> = ({ id, title, active, onClick }) => {
  const [, deleteTab] = useAtom(deleteActiveTabAtom);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`px-3 py-2 rounded-md text-sm transition flex justify-between items-center mb-2 cursor-grab active:cursor-grabbing
        ${
          active
            ? "bg-[var(--tab-active)] text-[var(--text)]"
            : "text-[var(--muted)] hover:bg-[var(--tab-hover)] hover:text-[var(--text)]"
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
          className="text-[var(--muted)] hover:text-[var(--danger)] hover:text-lg transition-colors"
        >
          <MdDelete />
        </button>
      )}
    </div>
  );
};

export default TabItem;
