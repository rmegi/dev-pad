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
        t.id === activeId
          ? { ...t, blocks, updatedAt: Date.now() }
          : t
      )
    );
  }
);
