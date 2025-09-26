import { budgets } from "@/data/budget";
import { BudgetTable } from "@/components/BudgetTable";
import ResultsTable from "@/components/ResultsTable";

export default function Data() {
  return (
    <>
      <section className="px-4 py-8">
        <div className="space-y-12">
          {budgets.map((budget, i) => (
            <>
              <h1 className="mb-4">{budget.year} Budget</h1>
              <BudgetTable key={i} budget={budget} />
            </>
          ))}
        </div>
      </section>

      <section className="px-4 py-8">
        <div className="space-y-12">
          <h1>Competition Results</h1>
          <ResultsTable />
        </div>
      </section>
    </>
  );
}
