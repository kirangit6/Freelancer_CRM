export default function ProposalCard({
  title,
  client,
  type,
  amount,
  status,
  date,
  progress,
}) {
  return (
    <div className="p-4 rounded-xl shadow-sm flex justify-between items-center"  style={{
        background: "var(--card)",
        borderColor: "var(--border)",
      }}>
      {/* Left */}
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{client}</p>

        <div className="flex gap-2 mt-2">
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
            {type}
          </span>
          <span className=" font-semibold" >{amount}</span>
        </div>
      </div>

      {/* Middle */}
      <div className="w-1/3">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>{status}</span>
          <span>{date}</span>
        </div>

        {/* Progress */}
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-2 bg-green-500 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <p className="text-xs text-right text-gray-500 mt-1">
          Win prob. {progress}%
        </p>
      </div>

      {/* Right */}
      <div className="flex gap-2">
        <button className="border px-3 py-1 rounded-lg text-sm" style={{
            borderColor: "var(--border)",
          }} >
          Edit
        </button>
        <button className=" text-white px-3 py-1 rounded text-sm" style={{
            background: "var(--accent)",
            borderColor: "var(--border)",
          }}>
          Follow up
        </button>
      </div>
    </div>
  );
}