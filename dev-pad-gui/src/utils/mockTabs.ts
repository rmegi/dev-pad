import type { Tab } from "../types/types";

export const mockTabs: Tab[] = [
  {
    id: "tab-1",
    title: "Auth helpers",
    lastUpdate: Date.now(),
    blocks: [
      {
        id: "b1",
        type: "text",
        content: "Common authentication utilities I reuse across projects.",
      },
      {
        id: "b2",
        type: "code",
        language: "ts",
        content: `export const isLoggedIn = (token?: string) => {
  return Boolean(token);
};`,
      },
    ],
  },
  {
    id: "tab-2",
    title: "React hooks",
    lastUpdate: Date.now(),
    blocks: [
      {
        id: "b3",
        type: "code",
        language: "ts",
        content: `export const useToggle = (initial = false) => {
  const [value, setValue] = useState(initial);
  return [value, () => setValue(v => !v)];
};`,
      },
    ],
  },
];
