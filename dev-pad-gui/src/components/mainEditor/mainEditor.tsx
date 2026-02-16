import { useAtom, useSetAtom } from "jotai";
import {
  activeTabAtom,
  setActiveTabContentAtom,
  setActiveTabTitleAtom,
} from "../../atoms/tabsAtom";

const MainEditor = () => {
  const [activeTab] = useAtom(activeTabAtom);
  const setContent = useSetAtom(setActiveTabContentAtom);
  const setTitle = useSetAtom(setActiveTabTitleAtom);

  if (!activeTab) return null;

  return (
    <main className="flex-1 h-full p-6 overflow-hidden flex flex-col min-h-0">
      {/* Title */}
      <input
        type="text"
        className="bg-transparent text-2xl font-semibold outline-none mb-4 text-[var(--text)] placeholder:text-[var(--muted-2)]"
        value={activeTab.title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Editor */}
      <textarea
        className="
          flex-1
          min-h-0
          h-full
          w-full
          bg-transparent
          text-[var(--text)]
          placeholder:text-[var(--muted-2)]
          outline-none
          resize-none
          font-mono
          text-sm
          leading-relaxed
          overflow-y-auto
        "
        spellCheck={false}
        value={activeTab.content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Start typing..."
      />
    </main>
  );
};

export default MainEditor;
