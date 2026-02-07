import { atom } from "jotai";
import { tabsAtom, activeTabIdAtom } from "./tabsAtom";
import { writeStateToUrl } from "../utils/urlState";

let timer: number | null = null;

export const syncUrlAtom = atom(null, (get) => {
  const tabs = get(tabsAtom);
  const activeTabId = get(activeTabIdAtom);

  if (timer) clearTimeout(timer);
  console.log("SYNC URL ATOM RUNNING", { tabs, activeTabId });

  timer = window.setTimeout(() => {
    writeStateToUrl(tabs, activeTabId);
  }, 250);
});
