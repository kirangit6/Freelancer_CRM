import MainLayout from "../layouts/MainLayout";
import ProposalCard from "../UI/ProposalCard";
import { proposalsData } from "../../CommonData/Data";
import StatCard from "../UI/StatCard";
import { useState } from "react";

export default function TableList({
  pageName,
  pageSub,
  add,
  card,
  tabName,
  tableData,
}) {
  
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">{pageName}</h1>
          <p className=" text-sm">{pageSub}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-6">
        {card?.map((card, i) => (
          <StatCard title={card.title} value={card.value} sub={card.sub} />
        ))}
      </div>
    </>
  );
}
