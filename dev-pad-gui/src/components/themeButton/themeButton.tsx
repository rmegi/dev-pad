import React from "react";
import { useAtom } from "jotai";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { themeAtom } from "../../atoms/themeAtom";

const ThemeButton: React.FC = () => {
  const [theme, setTheme] = useAtom(themeAtom);

  return (
    <button
      type="button"
      onClick={() =>
        setTheme((current) => (current === "dark" ? "light" : "dark"))
      }
      className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface-strong)] text-[var(--muted)] shadow-[var(--shadow-1)] transition-all duration-[var(--duration-fast)] ease-[var(--easing-standard)] hover:text-[var(--text)]"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
};

export default ThemeButton;
