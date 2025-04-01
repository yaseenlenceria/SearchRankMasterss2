export interface CaseStudyTestimonial {
  quote: string;
  author: string;
  position: string;
}

export interface CaseStudyResults {
  mainResult: string;
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
  stat3Value: string;
  stat3Label: string;
  description: string;
}

export interface CaseStudy {
  id: number;
  slug: string;
  clientName: string;
  industry: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  challenge: string;
  solution: string;
  results: CaseStudyResults;
  testimonial?: CaseStudyTestimonial;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    slug: "cal-dental-group",
    clientName: "Cal Dental Group",
    industry: "Healthcare",
    shortDescription: "Increased new patient appointments by 175% through strategic SEO and website redesign.",
    fullDescription: "Cal Dental Group, a multi-location dental practice in Los Angeles, was struggling to attract new patients despite their excellent reputation. We helped them transform their online presence with a complete website redesign and comprehensive SEO strategy.",
    imageUrl: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    challenge: "Cal Dental Group was facing intense competition in the Los Angeles dental market. Their outdated website failed to convey their expertise and range of services, and they had minimal visibility in search results. Despite having multiple locations, they were not appearing in local searches, and their online appointment booking system was underutilized. They needed a comprehensive digital strategy to increase their online visibility and convert more visitors into new patients.",
    solution: "We developed a multi-faceted approach to transform Cal Dental Group's online presence. First, we redesigned their website with a focus on user experience and conversion optimization, highlighting their services, dentist credentials, and patient testimonials. We implemented location-specific pages for each office and optimized their Google Business Profiles. Our SEO strategy included targeted keyword research for dental services and locations, on-page optimization, and a content marketing plan featuring educational dental articles. We also implemented a streamlined online booking system and deployed a review generation campaign to build social proof.",
    results: {
      mainResult: "a 175% increase in new patient appointments",
      stat1Value: "175%",
      stat1Label: "Increase in new patient appointments",
      stat2Value: "320%",
      stat2Label: "Improvement in organic search traffic",
      stat3Value: "89%",
      stat3Label: "Increase in appointment conversion rate",
      description: "Within six months of implementing our strategy, Cal Dental Group saw a dramatic improvement in their online performance. Organic search traffic increased by 320%, with first-page rankings for 45 high-value dental keywords across Los Angeles neighborhoods. Their appointment conversion rate increased from 4.5% to 8.5%, and they saw a 175% increase in new patient appointments generated through their website. The practice was able to expand its services and hire two additional dentists to meet the increased demand."
    },
    testimonial: {
      quote: "LumeWeb Studios completely transformed our online presence. Our new website not only looks fantastic but has significantly increased our new patient inquiries. Their SEO strategy has put us on the first page of Google for our key services, and the results far exceeded our expectations.",
      author: "Dr. David Chen",
      position: "Founder, Cal Dental Group"
    }
  },
  {
    id: 2,
    slug: "ata-college",
    clientName: "ATA College",
    industry: "Education",
    shortDescription: "Boosted enrollment applications by 220% with comprehensive digital marketing campaign.",
    fullDescription: "ATA College, a vocational school in Los Angeles, needed to increase program enrollment in a competitive education market. We developed a comprehensive digital marketing strategy that significantly increased their visibility and application submissions.",
    imageUrl: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    challenge: "ATA College was struggling with low enrollment numbers despite offering high-quality vocational programs. Their digital presence was minimal, with an outdated website that provided little information about their programs and offered no way to request information or apply online. They were invisible in search results for relevant educational keywords, and their social media presence was almost non-existent. The college needed a complete digital transformation to reach potential students and compete with larger educational institutions in the Los Angeles area.",
    solution: "We implemented a comprehensive digital strategy for ATA College. This included a complete website redesign with detailed program pages, student testimonials, career outcome statistics, and streamlined application forms. We developed an SEO strategy targeting educational keywords relevant to their programs and location. Our content marketing plan included blog posts addressing career questions, program comparisons, and student success stories. We also launched targeted social media campaigns on platforms popular with their prospective student demographic, including Instagram and TikTok. Additionally, we implemented a PPC campaign targeting high-intent keywords.",
    results: {
      mainResult: "a 220% increase in program applications",
      stat1Value: "220%",
      stat1Label: "Increase in program applications",
      stat2Value: "450%",
      stat2Label: "Increase in website traffic",
      stat3Value: "65%",
      stat3Label: "Reduction in cost per enrollment lead",
      description: "The results of our campaign exceeded ATA College's expectations. Within eight months, their website traffic increased by 450%, with significant improvements in engagement metrics. The streamlined application process increased conversion rates from 3% to 7.5%. Overall, program applications increased by 220%, allowing the college to expand their class sizes and add new program offerings. Their social media following grew by over 300%, creating an engaged community of current and prospective students. Additionally, their PPC campaign achieved a 65% reduction in cost per lead compared to their previous advertising efforts."
    },
    testimonial: {
      quote: "LumeWeb Studios revolutionized our recruitment process. Their strategic approach to digital marketing helped us reach students we never could before. The quality of our website and digital presence now matches the quality of our educational programs, and our enrollment numbers reflect that improvement.",
      author: "Jennifer Lopez",
      position: "Director of Admissions, ATA College"
    }
  },
  {
    id: 3,
    slug: "la-star-insurance",
    clientName: "LA Star Insurance",
    industry: "Finance",
    shortDescription: "Generated 312% ROI on digital marketing spend with targeted local SEO campaign.",
    fullDescription: "LA Star Insurance, an independent insurance agency, was struggling to generate leads in the competitive Los Angeles market. Our targeted local SEO and content marketing strategy helped them dramatically increase their online visibility and lead generation.",
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    challenge: "LA Star Insurance faced significant challenges in generating leads and competing with larger insurance providers. Their website had poor visibility in search results, limited content about their insurance offerings, and ineffective lead generation forms. They were relying primarily on referrals and some offline advertising, but needed a stronger online presence to grow their business. Additionally, they needed to differentiate themselves from other independent insurance agencies in the Los Angeles area.",
    solution: "We developed a comprehensive digital marketing strategy focused on local SEO and content marketing. We redesigned their website with a focus on conversion optimization, creating dedicated pages for each insurance type they offered. Our local SEO campaign included Google Business Profile optimization, local citation building, and neighborhood-targeted content development. We implemented a content marketing strategy focusing on educational insurance articles addressing common questions and concerns. We also created a lead generation system with tailored quote request forms for each insurance type and implemented automated follow-up sequences for leads.",
    results: {
      mainResult: "a 312% ROI on their digital marketing investment",
      stat1Value: "312%",
      stat1Label: "ROI on digital marketing spend",
      stat2Value: "195%",
      stat2Label: "Increase in quote requests",
      stat3Value: "23%",
      stat3Label: "Improvement in lead-to-customer conversion",
      description: "LA Star Insurance saw remarkable results from our digital marketing campaign. Their organic search traffic increased by 245% within six months, and they achieved first-page rankings for 28 high-value insurance keywords in Los Angeles. Quote requests through their website increased by 195%, and their improved lead nurturing process led to a 23% improvement in lead-to-customer conversion rates. Overall, they achieved a 312% ROI on their digital marketing investment within the first year, allowing them to expand their team and open a second office location."
    },
    testimonial: {
      quote: "The team at LumeWeb Studios provided exceptional service from start to finish. They took the time to understand our business goals and delivered a strategy that perfectly addresses our needs. The results have been outstanding - we're generating more leads than ever before, and the quality of those leads is much higher.",
      author: "Michael Rodriguez",
      position: "Owner, LA Star Insurance"
    }
  },
  {
    id: 4,
    slug: "solid-care-hospice",
    clientName: "Solid Care Hospice",
    industry: "Healthcare",
    shortDescription: "Expanded service reach and increased referrals by 135% through targeted digital strategy.",
    fullDescription: "Solid Care Hospice needed to raise awareness about their compassionate end-of-life care services and increase referrals from both families and healthcare providers in Los Angeles.",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    challenge: "Solid Care Hospice was providing exceptional end-of-life care but struggling to reach families in need and healthcare providers who could refer patients. Their online presence was minimal, with an outdated website that failed to communicate their compassionate approach and range of services. They were virtually invisible in online searches, and their sensitive services required careful, thoughtful marketing communications. They needed a digital strategy that would increase awareness while respecting the delicate nature of hospice care.",
    solution: "We created a comprehensive digital strategy that sensitively addressed the nature of hospice care. This included a complete website redesign with a warm, compassionate aesthetic, clear information about services, and separate sections targeting families and healthcare providers. We developed an SEO strategy focused on educational content about hospice care options, end-of-life planning, and caregiver support. We created dedicated landing pages for different service areas within Los Angeles and implemented a content marketing strategy featuring informative resources, guides, and patient stories (with appropriate permissions). We also developed targeted outreach campaigns for healthcare providers and facilities.",
    results: {
      mainResult: "a 135% increase in service referrals",
      stat1Value: "135%",
      stat1Label: "Increase in service referrals",
      stat2Value: "275%",
      stat2Label: "Increase in website traffic",
      stat3Value: "210%",
      stat3Label: "Growth in healthcare provider inquiries",
      description: "Within nine months of implementing our strategy, Solid Care Hospice saw significant improvements in their online performance and referral numbers. Website traffic increased by 275%, with visitors spending more time on educational content pages. Family inquiries increased by 165%, and healthcare provider inquiries grew by 210%. Overall, service referrals increased by 135%, allowing the hospice to expand their care team and service area. They became recognized as a leading resource for end-of-life care information in Los Angeles, further establishing their authority in the field."
    },
    testimonial: {
      quote: "LumeWeb Studios approached our sensitive services with the exact right tone and strategy. They understood that behind every search for hospice services is a family in need of compassionate care. Our new website and digital presence have helped us reach more families during difficult times, which is exactly what we hoped to achieve.",
      author: "Maria Sanchez",
      position: "Executive Director, Solid Care Hospice"
    }
  },
  {
    id: 5,
    slug: "staffing-hut",
    clientName: "Staffing Hut",
    industry: "Professional Services",
    shortDescription: "Increased qualified candidate applications by 185% and client inquiries by 92%.",
    fullDescription: "Staffing Hut, a specialized recruitment agency in Los Angeles, needed to attract both quality job candidates and business clients in a competitive market. Our dual-focused digital strategy helped them achieve significant growth on both fronts.",
    imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    challenge: "Staffing Hut faced the unique challenge of needing to attract two distinct audiences: job seekers and businesses needing staffing services. Their existing website failed to effectively address either audience, and their job listings had poor visibility in search results. Their social media presence was inconsistent, and they had no content marketing strategy to establish their expertise in the staffing industry. They were losing potential candidates and clients to larger staffing agencies with stronger digital presences.",
    solution: "We developed a dual-focused digital strategy to address both key audiences. This included a website redesign with distinct pathways for job seekers and employers, featuring a user-friendly job board and detailed information about staffing services. We implemented an SEO strategy targeting both job-related keywords and staffing service terms, and created location-specific landing pages for different industries they served. Our content marketing plan included resources for both job seekers and employers, such as interview tips, hiring guides, and industry salary reports. We also launched targeted social media campaigns on LinkedIn and Instagram, and implemented an email marketing strategy for both candidate and client nurturing.",
    results: {
      mainResult: "significant growth in both candidate applications and client inquiries",
      stat1Value: "185%",
      stat1Label: "Increase in qualified candidate applications",
      stat2Value: "92%",
      stat2Label: "Growth in client inquiries",
      stat3Value: "143%",
      stat3Label: "Increase in successful placements",
      description: "Staffing Hut experienced impressive results from our dual-focused strategy. Within seven months, qualified candidate applications increased by 185%, allowing them to build a stronger talent pool across multiple industries. Business client inquiries grew by 92%, with a higher percentage of inquiries coming from their target industries. Their improved digital presence and streamlined processes led to a 143% increase in successful placements. The quality of both candidates and client inquiries improved significantly, leading to higher satisfaction rates and more repeat business. Their content resources established them as a thought leader in specialized staffing, further differentiating them from competitors."
    },
    testimonial: {
      quote: "Working with LumeWeb Studios transformed our recruitment agency's digital presence. Their dual strategy approach perfectly addressed our need to attract both quality candidates and business clients. The results have exceeded our expectations - we're making more placements with better candidates, and our client list continues to grow each month.",
      author: "Robert Thompson",
      position: "CEO, Staffing Hut"
    }
  },
  {
    id: 6,
    slug: "sochiedu",
    clientName: "SochiEdu",
    industry: "Education",
    shortDescription: "Expanded online course enrollments by 240% through targeted digital marketing.",
    fullDescription: "SochiEdu, an online education platform specializing in professional development courses, needed to increase course enrollments and establish their brand in a crowded market. Our comprehensive digital strategy helped them achieve significant growth.",
    imageUrl: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    challenge: "SochiEdu was struggling to gain traction in the competitive online education market. Their course offerings were high-quality, but they had limited visibility in search results and low conversion rates on their website. Their marketing was inconsistent across channels, and they lacked a cohesive content strategy to demonstrate their expertise. Additionally, they needed to differentiate themselves from larger, more established online learning platforms while operating with a limited marketing budget.",
    solution: "We developed a comprehensive digital strategy focused on establishing SochiEdu's unique position in the market. This included a website redesign emphasizing their specialized professional development courses and instructor expertise. We implemented an SEO strategy targeting specific course-related keywords and created in-depth course landing pages optimized for conversion. Our content marketing plan included free educational resources, industry trend reports, and success stories to demonstrate value. We launched targeted social media and PPC campaigns focused on their most profitable course categories, and implemented an email marketing strategy with automated course recommendation sequences based on user interests.",
    results: {
      mainResult: "a 240% increase in course enrollments",
      stat1Value: "240%",
      stat1Label: "Increase in course enrollments",
      stat2Value: "195%",
      stat2Label: "Growth in website traffic",
      stat3Value: "68%",
      stat3Label: "Improvement in conversion rate",
      description: "SochiEdu saw remarkable results from our digital marketing strategy. Within six months, their website traffic increased by 195%, with significant improvements in user engagement metrics. Their conversion rate improved from 1.8% to 3.0%, representing a 68% increase. Overall course enrollments grew by 240%, with their featured courses seeing even higher growth rates. Their free resources generated a substantial email list of prospects, creating a valuable marketing channel for new course launches. Their cost per acquisition decreased by 42%, allowing for more efficient scaling of their marketing efforts."
    },
    testimonial: {
      quote: "LumeWeb Studios helped us transform from a struggling education startup to a profitable online learning platform. Their strategic approach to digital marketing identified exactly where to focus our limited resources for maximum impact. The growth we've experienced in both traffic and enrollments has been incredible.",
      author: "Elena Sochilov",
      position: "Founder, SochiEdu"
    }
  }
];
