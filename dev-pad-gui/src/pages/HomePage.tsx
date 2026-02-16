import MainEditor from "../components/mainEditor/mainEditor";
import TabSection from "../components/tabSection/tabSection";

const HomePage = () => {
  return (
    <div className="flex h-screen bg-slate-950 text-slate-200">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">
        <div className="px-4 py-3 text-lg font-semibold">DevPad</div>

        <TabSection />
        <div className="p-3 border-t border-slate-800 text-xs text-slate-500">
          Settings
        </div>
      </aside>

      <MainEditor />
    </div>
  );
};

export default HomePage;
