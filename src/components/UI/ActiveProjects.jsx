export default function ActiveProjects() {
  const projects = [
    {
      name: "Design System v2",
      progress: 60,
      status: "In Progress",
      color: "bg-blue-500",
    },
    {
      name: "Dashboard Redesign",
      progress: 90,
      status: "Review",
      color: "bg-yellow-500",
    },
    {
      name: "Web App Frontend",
      progress: 50,
      status: "In Progress",
      color: "bg-blue-500",
    },
    {
      name: "Marketing Site",
      progress: 45,
      status: "In Progress",
      color: "bg-blue-500",
    },
    {
      name: "Component Library",
      progress: 20,
      status: "Blocked",
      color: "bg-red-500",
    },
  ];

  const statusStyle = {
    "In Progress": "bg-blue-100 text-blue-600",
    Review: "bg-yellow-100 text-yellow-600",
    Blocked: "bg-red-100 text-red-600",
  };

  return (
    <div
      className=" rounded-xl shadow-sm p-5"
      style={{
        background: "var(--card)",
        borderColor: "var(--border)",
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold ">Active Projects</h3>
        <span className="text-sm text-purple-600 cursor-pointer">All →</span>
      </div>

      {/* List */}
      <div className="space-y-5">
        {projects.map((p, i) => (
          <>
            <div key={i} className="px-5 py-4 border-b ">
              {/* TOP ROW */}
              <div className="flex items-center justify-between">
                {/* LEFT */}
                <div className="flex items-center gap-3 w-full">
                  {/* Icon */}
                  <div className="w-8 h-8 bg-purple-100 text-purple-600 flex items-center justify-center rounded-md text-xs font-semibold">
                    {p.initials}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    {/* Title */}
                    <p className="text-sm font-medium">{p.name}</p>

                    {/* Client + Tag */}
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs opacity-70">{p.client}</span>

                      <span className="text-xs px-2 py-0.5 rounded bg-gray-200">
                        {p.tag}
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-2 w-full h-[4px] bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`${p.color} h-full rounded-full`}
                        style={{ width: `${p.progress}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* STATUS */}
                <span
                  className={`text-xs px-2 py-0.5 rounded ${statusStyle[p.status]}`}
                >
                  {p.status}
                </span>-
              </div>

              {/* BOTTOM RIGHT % */}
              <div className="text-right text-xs opacity-70 mt-1">
                {p.progress}%
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
