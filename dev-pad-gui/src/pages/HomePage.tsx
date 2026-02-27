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
      className="theme-root relative flex h-screen overflow-hidden text-[var(--text)] transition-colors duration-[var(--duration-base)] ease-[var(--easing-standard)]"
      data-theme={theme}
    >
      <div className="pointer-events-none absolute -left-24 -top-40 h-80 w-80 rounded-full bg-[var(--bg-grad-a)] blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-8 h-72 w-72 rounded-full bg-[var(--bg-grad-b)] blur-3xl" />

      <div className="glass thin-separator fixed left-3 right-3 top-3 z-50 flex h-14 items-center justify-between rounded-2xl px-4 md:hidden">
        <button
          onClick={() => setSidebarOpen(true)}
          className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full text-lg text-[var(--text)] transition-colors duration-[var(--duration-fast)] hover:bg-[var(--accent-soft)]"
          aria-label="Open sidebar"
        >
          <FiMenu />
        </button>
        <div className="flex items-center gap-2">
          <img src="/devPadLogo.svg" alt="DevPad Logo" className="h-6 w-6" />
          <span className="text-sm font-semibold tracking-tight">DevPad</span>
        </div>
        <ThemeButton />
      </div>

      <aside className="glass thin-separator relative z-10 hidden w-72 flex-col rounded-r-[1.5rem] border-l-0 border-t-0 border-b-0 md:flex">
        <div className="thin-separator flex items-center justify-between border-b px-5 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted-2)]">
              Workspace
            </p>
            <div className="mt-1 text-2xl font-semibold tracking-tight">DevPad</div>
          </div>
          <ThemeButton />
        </div>

        <TabSection />

        <div className="thin-separator mt-3 flex items-center justify-between border-t px-5 py-4 text-xs text-[var(--muted-2)]">
          <div>
            Developed by{" "}
            <a
              href="https://github.com/rmegi"
              className="focus-ring rounded px-1 font-medium text-[var(--muted)] underline decoration-[var(--muted-2)] decoration-1 underline-offset-3 transition-colors hover:text-[var(--text)]"
            >
              rmegi
            </a>
          </div>
        </div>
      </aside>

      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
            onClick={() => setSidebarOpen(false)}
          />

          <aside className="glass thin-separator relative h-full w-80 max-w-[86%] rounded-r-[1.5rem] border-l-0 border-t-0 border-b-0">
            <div className="thin-separator flex items-center justify-between border-b px-5 py-5">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--muted-2)]">
                  Workspace
                </p>
                <div className="mt-1 text-2xl font-semibold tracking-tight">DevPad</div>
              </div>
              <button
                onClick={() => setSidebarOpen(false)}
                className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full text-xl text-[var(--text)] transition-colors duration-[var(--duration-fast)] hover:bg-[var(--accent-soft)]"
                aria-label="Close sidebar"
              >
                <FiX />
              </button>
            </div>

            <TabSection />

            <div className="thin-separator mt-3 flex items-center justify-between border-t px-5 py-4 text-xs text-[var(--muted-2)]">
              <div>
                Developed by{" "}
                <a
                  href="https://github.com/rmegi"
                  className="focus-ring rounded px-1 font-medium text-[var(--muted)] underline decoration-[var(--muted-2)] decoration-1 underline-offset-3 transition-colors hover:text-[var(--text)]"
                >
                  rmegi
                </a>
              </div>

              <ThemeButton />
            </div>
          </aside>
        </div>
      )}

      <main className="z-10 flex w-full flex-1 pt-20 md:pt-0">
        <MainEditor />
      </main>
    </div>
  );
};

export default HomePage;
