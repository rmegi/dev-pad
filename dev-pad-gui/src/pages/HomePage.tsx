import { useAtom, useSetAtom } from "jotai";
import { tabsAtom, activeTabIdAtom, addTabAtom } from "../atoms/tabsAtom";

import PageItem from "../components/pageItem/pageItem";
import MainEditor from "../components/mainEditor/mainEditor";

const HomePage = () => {
  const [tabs] = useAtom(tabsAtom);
  const [activeTabId, setActiveTabId] = useAtom(activeTabIdAtom);
  const addTab = useSetAtom(addTabAtom);

  return (
    <div className="flex h-screen bg-slate-950 text-slate-200">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">
        <div className="px-4 py-3 text-lg font-semibold">DevPad</div>

        <div className="mt-4 px-2 flex-1 overflow-auto">
          <div className="flex items-center justify-between mb-2">
            <p className="px-2 text-xs uppercase text-slate-500">Tabs</p>
            <button
              onClick={addTab}
              className="text-slate-400 hover:text-white transition-colors text-xl hover:font-bold"
            >
              +
            </button>
          </div>

          {tabs.map((tab) => (
            <PageItem
              key={tab.id}
              title={tab.title}
              active={tab.id === activeTabId}
              onClick={() => setActiveTabId(tab.id)}
            />
          ))}
        </div>

        <div className="p-3 border-t border-slate-800 text-xs text-slate-500">
          Settings
        </div>
      </aside>

      <MainEditor />
    </div>
  );
};

export default HomePage;
