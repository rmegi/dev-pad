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

  if (!activeTab) {
    return (
      <main className="flex h-full w-full flex-1 items-center justify-center p-4 md:p-8">
        <div className="glass w-full max-w-xl rounded-[var(--radius-lg)] p-10 text-center">
          <p className="text-lg font-semibold tracking-tight text-[var(--text)]">
            No tab selected
          </p>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Create a new tab from the sidebar to start writing.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex h-full w-full flex-1 p-4 md:p-8">
      <section className="glass flex min-h-0 w-full flex-col rounded-[var(--radius-lg)] p-5 md:p-8">
        <header className="thin-separator mb-4 border-b pb-4 md:mb-6 md:pb-5">
          <p className="text-xs uppercase tracking-[0.14em] text-[var(--muted-2)]">
            Document
          </p>
          <input
            type="text"
            className="focus-ring mt-2 w-full rounded-[var(--radius-sm)] bg-transparent px-2 py-1.5 text-3xl font-semibold tracking-tight text-[var(--text)] outline-none placeholder:text-[var(--muted-2)]"
            value={activeTab.title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Untitled"
            aria-label="Tab title"
          />
        </header>

        <textarea
          className="focus-ring min-h-0 h-full w-full flex-1 resize-none rounded-[var(--radius-md)] bg-[var(--surface-soft)] px-4 py-4 font-[var(--font-mono)] text-[0.95rem] leading-7 text-[var(--text)] outline-none placeholder:text-[var(--muted-2)] transition-colors duration-[var(--duration-fast)] ease-[var(--easing-standard)]"
          spellCheck={false}
          value={activeTab.content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start typing..."
          aria-label="Editor content"
        />
      </section>
    </main>
  );
};

export default MainEditor;
