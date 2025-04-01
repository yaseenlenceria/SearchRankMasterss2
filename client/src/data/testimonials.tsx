export interface Testimonial {
  id: number;
  name: string;
  company: string;
  position: string;
  quote: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. David Chen",
    company: "Cal Dental Group",
    position: "Founder",
    quote: "LumeWeb Studios completely transformed our online presence. Our new website not only looks fantastic but has significantly increased our new patient inquiries. Their SEO strategy has put us on the first page of Google for our key services.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Sarah Matthews",
    company: "Matthews Law Group",
    position: "Managing Partner",
    quote: "Working with LumeWeb Studios has been a game-changer for our law firm. Their understanding of our industry and target audience helped create a website that resonates with potential clients. The results speak for themselves – our client inquiries have doubled.",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Michael Rodriguez",
    company: "LA Star Insurance",
    position: "Owner",
    quote: "The team at LumeWeb Studios provided exceptional service from start to finish. They took the time to understand our business goals and delivered a website that perfectly represents our brand. Their ongoing SEO support has been invaluable.",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg"
  },
  {
    id: 4,
    name: "Jennifer Lopez",
    company: "ATA College",
    position: "Director of Admissions",
    quote: "LumeWeb Studios revolutionized our recruitment process. Their strategic approach to digital marketing helped us reach students we never could before. The quality of our website and digital presence now matches the quality of our educational programs.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 5,
    name: "Robert Thompson",
    company: "Staffing Hut",
    position: "CEO",
    quote: "Working with LumeWeb Studios transformed our recruitment agency's digital presence. Their dual strategy approach perfectly addressed our need to attract both quality candidates and business clients. The results have exceeded our expectations.",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg"
  },
  {
    id: 6,
    name: "Maria Sanchez",
    company: "Solid Care Hospice",
    position: "Executive Director",
    quote: "LumeWeb Studios approached our sensitive services with the exact right tone and strategy. They understood that behind every search for hospice services is a family in need of compassionate care. Our new website has helped us reach more families in need.",
    avatar: "https://randomuser.me/api/portraits/women/74.jpg"
  }
];
