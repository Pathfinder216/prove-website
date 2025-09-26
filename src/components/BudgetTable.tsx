import type { Budget } from "@/data/budget";

interface BudgetTableProps {
  budget: Budget;
}

export function BudgetTable({ budget }: BudgetTableProps) {
  const total = budget.lineItems.reduce((sum, item) => sum + item.cost, 0);

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-orange-200 rounded-lg shadow-md">
        <thead className="bg-prove-primary text-slate-100">
          <tr>
            <th className="px-4 py-2 text-left font-semibold">Category</th>
            <th className="px-4 py-2 text-left font-semibold">Description</th>
            <th className="px-4 py-2 text-right font-semibold">Cost</th>
          </tr>
        </thead>
        <tbody>
          {budget.lineItems.map((item, idx) => (
            <tr
              key={idx}
              className="odd:bg-orange-50 even:bg-orange-100 hover:bg-orange-200"
            >
              <td className="px-4 py-2 font-medium text-left">{item.category}</td>
              <td className="px-4 py-2 text-left">{item.description}</td>
              <td className="px-4 py-2 text-right">
                ${item.cost.toLocaleString()}
              </td>
            </tr>
          ))}
          <tr className="bg-prove-primary text-slate-100 font-bold">
            <td className="px-4 py-3 text-left">Total</td>
            <td colSpan={2} className="px-4 py-3 text-right text-lg">
              ${total.toLocaleString()}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
