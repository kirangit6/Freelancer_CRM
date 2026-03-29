import MainLayout from "../components/layouts/MainLayout";
import ActiveProjects from "../components/UI/ActiveProjects";
import OpenProposals from "../components/UI/OpenProposals";
import StatCard from "../components/UI/StatCard";
import {DashboardCardData} from "../CommonData/Data";

export default function Dashboard() {
  return (
    <>
      <MainLayout>
        <div className="flex min-h-screen">
          {/* Main Content */}
          <main className="flex-1">
            {/* Top Bar */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-xl font-semibold">Dashboard</h1>
                <p className="text-sm ">
                  Your freelance business at a glance.
                </p>
              </div>
              {/* <div className="flex items-center gap-4">
                <button className="bg-gray-200 px-4 py-2 rounded-lg">
                  Export Report
                </button>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg">
                  + New Client
                </button>
              </div> */}
            </div>

            {/* Cards */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              {DashboardCardData?.map((card, i) => (
                <StatCard
                  title={card.title}
                  value={card.value}
                  sub={card.sub}
                />
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-3 gap-4">
              {/* Line Chart Placeholder */}
              <div className="col-span-2  p-5 rounded-xl shadow-sm"  style={{
        background: "var(--card)",
        borderColor: "var(--border)",
      }}>
                <div className="flex justify-between mb-4">
                  <h3 className="font-semibold">Revenue vs Expenses</h3>
                  <span className="text-purple-600 cursor-pointer">
                    Full report →
                  </span>
                </div>

                {/* Fake chart */}
                <div className="h-64 flex items-center justify-center text-gray-400">
                  Chart Area
                </div>
              </div>
              {/* Pie Chart Placeholder */}
              <div className="p-5 rounded-xl shadow-sm"  style={{
        background: "var(--card)",
        borderColor: "var(--border)",
      }}>
                <h3 className="font-semibold mb-4">Revenue by Client</h3>

                <div className="h-64 flex items-center justify-center text-gray-400">
                  Pie Chart
                </div>
              </div>
              {/* <div className="grid grid-cols-2 gap-6 mt-6"> */}

              {/* </div> */}
            </div>
            <div className="grid grid-cols-2 gap-6 mt-6">
              <ActiveProjects />
              <OpenProposals />
            </div>
          </main>
        </div>
      </MainLayout>
    </>
  );
}
