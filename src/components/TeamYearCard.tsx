import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import type { TeamYear } from "@/data/team";

import TeamMemberCard from "./TeamMemberCard";

interface TeamYearProps {
  yearData: TeamYear;
}

function TeamYearCard({ yearData }: TeamYearProps) {
  const { year, img, imgMemberOrder, members } = yearData;

  // Sort members to match the order in imgMemberOrder
  const orderedMembers = imgMemberOrder.map(
    id => members.find(member => member.id === id)!
  );

  return (
    // TODO: remove tiny line at bottom of non-last accordion items
    <AccordionItem value={yearData.year}>
      <AccordionTrigger className="text-xl font-semibold">
        {yearData.year}
      </AccordionTrigger>
      <AccordionContent className="px-4 py-2 text-gray-700">
        <section className="space-y-6 mt-3">
          {/* Team photo with member links */}
          <article className="flex flex-col items-center space-y-2">
            <img
              src={img}
              alt={`Team photo ${year}`}
              className="w-full rounded-lg shadow-md"
            />
            <p className="flex flex-wrap justify-center gap-2 text-sm">
              From left to right:
              {orderedMembers.map((member, i) => (
                <a
                  key={member.id}
                  href={`#${member.id}`}
                  className="text-prove-accent hover:underline"
                >
                  {member.name}{i < orderedMembers.length - 1 && ","}
                </a>
              ))}
            </p>
          </article>

          {/* Member cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {members.map(member => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      </AccordionContent>
    </AccordionItem>
  )
}

export default TeamYearCard;
