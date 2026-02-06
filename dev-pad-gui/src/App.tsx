import { Route, Routes } from "react-router";
import { useEffect } from "react";
import { useSetAtom } from "jotai";

import HomePage from "./pages/HomePage";
import { tabsAtom, activeTabIdAtom } from "./atoms/tabsAtom";
import { readStateFromUrl } from "./utils/urlState";

function App() {
  const setTabs = useSetAtom(tabsAtom);
  const setActiveTabId = useSetAtom(activeTabIdAtom);

  useEffect(() => {
    const urlState = readStateFromUrl();
    if (!urlState) return;

    setTabs(urlState.tabs);
    setActiveTabId(urlState.activeTabId);
  }, [setTabs, setActiveTabId]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
