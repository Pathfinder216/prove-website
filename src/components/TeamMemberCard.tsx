// src/components/TeamMemberCard.tsx
import type { TeamMember } from "../data/team";

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <article
      id={member.id}
      className={`flex flex-col items-center text-center bg-white p-4 rounded-lg
        shadow-md space-y-2 scroll-mt-16`}
    >
      <img
        src={member.img}
        alt={`${member.name} headshot`}
        className="w-32 h-32 rounded-full object-cover shadow-sm"
      />
      <h4 className="font-semibold">{member.name}</h4>
      <p className="text-sm text-gray-700">{member.bio}</p>
      {member.updated && (
        <p className="text-xs text-gray-500">{member.updated}</p>
      )}
      <p className="text-xs font-medium text-gray-600">
        {member.grade} Grade, {member.yearsOnTeam} year on pROVe, {member.role}
      </p>
    </article>
  );
};

export default TeamMemberCard;
