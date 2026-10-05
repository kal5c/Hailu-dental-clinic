export const CLINIC = {
  name: "Hailu Speciality Dental Clinic",
  email: "mahihailu13@gmail.com",
  /** Printed on the clinic card and building sign — use for WhatsApp / Telegram. */
  chatE164: "251995489692",
  googleRating: "4.7",
  googleReviewCount: "30+",
  googleReviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Hailu+Speciality+Dental+Clinic+Adonai+22+Addis+Ababa",
};

export const whatsappLink = (text = "") => {
  const base = `https://wa.me/${CLINIC.chatE164}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
};

export const telegramLink = () =>
  `tg://resolve?phone=${CLINIC.chatE164}`;

export const mapsEmbedUrl = (query) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=16&output=embed`;

export const mapsDirectionsUrl = (query) =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`;

export const LOCATIONS = [
  {
    id: "summit",
    nameKey: "loc.summit.name",
    addressKey: "loc.summit.address",
    hoursKey: "loc.hours",
    phoneDisplay: "093 828 3333",
    phoneTel: "+251938283333",
    extraPhoneDisplay: "099 548 9692",
    extraPhoneTel: "+251995489692",
    mapsQuery:
      "Hailu Speciality Dental Clinic Summit Fiyel Bet Abagada Addis Ababa",
  },
  {
    id: "branch2",
    nameKey: "loc.branch2.name",
    addressKey: "loc.branch2.address",
    hoursKey: "loc.hours",
    phoneDisplay: "090 728 3333",
    phoneTel: "+251907283333",
    extraPhoneDisplay: null,
    extraPhoneTel: null,
    mapsQuery:
      "Hailu Speciality Dental Clinic Adonai Building 22 Addis Ababa",
  },
];

export const SERVICES = [
  {
    id: "general",
    titleKey: "svc.general.title",
    descKey: "svc.general.desc",
    icon: "Stethoscope",
    priceKey: "svc.general.price",
  },
  {
    id: "cosmetic",
    titleKey: "svc.cosmetic.title",
    descKey: "svc.cosmetic.desc",
    icon: "Smile",
    priceKey: "svc.cosmetic.price",
  },
  {
    id: "orthodontics",
    titleKey: "svc.ortho.title",
    descKey: "svc.ortho.desc",
    icon: "ShieldCheck",
    priceKey: "svc.ortho.price",
  },
  {
    id: "implants",
    titleKey: "svc.implants.title",
    descKey: "svc.implants.desc",
    icon: "CheckCircle2",
    priceKey: "svc.implants.price",
  },
];

/** Real quotes from the Hailu Speciality Dental Clinic (22 / Adonai) Google listing. */
export const GOOGLE_REVIEWS = [
  {
    id: "r1",
    text: "Its best dental clinic in 22 & bole. I'm satisfied by service and fair price.",
    source: "Google",
    branch: "22 Branch",
    rating: 5,
  },
  {
    id: "r2",
    text: "This clinic has a very nice service with an appealing interior. It is neat and I like how the Doctor treats the patients and how professional she is.",
    source: "Google",
    branch: "22 Branch",
    rating: 5,
  },
  {
    id: "r3",
    text: "Hailu is the best dental & best customer service.",
    source: "Google",
    branch: "22 Branch",
    rating: 5,
  },
];
