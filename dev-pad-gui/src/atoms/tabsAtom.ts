import { atom } from "jotai";
import type { Block, Tab } from "../types/types";
import { mockTabs } from "../utils/mockTabs";

export const tabsAtom = atom<Tab[]>(mockTabs);

export const activeTabIdAtom = atom<string>(mockTabs[0].id);

/* derived atoms */

export const activeTabAtom = atom((get) => {
  const tabs = get(tabsAtom);
  const activeId = get(activeTabIdAtom);

  return tabs.find((t) => t.id === activeId) ?? null;
});

export const activeBlocksAtom = atom((get) => {
  return get(activeTabAtom)?.blocks ?? [];
});

/* write atom */

export const updateActiveBlocksAtom = atom(
  null,
  (get, set, blocks: Block[]) => {
    const activeId = get(activeTabIdAtom);

    set(
      tabsAtom,
      get(tabsAtom).map((t) =>
        t.id === activeId ? { ...t, blocks, lastUpdate: Date.now() } : t,
      ),
    );
  },
);

export const addBlockToActiveTabAtom = atom(
  null,
  (get, set, newBlock: Block) => {
    const activeId = get(activeTabIdAtom);

    set(
      tabsAtom,
      get(tabsAtom).map((tab) =>
        tab.id === activeId
          ? {
              ...tab,
              blocks: [...tab.blocks, newBlock],
              updatedAt: Date.now(),
            }
          : tab,
      ),
    );
  },
);

export const addTabAtom = atom(null, (get, set) => {
  const newTab: Tab = {
    id: crypto.randomUUID(),
    title: "New tab",
    blocks: [],
    lastUpdate: Date.now(),
  };

  set(tabsAtom, [...get(tabsAtom), newTab]);
  set(activeTabIdAtom, newTab.id);
});

export const setActiveTabTitleAtom = atom(null, (get, set, title: string) => {
  const id = get(activeTabIdAtom);

  set(
    tabsAtom,
    get(tabsAtom).map((t) =>
      t.id === id ? { ...t, title, lastUpdate: Date.now() } : t,
    ),
  );
});
