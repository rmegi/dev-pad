import { useAtomValue } from "jotai";
import MainEditor from "../components/mainEditor/mainEditor";
import TabSection from "../components/tabSection/tabSection";
import ThemeButton from "../components/themeButton/themeButton";
import { themeAtom } from "../atoms/themeAtom";

const HomePage = () => {
  const theme = useAtomValue(themeAtom);

  return (
    <div
      className="theme-root flex h-screen bg-[var(--bg)] text-[var(--text)] transition-colors"
      data-theme={theme}
    >
      {/* Sidebar */}
      <aside className="w-64 bg-[var(--surface)] border-r border-[var(--border)] flex flex-col">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="text-lg font-semibold">DevPad</div>
        </div>

        <TabSection />
        <div className="p-3 border-t border-[var(--border)] text-xs text-[var(--muted-2)] flex items-center justify-between">
          <div>
            Developed by{" "}
            <a href="https://github.com/rmegi" className="underline">
              rmegi
            </a>
          </div>

          <ThemeButton />
        </div>
      </aside>

      <MainEditor />
    </div>
  );
};

export default HomePage;
