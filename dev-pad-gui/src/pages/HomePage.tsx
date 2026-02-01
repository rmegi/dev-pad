import { useAtom, useSetAtom } from "jotai";
import {
  tabsAtom,
  activeTabIdAtom,
  activeTabAtom,
  activeBlocksAtom,
  addTabAtom,
  setActiveTabTitleAtom,
} from "../atoms/tabsAtom";

import CodeBlock from "../components/codeBlock/codeBlock";
import PageItem from "../components/pageItem/pageItem";

const HomePage = () => {
  const [tabs] = useAtom(tabsAtom);
  const [activeTabId, setActiveTabId] = useAtom(activeTabIdAtom);
  const [activeTab] = useAtom(activeTabAtom);
  const [blocks] = useAtom(activeBlocksAtom);
  const addTab = useSetAtom(addTabAtom);
  const setTitle = useSetAtom(setActiveTabTitleAtom);

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

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <input
          className="w-full bg-transparent text-2xl font-semibold outline-none mb-6"
          value={activeTab?.title ?? ""}
          onChange={(e) => setTitle(e.target.value)}
        />

        {blocks.map((block) => {
          if (block.type === "text") {
            return (
              <div key={block.id} className="mb-6 text-slate-400">
                {block.content}
              </div>
            );
          }

          if (block.type === "code") {
            return (
              <CodeBlock
                key={block.id}
                language={block.language}
                code={block.content}
              />
            );
          }

          return null;
        })}
      </main>
    </div>
  );
};

export default HomePage;
