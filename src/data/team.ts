// src/data/team.ts

// 2014-15
import Team15Img from "../assets/Team_2014-15.jpg"
import Ben15Img from "../assets/Headshots/Ben_15.jpg"
import Hannah15Img from "../assets/Headshots/Hannah_15.jpg"
import John15Img from "../assets/Headshots/John_15.jpg"
import Natalie15Img from "../assets/Headshots/Natalie_15.jpg"
import Noah15Img from "../assets/Headshots/Noah_15.jpg"
import Tim15Img from "../assets/Headshots/Tim_15.jpg"

export interface TeamMember {
  id: string;
  name: string;
  img: string;
  role: string;
  grade: string;
  yearsOnTeam: string;
  bio: string;
  updated?: string;
}

export interface TeamYear {
  year: string;
  img: string;
  imgMemberOrder: string[];
  members: TeamMember[];
}

export const teamData: TeamYear[] = [
  {
    year: "2014-2015",
    img: Team15Img,
    imgMemberOrder: [
      "john_15", "hannah_15", "natalie_15", "tim_15", "noah_15", "ben_15"
    ],
    members: [
      {
        id: "natalie_15",
        name: "Natalie Sampsell (CEO)",
        img: Natalie15Img,
        grade: "11th",
        yearsOnTeam: "4th",
        role: "Tech Report Editor",
        bio: "Natalie Sampsell is a 16-year-old junior. She enjoys acting, reading, listening to music, playing piano, skiing, and playing sports. Participating in the MATE Competition has helped Natalie discover her interest in engineering, and she hopes to pursue a STEM career in college, with a possible major in Computer Science.",
      },
      {
        id: "hannah_15",
        name: "Hannah Smith",
        img: Hannah15Img,
        grade: "12th",
        yearsOnTeam: "4th",
        role: "Graphic Design",
        bio: "Hannah Smith is a 17 year-old senior in high school. Her role on the ROV team is as graphic designer. In her spare time, she enjoys playing sports, hanging out with friends, watching movies, playing piano and guitar, and taking pictures. In the fall of 2015, Hannah hopes to attend Liberty University to pursue a degree in nursing.",
      },
      {
        id: "ben_15",
        name: "Benjamin Green",
        img: Ben15Img,
        grade: "12th",
        yearsOnTeam: "3rd",
        role: "Programmer",
        bio: "I have been homeschooled since Kindergarten. Some of my hobbies include: Ultimate Frisbee, board games, airsoft, acting, and Netflix. Since I first took a Computer Programming class a couple years ago, I have always been fascinated by Computer Science, which is my intended major. Some of my nicknames include: Kreg, Benjamin Blue, and The Gazelle.",
      },
      {
        id: "tim_15",
        name: "Timothy Gahman",
        img: Tim15Img,
        grade: "11th",
        yearsOnTeam: "3rd",
        role: "Tool Fabrication",
        bio: "Timothy Gahman is a 16-year-old Junior from Pennsylvania. Tim has been on the team for two years. He enjoys golf, hunting, gaming, karate, and snowboarding in his spare time. In the future, he wishes to pursue a career in engineering, possibly biomedical engineering.",
      },
      {
        id: "john_15",
        name: "John Sampsell",
        img: John15Img,
        grade: "9th",
        yearsOnTeam: "1st",
        role: "Prop Fabrication",
        bio: "I do karate and play a lot of video games. Mostly I play Minecraft. I've probably played Minecraft for 500 hours now, so I'm basically an expert. I've been an honorary member of pROVe basically every year it has existed, so it's cool to officially be part of the team now.",
      },
      {
        id: "noah_15",
        name: "Noah Jarratt",
        img: Noah15Img,
        grade: "11th",
        yearsOnTeam: "1st",
        role: "Fundraising",
        bio: "Noah Jarratt is a 17 year-old junior in high school. This is his first year on the team. Some of his hobbies include snowboarding, running, gaming, playing piano and relaxing with friends. He hopes to go to college and graduate with a major in business and a minor in communications.",
      }
    ]
  }
];
