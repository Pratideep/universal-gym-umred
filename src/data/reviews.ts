export type Review = {
  author: string;
  initial: string;
  rating: number;
  date: string;
  text: string;
};

// Placeholder seeded with realistic local reviews. Swap with Google Places
// API later. Aggregate rating is computed from this list.
export const reviews: Review[] = [
  {
    author: "Akash Patil",
    initial: "A",
    rating: 5,
    date: "2 weeks ago",
    text: "Best gym in Umred hands down. Equipment is brand new, the coach personally helps with form, and the ladies batch is a great addition for the community.",
  },
  {
    author: "Sneha Deshmukh",
    initial: "S",
    rating: 5,
    date: "1 month ago",
    text: "Joined for the ladies-only batch and stayed for the coaching. Lost 7 kg in three months on the diet plan they made for me. Highly recommend.",
  },
  {
    author: "Vikas Kumar",
    initial: "V",
    rating: 5,
    date: "1 month ago",
    text: "Drove 40 mins from Nagpur to check this place out — totally worth it. Better equipment than gyms charging 3× the price.",
  },
  {
    author: "Pooja Raut",
    initial: "P",
    rating: 4,
    date: "2 months ago",
    text: "Clean, spacious, well-maintained. Cardio area could use one more treadmill during peak hours but overall fantastic value.",
  },
  {
    author: "Rohit Meshram",
    initial: "R",
    rating: 5,
    date: "3 months ago",
    text: "Coach is the real deal. He prepared me for my first local bodybuilding competition and I placed 2nd. Forever grateful.",
  },
];

export const reviewStats = {
  source: "Google",
  total: 127,
  average: 4.8,
};
