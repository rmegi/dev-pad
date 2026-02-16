import React from "react";
import TabItem from "./tabItem";
import { useAtom, useSetAtom } from "jotai";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  activeTabIdAtom,
  addTabAtom,
  tabsAtom,
  reorderTabsAtom,
} from "../../atoms/tabsAtom";

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
    <div className="mt-4 px-2 flex-1 flex flex-col min-h-0">
      <div className="flex items-center justify-between mb-2 flex-shrink-0">
        <p className="px-2 text-xs uppercase text-slate-500">Tabs</p>
        <button
          onClick={addTab}
          className="text-slate-400 hover:text-white transition-colors text-xl hover:font-bold"
        >
          +
        </button>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden relative min-h-0">
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
