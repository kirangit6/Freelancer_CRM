import MainLayout from "../components/layouts/MainLayout";
import ProposalCard from "../components/UI/ProposalCard";
import { proposalsData, InvoiceCardData } from "../CommonData/Data";
import StatCard from "../components/UI/StatCard";
import TableList from "../components/UI/TableList";
import { useState } from "react";

export default function Invoice() {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Paid", "Sent", "Draft", "Overdue"];
  const data = [
    {
      id: "INV-001",
      client: "Stripe Inc.",
      initials: "ST",
      amount: "$2,800",
      issued: "Feb 28",
      due: "Mar 14",
      paid: "Mar 10",
      status: "Paid",
    },
    {
      id: "INV-002",
      client: "Notion",
      initials: "NO",
      amount: "$6,000",
      issued: "Mar 1",
      due: "Mar 15",
      paid: "—",
      status: "Sent",
    },
    {
      id: "INV-003",
      client: "Framer",
      initials: "FR",
      amount: "$4,900",
      issued: "Mar 5",
      due: "Mar 19",
      paid: "—",
      status: "Sent",
    },
    {
      id: "INV-004",
      client: "Stripe Inc.",
      initials: "ST",
      amount: "$2,100",
      issued: "—",
      due: "Mar 28",
      paid: "—",
      status: "Draft",
    },
    {
      id: "INV-005",
      client: "Loom",
      initials: "LO",
      amount: "$2,400",
      issued: "Jan 15",
      due: "Jan 29",
      paid: "Jan 27",
      status: "Paid",
    },
    {
      id: "INV-006",
      client: "Loom",
      initials: "LO",
      amount: "$1,800",
      issued: "Dec 10",
      due: "Dec 24",
      paid: "Dec 22",
      status: "Paid",
    },
    {
      id: "INV-007",
      client: "Ghost",
      initials: "GH",
      amount: "$800",
      issued: "Feb 1",
      due: "Feb 15",
      paid: "—",
      status: "Overdue",
    },
  ];

  const statusStyles = {
    Paid: "bg-green-100 text-green-700",
    Sent: "bg-blue-100 text-blue-600",
    Draft: "bg-gray-100 text-gray-500",
    Overdue: "bg-red-100 text-red-600",
  };
  return (
    <MainLayout>
      <TableList
        pageName="Invoices"
        pageSub="Send, track, and collect payments."
        add="none"
        card={InvoiceCardData}
        tabName={tabs}
        tableData={proposalsData}
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

        <button
          className="ml-auto text-white px-3 py-1 rounded text-sm"
          style={{ background: "var(--accent)" }}
        >
          + New Task
        </button>
      </div>
      {/* <div className="bg-gray-100 min-h-screen py-6"> */}
      <div
        className=" rounded-xl shadow border overflow-hidden mt-5"
        style={{ background: "var(--card)" }}
      >
        <table className="w-full text-sm">
          {/* Header */}
          <thead className=" uppercase text-xs"  >
            <tr>
              <th className="px-6 py-3 text-left">Invoice</th>
              <th className="px-6 py-3 text-left">Client</th>
              <th className="px-6 py-3 text-left">Amount</th>
              <th className="px-6 py-3 text-left">Issued</th>
              <th className="px-6 py-3 text-left">Due</th>
              <th className="px-6 py-3 text-left">Paid</th>
              <th className="px-6 py-3 text-left">Status</th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className=" tab-btn border transition">
                <td className="px-6 py-4 font-semibold"  style={{ text: "var(--accent)" }}>
                  {item.id}
                </td>

                {/* Client */}
                <td className="px-6 py-4 flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-md text-xs font-semibold bg-purple-100 text-purple-600">
                    {item.initials}
                  </div>
                  <span >{item.client}</span>
                </td>

                <td className="px-6 py-4 font-medium font-semibold">{item.amount}</td>
                <td className="px-6 py-4  font-semibold">{item.issued}</td>
                <td
                  className={`px-6 py-4 font-semibold ${
                    item.status === "Overdue" ? "text-red-500" : "text-gray-200"
                  }`}
                >
                  {item.due}
                </td>

                <td className="px-6 py-4 text-green-600 font-semibold">{item.paid}</td>

                {/* Status */}
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-md text-xs font-medium ${statusStyles[item.status]}`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* </div> */}
    </MainLayout>
  );
}
