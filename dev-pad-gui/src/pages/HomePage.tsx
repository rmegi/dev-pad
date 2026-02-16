import { useAtomValue } from "jotai";
import { useState } from "react";

import MainEditor from "../components/mainEditor/mainEditor";
import TabSection from "../components/tabSection/tabSection";
import ThemeButton from "../components/themeButton/themeButton";
import { themeAtom } from "../atoms/themeAtom";

import { FiMenu, FiX } from "react-icons/fi";

const HomePage = () => {
  const theme = useAtomValue(themeAtom);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div
      className="theme-root flex h-screen bg-[var(--bg)] text-[var(--text)] transition-colors"
      data-theme={theme}
    >
      <div className="md:hidden fixed top-0 left-0 right-0 h-14 bg-[var(--surface)] border-b border-[var(--border)] flex items-center justify-between px-4 z-50">
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-xl text-[var(--text)]"
        >
          <FiMenu />
        </button>
        <img src="/devPadLogo.svg" alt="DevPad Logo" className="h-6 w-6" />
      </div>

      <aside className="hidden md:flex w-64 bg-[var(--surface)] border-r border-[var(--border)] flex-col">
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

      {sidebarOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setSidebarOpen(false)}
          />

          <aside className="relative w-72 max-w-[85%] h-full bg-[var(--surface)] border-r border-[var(--border)] flex flex-col">
            <div className="px-4 py-3 flex items-center justify-between border-b border-[var(--border)]">
              <div className="text-lg font-semibold">DevPad</div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-xl text-[var(--text)]"
              >
                <FiX />
              </button>
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
        </div>
      )}

      <main className="flex-1 w-full pt-14 md:pt-0">
        <MainEditor />
      </main>
    </div>
  );
};

export default HomePage;
