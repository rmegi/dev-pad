import React from "react";
import TabItem from "./tabItem";
import { useAtom, useSetAtom } from "jotai";
import {
  DndContext,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToParentElement, restrictToVerticalAxis } from "@dnd-kit/modifiers";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  activeTabIdAtom,
  addTabAtom,
  reorderTabsAtom,
  tabsAtom,
} from "../../atoms/tabsAtom";
import { FiPlus } from "react-icons/fi";

const TabSection: React.FC = () => {
  const [tabs] = useAtom(tabsAtom);
  const [activeTabId, setActiveTabId] = useAtom(activeTabIdAtom);
  const addTab = useSetAtom(addTabAtom);
  const reorderTabs = useSetAtom(reorderTabsAtom);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    const oldIndex = tabs.findIndex((t) => t.id === active.id);
    const newIndex = tabs.findIndex((t) => t.id === over.id);

    reorderTabs(arrayMove(tabs, oldIndex, newIndex));
  };

  return (
    <div className="mt-2 flex min-h-0 flex-1 flex-col px-3 pb-2">
      <div className="mb-2 flex shrink-0 items-center justify-between px-2">
        <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted-2)]">Tabs</p>
        <button
          onClick={addTab}
          className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-soft)] px-3 py-1.5 text-xs font-semibold text-[var(--accent)] transition-all duration-[var(--duration-fast)] ease-[var(--easing-standard)] hover:brightness-110"
          aria-label="Add tab"
        >
          <FiPlus className="text-sm" />
          New
        </button>
      </div>

      <div className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/20 flex-1 overflow-y-auto overflow-x-hidden pr-1">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
          modifiers={[restrictToVerticalAxis, restrictToParentElement]}
        >
          <SortableContext
            items={tabs.map((t) => t.id)}
            strategy={verticalListSortingStrategy}
          >
            {tabs.map((tab) => (
              <TabItem
                key={tab.id}
                id={tab.id}
                title={tab.title}
                active={tab.id === activeTabId}
                onClick={() => setActiveTabId(tab.id)}
              />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default TabSection;
