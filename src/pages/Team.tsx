import React from "react";
import { teamData } from "../data/team";
import TeamYearCard from "../components/TeamYearCard";

const TeamPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 space-y-4">
      {teamData.map(year => (
        <TeamYearCard key={year.year} yearData={year} />
      ))}
    </div>
  );
};

export default TeamPage;
