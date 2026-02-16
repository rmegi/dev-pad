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
    <main className="flex-1 p-6 overflow-hidden flex flex-col">
      {/* Title */}
      <input
        className="bg-transparent text-2xl font-semibold outline-none mb-4 text-[var(--text)] placeholder:text-[var(--muted-2)]"
        value={activeTab.title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {/* Editor */}
      <textarea
        className="
          flex-1
          w-full
          bg-transparent
          text-[var(--text)]
          placeholder:text-[var(--muted-2)]
          outline-none
          resize-none
          font-mono
          text-sm
          leading-relaxed
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
