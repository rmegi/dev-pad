import {
  compressToEncodedURIComponent,
  decompressFromEncodedURIComponent,
} from "lz-string";
import type { Tab } from "../types/types";

const PARAM = "state";

export const writeStateToUrl = (tabs: Tab[], activeTabId: string) => {
  const data = { tabs, activeTabId };

  const compressed = compressToEncodedURIComponent(JSON.stringify(data));

  const url = new URL(window.location.href);
  url.searchParams.set(PARAM, compressed);

  window.history.replaceState({}, "", url.toString());
};

export const readStateFromUrl = (): {
  tabs: Tab[];
  activeTabId: string;
} | null => {
  const param = new URLSearchParams(window.location.search).get(PARAM);
  if (!param) return null;

  try {
    return JSON.parse(decompressFromEncodedURIComponent(param)!);
  } catch {
    return null;
  }
};
