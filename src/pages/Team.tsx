import React from "react";
import { teamData } from "@/data/team";
import TeamYearCard from "@/components/TeamYearCard";
import { Accordion } from "@/components/ui/accordion"

const TeamPage: React.FC = () => {
  return (
    <div className="container mx-auto">
      <Accordion type="multiple" className="space-y-1" defaultValue={[teamData[0].year]}>
        {teamData.map(year => (
          <TeamYearCard key={year.year} yearData={year} />
        ))}
      </Accordion>
    </div>
  );
};

export default TeamPage;
