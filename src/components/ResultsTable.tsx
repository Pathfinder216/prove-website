import type { JSX } from "react"

import { results, type Results } from "@/data/competitionResults"

const ResultsTable = (): JSX.Element => {
  return (
    <div className="overflow-x-auto rounded-2xl shadow-md border border-gray-200 dark:border-gray-700">
      <table className="w-full text-sm text-left text-gray-700 dark:text-gray-300">
        <thead className="text-xs uppercase bg-prove-primary text-white">
          <tr>
            <th scope="col" className="px-6 py-3">Year</th>
            <th scope="col" className="px-6 py-3">Location</th>
            <th scope="col" className="px-6 py-3 text-center">Top Score</th>
            <th scope="col" className="px-6 py-3 text-center">Our Score</th>
            <th scope="col" className="px-6 py-3 text-center">Place</th>
            <th scope="col" className="px-6 py-3 text-center">Teams</th>
          </tr>
        </thead>
        <tbody>
          {results.map((res: Results, idx: number) => (
            <tr
              key={idx}
              className={`${idx % 2 === 0
                ? "bg-white dark:bg-gray-900"
                : "bg-gray-50 dark:bg-gray-800"
                } hover:bg-orange-50 dark:hover:bg-gray-700`}
            >
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                {res.year}
              </td>
              <td className="px-6 py-4">{res.location}</td>
              <td className="px-6 py-4 text-center">{res.topScore.toFixed(2)}</td>
              <td className="px-6 py-4 text-center">{res.score.toFixed(2)}</td>
              <td className="px-6 py-4 text-center">{res.place}</td>
              <td className="px-6 py-4 text-center">{res.numTeams}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;
