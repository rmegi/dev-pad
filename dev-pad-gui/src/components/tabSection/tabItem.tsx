import React from "react";
import { MdDelete } from "react-icons/md";
import { useAtom } from "jotai";
import { deleteActiveTabAtom } from "../../atoms/tabsAtom";
import { FiFileText } from "react-icons/fi";

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
      tabIndex={0}
      role="button"
      aria-pressed={active}
      className={`focus-ring mb-2 flex cursor-grab items-center justify-between rounded-[var(--radius-sm)] border px-3 py-2.5 text-sm transition-all duration-[var(--duration-fast)] ease-[var(--easing-standard)] active:cursor-grabbing
        ${
          active
            ? "border-[var(--border)] bg-[var(--tab-active)] text-[var(--text)] shadow-[var(--shadow-1)]"
            : "border-transparent bg-transparent text-[var(--muted)] hover:border-[var(--border)] hover:bg-[var(--tab-hover)] hover:text-[var(--text)]"
        }`}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <div className="flex min-w-0 items-center gap-2.5">
        <FiFileText className="shrink-0 text-sm opacity-80" />
        <span className="truncate">{title}</span>
      </div>

      {active && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            deleteTab();
          }}
          className="focus-ring inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[var(--muted)] transition-colors duration-[var(--duration-fast)] hover:bg-[color-mix(in_oklab,var(--danger),transparent_84%)] hover:text-[var(--danger)]"
          aria-label="Delete active tab"
        >
          <MdDelete />
        </button>
      )}
    </div>
  );
};

export default TabItem;
