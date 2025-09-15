import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

import type { TeamYear } from "../data/team";
import TeamMemberCard from "./TeamMemberCard";

interface TeamYearProps {
  yearData: TeamYear;
}

// const TeamYearCard: React.FC<TeamYearProps> = ({ yearData }) => {
//   const { year, img, imgMemberOrder, members } = yearData;

//   // Sort members to match the order in imgMemberOrder
//   const orderedMembers = imgMemberOrder.map(
//     id => members.find(member => member.id === id)!
//   );

//   return (
//     <section className="space-y-6">
//       <h2 className="text-2xl font-bold bg-prove-primary rounded text-black">{year}</h2>

//       {/* Team photo with member links */}
//       <article className="flex flex-col items-center space-y-2">
//         <img
//           src={img}
//           alt={`Team photo ${year}`}
//           className="w-full rounded-lg shadow-md"
//         />
//         <p className="flex flex-wrap justify-center gap-2 text-sm">
//           From left to right:
//           {orderedMembers.map((member, i) => (
//             <a
//               key={member.id}
//               href={`#${member.id}`}
//               className="text-prove-accent hover:underline"
//             >
//               {member.name}{i < orderedMembers.length - 1 && ","}
//             </a>
//           ))}
//         </p>
//       </article>

//       {/* Member cards */}
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {members.map(member => (
//           <TeamMemberCard key={member.id} member={member} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default TeamYearCard;

function TeamYearCard({ yearData }: TeamYearProps) {
  const { year, img, imgMemberOrder, members } = yearData;

  // Sort members to match the order in imgMemberOrder
  const orderedMembers = imgMemberOrder.map(
    id => members.find(member => member.id === id)!
  );

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value={yearData.year}>
        <AccordionTrigger className="text-xl font-semibold">
          {yearData.year}
        </AccordionTrigger>
        <AccordionContent>
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
    </Accordion>
  )
}

export default TeamYearCard;
