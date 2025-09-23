export interface Results {
  year: number;
  location: string;
  topScore: number;
  score: number;
  place: number;
  numTeams: number;
}

export const results: Results[] = [
  {
    year: 2012,
    location: "Orlando, Florida",
    topScore: 479.60,
    score: 298.00,
    place: 22,
    numTeams: 31,
  },
  {
    year: 2013,
    location: "Seattle, Washington",
    topScore: 541.30,
    score: 391.30,
    place: 16,
    numTeams: 31,
  },
  {
    year: 2014,
    location: "Alpena, Michigan",
    topScore: 526.50,
    score: 427.33,
    place: 11,
    numTeams: 30,
  },
  {
    year: 2015,
    location: "St. John's, NL, Canada",
    topScore: 525.83,
    score: 327.67,
    place: 19,
    numTeams: 31,
  },
]
