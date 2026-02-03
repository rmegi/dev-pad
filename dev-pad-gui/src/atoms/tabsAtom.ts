import { atom } from "jotai";
import type { Tab } from "../types/types";
import { mockTabs } from "../utils/mockTabs";

export const tabsAtom = atom<Tab[]>(mockTabs);

export const activeTabIdAtom = atom<string>(mockTabs[0]?.id ?? "");

/* derived atoms */
export const activeTabAtom = atom((get) => {
  const tabs = get(tabsAtom);
  const activeId = get(activeTabIdAtom);
  return tabs.find((t) => t.id === activeId) ?? null;
});

/* actions */
export const addTabAtom = atom(null, (get, set) => {
  const newTab: Tab = {
    id: crypto.randomUUID(),
    title: "New tab",
    content: "",
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
