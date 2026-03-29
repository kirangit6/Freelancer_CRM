import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { useState } from "react";

export default function MainLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{ background: "var(--bg)", color: "var(--text)" }}
    >
      {/* Sidebar */}
      <div>
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      </div>

      <div
        className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ${collapsed ? "ml-20" : "ml-64"}`}
      >
        {/* Navbar */}
        <div
          className="h-16  shrink-0 border-b "
          style={{ background: "var(--card)", borderColor: "#e5e7eb" }}
        >
          <Navbar />
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 no-scrollbar">
          {children}
        </div>
      </div>
    </div>
  );
}
