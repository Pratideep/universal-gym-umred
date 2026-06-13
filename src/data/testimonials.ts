export type Transformation = {
  name: string;
  duration: string;
  result: string;
  quote: string;
  before: string;
  after: string;
};

export const transformations: Transformation[] = [
  {
    name: "Rahul S.",
    duration: "6 months",
    result: "Lost 18 kg",
    quote: "Coach's diet plan and the supportive environment changed my life. Best decision ever.",
    before: "https://images.unsplash.com/photo-1532635241-17e820acc59f?w=600&q=70",
    after: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&q=70",
  },
  {
    name: "Priya M.",
    duration: "4 months",
    result: "Toned & Stronger",
    quote: "The ladies-only batch made me feel comfortable from day one. I gained real strength.",
    before: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=70",
    after: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=70",
  },
  {
    name: "Amit K.",
    duration: "8 months",
    result: "Gained 12 kg lean mass",
    quote: "From skinny to competition-ready. The coaching here is top-tier.",
    before: "https://images.unsplash.com/photo-1583500178690-f7fd39b5cb04?w=600&q=70",
    after: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=70",
  },
];
