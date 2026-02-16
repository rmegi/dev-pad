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
      className="h-6 w-6 inline-flex items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface-2)] text-[var(--muted)] hover:text-[var(--text)] hover:border-[var(--muted)] transition-colors"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {theme === "dark" ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
};

export default ThemeButton;
