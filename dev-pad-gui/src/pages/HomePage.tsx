import CodeBlock from "../components/codeBlock/codeBlock";
import PageItem from "../components/pageItem/pageItem";
import SidebarTab from "../components/sidebartab/sidebartab";

const HomePage = () => {
  return (
    <div className="flex h-screen bg-slate-950 text-slate-200">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">
        {/* App title */}
        <div className="px-4 py-3 text-lg font-semibold ">
          DevPad
        </div>

        {/* Tabs */}
        <div className="px-2 space-y-1">
          <SidebarTab label="Snippets" active />
          <SidebarTab label="Notes" />
          <SidebarTab label="Projects" />
        </div>

        {/* Pages */}
        <div className="mt-4 px-2 flex-1 overflow-auto">
          <p className="px-2 mb-2 text-xs uppercase text-slate-500">
            Pages
          </p>

          <PageItem title="Auth helpers" active />
          <PageItem title="React hooks" />
          <PageItem title="SQL queries" />
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-slate-800 text-xs text-slate-500">
          Settings
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {/* Page title */}
        <input
          className="
            w-full
            bg-transparent
            text-2xl
            font-semibold
            outline-none
            mb-6
            placeholder:text-slate-500
          "
          defaultValue="Auth helpers"
        />

        {/* Text block */}
        <div className="mb-6 text-slate-400">
          Common authentication utilities I reuse across projects.
        </div>

        {/* Code block */}
        <CodeBlock
          language="ts"
          code={`export const isLoggedIn = (token?: string) => {
  return Boolean(token);
};`}
        />
      </main>
    </div>
  );
};

export default HomePage;
