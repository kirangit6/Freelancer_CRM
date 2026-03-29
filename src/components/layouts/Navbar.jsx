import { useState, useRef, useEffect } from "react";
import { Bell } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const NoficationMsg = [
    {
      subject: "New client added",
      msg: "You have a new client request",
      datetime: "2 min ago",
    },
    {
      subject: "New client added",
      msg: "You have a new client request You have a new client request",
      datetime: "20 min ago",
    },
  ];
  return (
    <div className="flex items-center justify-between px-6 py-3 mb-6">
      {/* Left - Title */}
      <div>
        <h1 className="text-xl font-semibold">Dashboard</h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        {/* Search */}
        <div className="relative " ref={ref}>
          <input
            type="text"
            placeholder="Search clients, projects..."
            className="pl-10 pr-4 py-2 w-50 text-sm rounded-full "
            style={{ background: "var(--hover)"}}
          />
          <span className="absolute left-3 top-1.5 ">🔍</span>

          {/* Icons */}
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="relative p-2 border rounded-lg hover-bg hover-scale "
          style={{ color: "var(--accent)", borderColor: "var(--border)" }}
        >
          🔔
          <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
        </button>
        {/* Notification Dropdown */}
        {open && (
          <div
            className="absolute right-50 top-12 w-80 max-w-[90vw]  rounded-xl shadow-lg  z-50"
            style={{
              background: "var(--card)",
              color: "var(--text)",
              border: "1px solid var(--border)",
            }}
          >
            {/* Header */}
            <div
              className="flex justify-between items-center p-3 border-b"
              style={{ borderColor: "var(--border)" }}
            >
              <h3 className="text-sm font-semibold">Notifications</h3>
              <button className="text-xs" style={{ color: "var(--accent)" }}>
                Mark all as read
              </button>
            </div>

            {/* List */}
            <div className="max-h-80 overflow-y-auto">
              {NoficationMsg.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="flex gap-3 p-3 cursor-pointer transition"
                    style={{ borderBottom: "1px solid var(--border)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "var(--hover)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background = "transparent")
                    }
                  >
                    <div className="w-2 h-2 mt-2 bg-purple-500 rounded-full"></div>

                    <div>
                      <p className="text-sm font-medium">{item.subject}</p>
                      <p className="text-xs" style={{ color: "var(--muted)" }}>
                        {item.msg}
                      </p>
                      <p
                        className="text-xs mt-1"
                        style={{ color: "var(--muted)" }}
                      >
                        {item.datetime}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div
              className="p-3 border-t text-center"
              style={{ borderColor: "var(--border)" }}
            >
              <button className="text-sm" style={{ color: "var(--accent)" }}>
                View all notifications
              </button>
            </div>
          </div>
        )}
        <button
          className="p-2 rounded-lg hover-bg hover-scale border "
          style={{ color: "var(--accent)", borderColor: "var(--border)" }}
        >
          ⚙️
        </button>

        {/* Avatar */}
        <div
          className="w-10 h-10 text-white flex items-center justify-center rounded-lg border font-semibold cursor-pointer hover-bg hover-scale"
          style={{ color: "var(--accent)", borderColor: "var(--border)" }}
        >
          KK
        </div>
      </div>
    </div>
  );
}
