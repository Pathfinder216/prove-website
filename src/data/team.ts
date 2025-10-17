// 2014-15
import Team15Img from "@/assets/Team_2014-15.jpg"
import Ben15Img from "@/assets/Headshots/Ben_15.jpg"
import Hannah15Img from "@/assets/Headshots/Hannah_15.jpg"
import John15Img from "@/assets/Headshots/John_15.jpg"
import Natalie15Img from "@/assets/Headshots/Natalie_15.jpg"
import Noah15Img from "@/assets/Headshots/Noah_15.jpg"
import Tim15Img from "@/assets/Headshots/Tim_15.jpg"

// 2013-14
import Team14Img from "@/assets/Team_2013-14.jpg"
import Ben14Img from "@/assets/Headshots/Ben_14.jpg"
import David14Img from "@/assets/Headshots/David_14.jpg"
import Hannah14Img from "@/assets/Headshots/Hannah_14.jpg"
import Natalie14Img from "@/assets/Headshots/Natalie_14.jpg"
import Stephen14Img from "@/assets/Headshots/Stephen_14.jpg"
import Tim14Img from "@/assets/Headshots/Tim_14.jpg"

// 2012-13
import Team13Img from "@/assets/Team_2012-13.jpg"
import Ben13Img from "@/assets/Headshots/Ben_13.jpg"
import David13Img from "@/assets/Headshots/David_13.jpg"
import Hannah13Img from "@/assets/Headshots/Hannah_13.jpg"
import Matt13Img from "@/assets/Headshots/Matt_13.jpg"
import Micah13Img from "@/assets/Headshots/Micah_13.jpg"
import Natalie13Img from "@/assets/Headshots/Natalie_13.jpg"
import Stephen13Img from "@/assets/Headshots/Stephen_13.jpg"

// 2011-12
import Team12Img from "@/assets/Team_2011-12.jpg"
import David12Img from "@/assets/Headshots/David_12.jpg"
import Hannah12Img from "@/assets/Headshots/Hannah_12.jpg"
import Matt12Img from "@/assets/Headshots/Matt_12.jpg"
import Micah12Img from "@/assets/Headshots/Micah_12.jpg"
import Natalie12Img from "@/assets/Headshots/Natalie_12.jpg"
import Stephen12Img from "@/assets/Headshots/Stephen_12.jpg"
import Thomas12Img from "@/assets/Headshots/Thomas_12.jpg"
import Tim12Img from "@/assets/Headshots/Tim_12.jpg"

export type TeamMember = {
  id: string;
  name: string;
  img: string;
  role: string;
  grade: string;
  yearsOnTeam: string;
  bio: string;
  updated?: string;
};

