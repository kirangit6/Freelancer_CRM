import MainLayout from "../components/layouts/MainLayout";
import TableList from "../components/UI/TableList";
import { TaskCardData } from "../CommonData/Data";
import { useState } from "react";

export default function Tasks() {
  const [activeTab, setActiveTab] = useState("All");
  const tasksToday = [
    {
      title: "Send revised proposal to Linear",
      tags: ["high", "Business Dev", "Linear"],
    },
    {
      title: "Review Stripe design system feedback",
      tags: ["high", "Client Work", "Stripe Inc."],
    },
    {
      title: "INV-007 follow-up — Ghost overdue",
      tags: ["high", "Finance", "Ghost"],
    },
  ];

  const tasksTomorrow = [
    {
      title: "Framer marketing site — hero copy",
      tags: ["medium", "Client Work", "Framer"],
    },
    {
      title: "Log time for this week — Notion project",
      tags: ["medium", "Admin", "Notion"],
    },
  ];
  const tabs = ["All", "high", "medium", "low", "Business Dev", "Finance"];
  return (
    <MainLayout>
      <div className="p-4 md:p-6 space-y-6">
        {/* <div>
        <h1 className="text-xl font-semibold">Tasks</h1>
        <p className="text-sm text-gray-500">
          Stay on top of everything.
        </p>
      </div> */}

        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "TOTAL", value: 8, sub: "all tasks" },
          { label: "DONE", value: 1, sub: "completed" },
          { label: "DUE TODAY", value: 3, sub: "need attention" },
          { label: "HIGH PRIO", value: 3, sub: "urgent" },
        ].map((item, i) => (
          <div
            key={i}
            className="p-4 rounded-lg border "
          >
            <p className="text-xs text-gray-400">{item.label}</p>
            <h2 className="text-xl font-bold">{item.value}</h2>
            <p className="text-xs text-gray-400">{item.sub}</p>
          </div>
        ))}
      </div> */}
        <TableList
          pageName="Tasks"
          pageSub="Stay on top of everything."
          add="Task"
          card={TaskCardData}
        />

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {tabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(tab)}
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            >
              {tab}
            </button>
          ))}

          <button className="ml-auto text-white px-3 py-1 rounded text-sm"
          style={{background:"var(--accent)"}}
          >
            + New Task
          </button>
        </div>

        {/* TODAY */}
        <div>
          <p className="text-xs text-gray-400 mb-2">TODAY • 3</p>

          <div className="space-y-3">
            {tasksToday.map((task, i) => (
              <div
                key={i}
                className="flex justify-between items-start p-4 rounded-lg transition"
                style={{background: "var(--card)"}}
              >
                <div className="flex gap-3">
                  <input type="checkbox" />

                  <div>
                    <p className="text-sm font-medium">{task.title}</p>

                    <div className="flex flex-wrap gap-2 mt-1">
                      {task.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="text-xs px-2 py-0.5  rounded"
                          style={{background: "var(--hover)"}}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <span className="text-xs text-orange-500">Today</span>
              </div>
            ))}
          </div>
        </div>

        {/* TOMORROW */}
        <div>
          <p className="text-xs text-gray-400 mb-2">TOMORROW • 2</p>

          <div className="space-y-3">
            {tasksTomorrow.map((task, i) => (
              <div
                key={i}
                className="flex justify-between items-start p-4 rounded-lg "
                 style={{ background: "var(--card)"}}
              >
                <div className="flex gap-3">
                  <input type="checkbox" />

                  <div>
                    <p className="text-sm font-medium">{task.title}</p>

                    <div className="flex flex-wrap gap-2 mt-1">
                      {task.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="text-xs px-2 py-0.5  rounded"
                           style={{ background: "var(--hover)"}}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <span className="text-xs text-gray-400">Tomorrow</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
