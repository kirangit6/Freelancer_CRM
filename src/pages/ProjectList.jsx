export default function ProjectList() {
  const projects = [
    {
      initials: "ST",
      name: "Dashboard Redesign",
      client: "Stripe Inc.",
      tag: "Design",
      status: "Review",
      progress: 90,
      due: "Due Mar 15",
      amount: "$2,800",
      total: "$2,800",
      hours: "38h",
      estimate: "40h est.",
      color: "bg-yellow-500",
    },
    {
      initials: "ST",
      name: "Dashboard Redesign",
      client: "Stripe Inc.",
      tag: "Design",
      status: "In Progress",
      progress: 70,
      due: "Due Mar 15",
      amount: "$2,800",
      total: "$2,800",
      hours: "38h",
      estimate: "40h est.",
      color: "bg-yellow-500",
    },
    {
      initials: "ST",
      name: "Dashboard Redesign",
      client: "Stripe Inc.",
      tag: "Design",
      status: "Blocked",
      progress: 20,
      due: "Due Mar 15",
      amount: "$2,800",
      total: "$2,800",
      hours: "38h",
      estimate: "40h est.",
      color: "bg-yellow-500",
    },
  ];

  const statusStyle = {
    Review: "bg-yellow-100 text-yellow-600",
    "In Progress": "bg-blue-100 text-blue-600",
    Blocked: "bg-red-100 text-red-600",
  };

  return (
    <div className="space-y-3">
      {projects.map((p, i) => (
        <div
          key={i}
          className="px-5 py-4 rounded-xl shadow-sm overflow-hidden"
          style={{
            background: "var(--card)" }}
        >
          {/* TOP ROW */}
          <div className="flex items-center justify-between">
            {/* LEFT */}
            <div className="flex items-center gap-3 w-[35%]">
              <div className="w-8 h-8 bg-purple-100 text-purple-600 flex items-center justify-center rounded-md text-xs font-semibold">
                {p.initials}
              </div>

              <div>
                <p className="text-sm font-medium ">{p.name}</p>

                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs ">{p.client}</span>

                  <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">
                    {p.tag}
                  </span>
                </div>
              </div>
            </div>

            {/* CENTER */}
            <div className="flex items-center gap-6 w-[45%] justify-center">
              <span
                className={`text-xs px-2 py-0.5 rounded ${statusStyle[p.status]}`}
              >
                {p.status}
              </span>

              <div className="w-[50%]">
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>{p.progress}%</span>
                  <span>{p.due}</span>
                </div>

                <div className="w-full h-[4px] bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      p.status === "Review"
                        ? "bg-yellow-500"
                        : p.status === "Blocked"
                          ? "bg-red-500"
                          : "bg-blue-500"
                    }`}
                    style={{ width: `${p.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="text-right">
                <p className="text-sm font-medium">{p.amount}</p>
                <p className="text-xs text-gray-400">of {p.total}</p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="text-right w-[10%]">
              <p className="text-sm font-medium">{p.hours}</p>
              <p className="text-xs text-gray-400">of {p.estimate}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