export type TeamYear = {
  year: string;
  img: string;
  imgMemberOrder: string[];
  members: TeamMember[];
};

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
  },
  {
    year: "2013-2014",
    img: Team14Img,
    imgMemberOrder: [
      "david_14", "ben_14", "natalie_14", "hannah_14", "stephen_14", "tim_14"
    ],
    members: [
      {
        id: "david_14",
        name: "David Sampsell (CEO)",
        img: David14Img,
        grade: "12th",
        yearsOnTeam: "3rd",
        role: "Design Engineer",
        bio: "David Sampsell is a student.",
      },
      {
        id: "stephen_14",
        name: "Stephen Gahman",
        img: Stephen14Img,
        grade: "12th",
        yearsOnTeam: "3rd",
        role: "Design Engineer",
        bio: "Stephen Gahman is a student.",
      },
      {
        id: "natalie_14",
        name: "Natalie Sampsell",
        img: Natalie14Img,
        grade: "10th",
        yearsOnTeam: "3rd",
        role: "Tech Report Editor",
        bio: "Natalie Sampsell is a 15-year-old sophomore. She enjoys acting, reading, listening to music, playing piano, skiing, and playing sports. Participating in the MATE Competition has helped Natalie discover her interest in engineering, and she hopes to pursue a STEM career in college, with a possible major in Computer Science.",
      },
      {
        id: "hannah_14",
        name: "Hannah Smith",
        img: Hannah14Img,
        grade: "11th",
        yearsOnTeam: "3rd",
        role: "Graphic Design",
        bio: "Hannah Smith is a 16 year-old junior in high school. Her role on the ROV team is as graphic designer. In her spare time, she enjoys playing sports, hanging out with friends, watching movies, playing piano and guitar, and taking pictures. In the fall of 2015, Hannah hopes to attend Liberty University to pursue a degree in nursing.",
      },
      {
        id: "ben_14",
        name: "Benjamin Green",
        img: Ben14Img,
        grade: "11th",
        yearsOnTeam: "2nd",
        role: "Programmer",
        bio: "I have been homeschooled since Kindergarten. Some of my hobbies include: Ultimate Frisbee, board games, airsoft, acting, and Netflix. Since I first took a Computer Programming class last year, I have always been fascinated by Computer Science, which is my intended major. Some of my nicknames include: Kreg, Benjamin Blue, and The Gazelle.",
      },
      {
        id: "tim_14",
        name: "Timothy Gahman",
        img: Tim14Img,
        grade: "10th",
        yearsOnTeam: "2nd",
        role: "Tool Fabrication",
        bio: "Timothy Gahman is a 15-year-old Sophomore from Pennsylvania. Tim has been on the team for two years. He enjoys golf, hunting, gaming, karate, and snowboarding in his spare time. In the future, he wishes to pursue a career in engineering, possibly biomedical engineering.",
      }
    ]
  },
  {
    year: "2012-2013",
    img: Team13Img,
    imgMemberOrder: [
      "matt_13",
      "david_13",
      "micah_13",
      "hannah_13",
      "natalie_13",
      "ben_13",
      "stephen_13"
    ],
    members: [
      {
        id: "david_13",
        name: "David Sampsell (CEO)",
        img: David13Img,
        grade: "11th",
        yearsOnTeam: "2nd",
        role: "Design Engineer",
        bio: "David Sampsell is a student.",
      },
      {
        id: "micah_13",
        name: "Micah Smith",
        img: Micah13Img,
        grade: "12th",
        yearsOnTeam: "2nd",
        role: "Design Engineer",
        bio: "Micah Smith is a student.",
      },
      {
        id: "matt_13",
        name: "Matthew Buonanno",
        img: Matt13Img,
        grade: "12th",
        yearsOnTeam: "2nd",
        role: "Mentor Programmer",
        bio: "Matthew Buonanno is a student.",
      },
      {
        id: "stephen_13",
        name: "Stephen Gahman",
        img: Stephen13Img,
        grade: "11th",
        yearsOnTeam: "2nd",
        role: "Design Engineer",
        bio: "Stephen Gahman is a student.",
      },
      {
        id: "natalie_13",
        name: "Natalie Sampsell",
        img: Natalie13Img,
        grade: "9th",
        yearsOnTeam: "2nd",
        role: "Tech Report Editor",
        bio: "Natalie Sampsell is a 14-year-old freshman. She enjoys acting, reading, listening to music, playing piano, skiing, and playing sports. Participating in the MATE Competition has helped Natalie discover her interest in engineering, and she hopes to pursue a STEM career in college, with a possible major in Computer Science.",
      },
      {
        id: "hannah_13",
        name: "Hannah Smith",
        img: Hannah13Img,
        grade: "10th",
        yearsOnTeam: "2nd",
        role: "Graphic Design",
        bio: "Hannah Smith is a 15 year-old sophomore in high school. Her role on the ROV team is as graphic designer. In her spare time, she enjoys playing sports, hanging out with friends, watching movies, playing piano and guitar, and taking pictures. In the fall of 2015, Hannah hopes to attend Liberty University to pursue a degree in nursing.",
      },
      {
        id: "ben_13",
        name: "Benjamin Green",
        img: Ben13Img,
        grade: "10th",
        yearsOnTeam: "1st",
        role: "Programmer",
        bio: "I have been homeschooled since Kindergarten. Some of my hobbies include: Ultimate Frisbee, board games, airsoft, acting, and Netflix. Since starting a Computer Programming class this year, I have become interested in Computer Science, which I am considering as a major. Some of my nicknames include: Kreg, Benjamin Blue, and The Gazelle.",
      }
    ]
  },
  {
    year: "2011-2012",
    img: Team12Img,
    imgMemberOrder: [
      "david_12",
      "natalie_12",
      "hannah_12",
      "micah_12",
      "stephen_12",
      "thomas_12",
      "tim_12",
      "matt_12"
    ],
    members: [
      {
        id: "david_12",
        name: "David Sampsell (CEO)",
        img: David12Img,
        grade: "10th",
        yearsOnTeam: "1st",
        role: "Design Engineer",
        bio: "David Sampsell is a student.",
      },
      {
        id: "micah_12",
        name: "Micah Smith",
        img: Micah12Img,
        grade: "11th",
        yearsOnTeam: "1st",
        role: "Design Engineer",
        bio: "Micah Smith is a student.",
      },
      {
        id: "matt_12",
        name: "Matthew Buonanno",
        img: Matt12Img,
        grade: "11th",
        yearsOnTeam: "1st",
        role: "Programmer",
        bio: "Matthew Buonanno is a student.",
      },
      {
        id: "stephen_12",
        name: "Stephen Gahman",
        img: Stephen12Img,
        grade: "10th",
        yearsOnTeam: "1st",
        role: "Electronics Engineer",
        bio: "Stephen Gahman is a student.",
      },
      {
        id: "natalie_12",
        name: "Natalie Sampsell",
        img: Natalie12Img,
        grade: "8th",
        yearsOnTeam: "1st",
        role: "Tech Report Editor",
        bio: "Natalie Sampsell is a 13-year-old middle-schooler. She enjoys acting, reading, listening to music, playing piano, skiing, and playing sports. She hopes to pursue a STEM career in college, with a possible major in Computer Science.",
      },
      {
        id: "hannah_12",
        name: "Hannah Smith",
        img: Hannah12Img,
        grade: "9th",
        yearsOnTeam: "1st",
        role: "Graphic Design",
        bio: "Hannah Smith is a 14 year-old freshman in high school. Her role on the ROV team is as graphic designer. In her spare time, she enjoys playing sports, hanging out with friends, watching movies, playing piano and guitar, and taking pictures. In the fall of 2015, Hannah hopes to attend Liberty University to pursue a degree in nursing.",
      },
      {
        id: "tim_12",
        name: "Timothy Gahman",
        img: Tim12Img,
        grade: "8th",
        yearsOnTeam: "1st",
        role: "Safety Officer",
        bio: "Timothy Gahman is a 13-year-old middle-schooler from Pennsylvania. Tim has been on the team for two years. He enjoys golf, hunting, gaming, karate, and snowboarding in his spare time. In the future, he wishes to pursue a career in engineering, possibly biomedical engineering.",
      },
      {
        id: "thomas_12",
        name: "Thomas Buonanno",
        img: Thomas12Img,
        grade: "8th",
        yearsOnTeam: "1st",
        role: "Researcher",
        bio: "Thomas Buonanno is currently 13 years old and has been on the team for two years. His contributions to the team involve researching and aiding the older team members as they required. He enjoys acting, playing the piano, playing flag football, and listening to music. He thinks he would like to pursue some field in engineering or some other science-based career.",
      }
    ]
  }
];
