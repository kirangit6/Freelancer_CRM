import { useState } from "react";
import ProjectList from "./ProjectList";
import MainLayout from "../components/layouts/MainLayout";

export default function Projects() {
  const tabs = [
    "All",
    "In Progress",
    "Review",
    "Completed",
    "Blocked",
    "Draft",
  ];
  const [activeTab, setActiveTab] = useState("All");

  return (
    <MainLayout>
      <div className="mx-auto">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold ">Projects</h1>
            <p className="text-sm  mt-1">
              Track deliverables, deadlines, and progress.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-start justify-between gap-2">
          <div>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
               
              >
                {tab}
              </button>
            ))}
          </div>
          <button  className="ml-auto text-white px-3 py-1 rounded text-sm"
          style={{background:"var(--accent)"}} 
          >
            + New Project
          </button>
        </div>

        {/* List */}
        <div className=" mx-auto mt-6">
          <ProjectList />
        </div>
      </div>
    </MainLayout>
  );
}
