import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import type { Tab } from "../types/types";
import { mockTabs } from "../utils/mockTabs";

/* persisted atoms */
export const tabsAtom = atomWithStorage<Tab[]>("devpad.tabs", mockTabs);

export const activeTabIdAtom = atomWithStorage<string>(
  "devpad.activeTabId",
  mockTabs[0]?.id ?? "",
);

/* derived */
export const activeTabAtom = atom((get) => {
  const tabs = get(tabsAtom);
  const id = get(activeTabIdAtom);
  return tabs.find((t) => t.id === id) ?? null;
});

/* actions */
export const addTabAtom = atom(null, (get, set) => {
  const newTab: Tab = {
    id: crypto.randomUUID(),
    title: "New tab",
    content: "",
    lastUpdate: Date.now(),
  };

  const updatedTabs = [...get(tabsAtom), newTab];
  set(tabsAtom, updatedTabs);
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

export const setActiveTabContentAtom = atom(
  null,
  (get, set, content: string) => {
    const id = get(activeTabIdAtom);

    set(
      tabsAtom,
      get(tabsAtom).map((t) =>
        t.id === id ? { ...t, content, lastUpdate: Date.now() } : t,
      ),
    );
  },
);

export const deleteActiveTabAtom = atom(null, (get, set) => {
  const tabs = get(tabsAtom);
  const activeId = get(activeTabIdAtom);

  if (tabs.length === 0) return;

  const index = tabs.findIndex((t) => t.id === activeId);
  const newTabs = tabs.filter((t) => t.id !== activeId);

  set(tabsAtom, newTabs);

  if (newTabs.length === 0) {
    set(activeTabIdAtom, "");
  } else {
    const nextTab = newTabs[index - 1] ?? newTabs[0];
    set(activeTabIdAtom, nextTab.id);
  }
});
