import type { Tab } from "../types/types";

export const mockTabs: Tab[] = [
  {
    id: crypto.randomUUID(),
    title: "Welcome",
    content: `// Welcome to DevPad 🚀

You can type anything here.
This behaves like Notepad++.

Enjoy!`,
    lastUpdate: Date.now(),
  },
];
