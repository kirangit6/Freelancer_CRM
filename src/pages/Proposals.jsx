import MainLayout from "../components/layouts/MainLayout";
import ProposalCard from "../components/UI/ProposalCard";
import { proposalsData,ProposalCardData } from "../CommonData/Data";
import StatCard from "../components/UI/StatCard";
import { useState } from "react";

export default function Proposals() {
    const [activeTab, setActiveTab] = useState("All");
const tabs = ["All", "Sent", "Viewed", "Draft", "Won", "Lost"];
  return (
    <MainLayout>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Proposals</h1>
          <p className="text-gray-500 text-sm">
            Win more work. Track every opportunity.
          </p>
        </div>

       
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-6">
        <StatCard
          title="Pipeline Value (Total Active Proposals)"
          value="$16,000"
          sub="3 open proposals"
        />

        <StatCard title="Won YTD" value="$4,800" sub="1 deal closed" />

        <StatCard
          title="Win Rate (Proposals Successful)"
          value="50%"
          sub="last 6 months"
        />

        <StatCard
          title="Avg Proposal (Deal)"
          value="$4,600"
          sub="per proposal"
        />
      </div>
      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
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
            + New proposal
          </button>
        </div>
    

      {/* List */}
      <div className="space-y-4">
        {proposalsData.map((item, i) => (
          <ProposalCard key={i} {...item} />
        ))}
      </div>
    </MainLayout>
  );
}
