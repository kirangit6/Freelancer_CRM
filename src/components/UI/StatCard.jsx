export default function StatCard({ title, value, sub }) {
  return (
    <div
      className="p-4 rounded-lg "
      style={{
        background: "var(--card)",
      }}
    >
      <p style={{ color: "var(--text)" }} className="text-sm">
        {title}
      </p>

      <h2 style={{ color: "var(--text)" }} className="text-lg font-bold mt-1">
        {value}
      </h2>

      <p style={{ color: "var(--text)" }} className="text-xs mt-1">
        {sub}
      </p>
    </div>
  );
}
