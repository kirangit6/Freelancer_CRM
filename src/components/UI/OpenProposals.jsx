export default function OpenProposals() {
  const proposals = [
    {
      title: "Full-Stack Web App",
      client: "Linear",
      progress: "75% win prob.",
      amount: "$6,500",
      status: "Sent",
    },
    {
      title: "Design System Retainer",
      client: "Vercel",
      progress: "85% win prob.",
      amount: "$6,000",
      status: "Viewed",
    },
    {
      title: "Custom Theme Development",
      client: "Craft CMS",
      progress: "55% win prob.",
      amount: "$3,500",
      status: "Draft",
    },
  ];

  const statusStyle = {
    Sent: "bg-blue-100 text-blue-600",
    Viewed: "bg-yellow-100 text-yellow-600",
    Draft: "bg-gray-200 text-gray-600",
  };

  return (
    <div className="rounded-xl shadow-sm p-5"  style={{
        background: "var(--card)",
        borderColor: "var(--border)",
      }}>
      
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold ">Open Proposals</h3>
        <span className="text-sm text-purple-600 cursor-pointer">All →</span>
      </div>

      {/* List */}
      <div className="space-y-4">
        {proposals.map((p, i) => (
          <div key={i} className="flex justify-between items-start px-5 py-4 border-b">
            
            {/* Left */}
            <div>
              <p className="text-sm font-medium text-gray-800">
                {p.title}
              </p>

              <p className="text-xs text-gray-400">
                {p.client} • {p.progress}
              </p>
            </div>

            {/* Right */}
            <div className="text-right">
              <p className="text-sm font-semibold text-purple-600">
                {p.amount}
              </p>

              <span className={`text-xs px-2 py-0.5 rounded ${statusStyle[p.status]}`}>
                {p.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}