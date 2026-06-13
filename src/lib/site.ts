export const site = {
  name: "Universal Gym",
  location: "Umred",
  tagline: "Biggest & Most Affordable Gym in Nagpur & Umred",
  taglineMr: "नागपूर आणि उमरेड मधील सर्वात मोठा आणि परवडणारा जिम",
  proof: {
    googleRating: 4.8,
    reviewCount: 127,
    activeMembers: 500,
    coachExperienceYears: 10,
    areaSqFt: 5000,
    machines: 50,
    startingPrice: 700,
    noJoiningFee: true,
    ladiesBatchTime: "4:00 PM – 5:00 PM",
  },
  phone: "+91 90000 00000",
  whatsapp: "919000000000", // wa.me format, no +
  email: "contact@universalgymumred.com",
  address: "Main Road, Umred, Nagpur, Maharashtra 441204",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29773.36!2d79.32!3d20.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVW1yZWQ!5e0!3m2!1sen!2sin!4v1700000000000",
  hours: [
    { day: "Mon – Sat (Morning)", time: "6:00 AM – 10:30 AM" },
    { day: "Mon – Sat (Evening)", time: "4:00 PM – 10:00 PM" },
    { day: "Ladies Only Batch", time: "4:00 PM – 5:00 PM" },
  ],
};

export const waLink = (msg = "Hi! I want to know more about Universal Gym Umred.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
