import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Folder,
  FileText,
  Send,
  Clock,
  CheckSquare,
  BarChart,
  Settings,
  CreditCard,
  Moon,
  Sun,
  Palette,
  Layers,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useTheme } from "../../theme/ThemeContext";

export default function Sidebar({ collapsed, setCollapsed }) {
  const menuItems = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Clients", path: "/clients", icon: Users },
    { name: "Projects", path: "/projects", icon: Folder },
    { name: "Invoices", path: "/invoice", icon: FileText },
    { name: "Proposals", path: "/proposals", icon: Send },
    { name: "Time Log", path: "/time-log", icon: Clock },
    { name: "Tasks", path: "/tasks", icon: CheckSquare, badge: 3 },
    { name: "Reports", path: "/reports", icon: BarChart },
    { name: "Settings", path: "/settings", icon: Settings },
    { name: "Payments", path: "/payments", icon: CreditCard },
  ];
  const { theme, setTheme } = useTheme();

  const themes = [
    { name: "dark", label: "Dark", icon: Moon },
    { name: "light", label: "Light", icon: Sun },
    { name: "warm", label: "Warm", icon: Palette },
    { name: "slate", label: "Slate", icon: Layers },
  ];
  return (

    <div
      className={`h-screen fixed left-0 top-0 bg-white shadow-md flex flex-col justify-between transition-all duration-300
  ${collapsed ? "w-20 items-center py-4" : "w-64 py-3 px-5"}` }  style={{ background: "var(--card)", borderColor: "#e5e7eb" }}
    >
      {/* Top Section */}
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10  text-white flex items-center justify-center rounded-xl font-bold"
          style={{background:"var(--accent)"}}
          >
            F
          </div>

          {!collapsed && (
            <div >
              <h2 className="text-lg font-semibold">
                freelance<span className="text-purple-600">crm</span>
              </h2>
              <p className="text-xs opacity-60">Client & project hub</p>
            </div>
          )}
        </div>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-6 border-b rounded-full p-1 shadow"
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>

        <ul>
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center ${
                      collapsed
                        ? "justify-center py-2.5"
                        : " justify-between gap-3 px-3"
                    } py-1.5  rounded-lg text-sm transition `
                  }
                   style={({ isActive }) => ({
    background: !isActive || "var(--bg)" ,
    text: !isActive || "var(--text)" ,
    hover:!isActive || "var(--hover)",
  
  })}
                >
                  <div className="flex items-center gap-3">
                    {Icon && <Icon size={16} />}
                    {!collapsed && <span>{item.name}</span>}
                  </div>

                  {!collapsed && item.badge && (
                    <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full">
                      {" "}
                      {item.badge}{" "}
                    </span>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Bottom Section */}
      <div>
        {/* Outstanding */}
        {!collapsed && (
          <div
            className="p-4 rounded-lg "
            style={{ background: "var(--bg)" }}
          >
            <p className="text-sm font-semibold">OUTSTANDING</p>
            <h2 className="text-xl font-bold">$13,700</h2>
            <p className="text-xs ">invoices open</p>
          </div>
        )}

        {/* Theme */}

        <div className="mt-1">
          <p  style={{ color: "var(--text)"}} className={`text-[11px] uppercase tracking-wider font-bold ${collapsed ? "mb-2" : "mb-2"}`}>
            THEME
          </p>

          <div  className={`grid gap-2 ${collapsed ? "grid-cols" : "grid-cols-2"}`} >
            {themes.map((t) => {
              const Icon = t.icon;
              return (
                <button
                  key={t.name}
                  onClick={() => setTheme(t.name)}
                  className={`flex items-center gap-2 px-2 py-1 rounded-lg text-sm border transition
                  `}
                  style={{
                      hover: theme !== t.name || "var(--hover)",
                      borderColor: theme !== t.name || "var(--border)",
                      background:theme!== t.name || "var(--bg)",
                      text:theme !== t.name || "var(--text)"
                      }}  >
                  <Icon size={16} />
                  {!collapsed && <span>{t.label}</span>}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
