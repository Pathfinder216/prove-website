import { budgets } from "@/data/budget";
import { BudgetTable } from "@/components/BudgetTable";
import ResultsTable from "@/components/ResultsTable";

export default function Data() {
  return (
    <div className="space-y-12 px-4">
      <section>
        <div className="space-y-4">
          <h1>Competition Results</h1>
          <ResultsTable />
        </div>
      </section>

      <section>
        <div className="space-y-4">
          {budgets.map((budget, i) => (
            <>
              <h1>{budget.year} Budget</h1>
              <BudgetTable key={i} budget={budget} />
            </>
          ))}
        </div>
      </section>
    </div>
  );
}
