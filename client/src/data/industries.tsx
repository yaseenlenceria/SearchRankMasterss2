export interface IndustryContentSection {
  title: string;
  content: string;
}

export interface Industry {
  id: number;
  slug: string;
  name: string;
  shortDescription: string;
  metaDescription: string;
  heroDescription: string;
  imageUrl: string;
  contentSections: IndustryContentSection[];
  services: string[]; // Service slugs
}

export const industries: Industry[] = [
  {
    id: 1,
    slug: "legal",
    name: "Legal",
    shortDescription: "Law firms, attorneys, legal consultants",
    metaDescription: "Specialized web design and SEO services for law firms and attorneys in Los Angeles. We help legal practices attract more clients and grow their business.",
    heroDescription: "Attract more clients and establish authority with strategic digital marketing tailored for legal professionals.",
    imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    contentSections: [
      {
        title: "Digital Marketing for Law Firms",
        content: "The legal industry is highly competitive, especially in Los Angeles. Our specialized digital marketing strategies help law firms and attorneys stand out online and attract qualified leads. We understand the unique challenges faced by legal professionals and create websites and marketing campaigns that establish credibility, communicate expertise, and generate client inquiries."
      },
      {
        title: "Web Design for Legal Professionals",
        content: "Your law firm's website is often the first impression potential clients have of your practice. We create professional, authoritative websites for legal professionals that inspire trust, clearly communicate your services, and encourage potential clients to reach out. Our designs incorporate legal industry best practices while differentiating your firm from competitors."
      },
      {
        title: "SEO for Law Firms",
        content: "Our legal SEO strategies focus on helping your practice rank for competitive, high-intent keywords that potential clients are searching for. From practice area pages to blog content that demonstrates your expertise, we implement comprehensive SEO strategies tailored to the legal industry. We understand lawyer advertising rules and ensure all marketing meets ethical guidelines while effectively attracting new clients."
      }
    ],
    services: [
      "web-design", 
      "search-engine-optimization", 
      "content-marketing", 
      "local-seo", 
      "web-design-wordpress"
    ]
  },
  {
    id: 2,
    slug: "health",
    name: "Healthcare",
    shortDescription: "Doctors, dentists, medical practices",
    metaDescription: "Specialized web design and digital marketing services for healthcare providers in Los Angeles. We help medical practices attract more patients and grow their business.",
    heroDescription: "Attract more patients and build trust with digital marketing strategies designed for healthcare professionals.",
    imageUrl: "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    contentSections: [
      {
        title: "Healthcare Digital Marketing",
        content: "In the competitive Los Angeles healthcare market, having a strong online presence is essential. We develop comprehensive digital marketing strategies that help medical practices, dental offices, and other healthcare providers attract new patients while maintaining HIPAA compliance and building trust with prospective patients."
      },
      {
        title: "Medical Practice Web Design",
        content: "We create patient-focused websites for healthcare providers that are informative, accessible, and conversion-oriented. Our healthcare website designs focus on patient education, service promotion, and generating appointment requests. We incorporate features like online scheduling, patient forms, and virtual consultation capabilities to improve patient experience."
      },
      {
        title: "Healthcare SEO and Content Strategy",
        content: "Our healthcare SEO strategies help medical practices rank for relevant searches in their specialty and location. We develop medically accurate content that demonstrates your expertise while being accessible to patients. From condition and treatment pages to patient education resources, our content strategy positions you as a trusted healthcare provider."
      }
    ],
    services: [
      "web-design", 
      "search-engine-optimization", 
      "local-seo", 
      "content-marketing", 
      "social-media-marketing"
    ]
  },
  {
    id: 3,
    slug: "finance",
    name: "Finance",
    shortDescription: "Accounting, insurance, financial services",
    metaDescription: "Specialized web design and digital marketing for financial services businesses in Los Angeles. We help financial advisors, accountants, and insurance agencies attract more clients.",
    heroDescription: "Build credibility and attract qualified leads with digital strategies designed for financial service providers.",
    imageUrl: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    contentSections: [
      {
        title: "Financial Services Digital Marketing",
        content: "Trust and credibility are paramount in the financial services industry. Our digital marketing strategies for financial professionals focus on establishing authority, communicating expertise, and generating qualified leads. We help accountants, financial advisors, insurance agencies, and other financial service providers grow their client base through strategic online marketing."
      },
      {
        title: "Finance Industry Web Design",
        content: "We design professional websites for financial service providers that inspire trust and drive conversions. Our finance websites clearly communicate your services, credentials, and expertise while making it easy for potential clients to take the next step. We incorporate compliance requirements while creating an engaging user experience that converts visitors into leads."
      },
      {
        title: "SEO for Financial Services",
        content: "Our financial services SEO strategies help you rank for valuable search terms that potential clients use when looking for financial expertise. We develop industry-specific content that demonstrates your knowledge and addresses common questions and concerns. Our approach balances regulatory compliance with effective marketing to drive qualified traffic to your website."
      }
    ],
    services: [
      "web-design", 
      "search-engine-optimization", 
      "content-marketing", 
      "local-seo", 
      "web-design-wordpress"
    ]
  },
  {
    id: 4,
    slug: "education-colleges",
    name: "Education",
    shortDescription: "Schools, colleges, educational services",
    metaDescription: "Specialized web design and digital marketing for educational institutions in Los Angeles. We help schools, colleges, and educational services attract more students.",
    heroDescription: "Increase enrollment and showcase your educational offerings with digital strategies designed for educational institutions.",
    imageUrl: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    contentSections: [
      {
        title: "Education Industry Digital Marketing",
        content: "Educational institutions face unique challenges in the digital landscape. We develop comprehensive marketing strategies that help schools, colleges, and educational service providers increase enrollment, showcase their programs, and communicate their value proposition to prospective students and parents."
      },
      {
        title: "Educational Website Design",
        content: "We create engaging, informative websites for educational institutions that effectively communicate your offerings and inspire action. Our education website designs balance information accessibility with conversion focus, making it easy for prospective students to find program details, admissions requirements, and application processes while encouraging them to take the next step."
      },
      {
        title: "SEO and Content Strategy for Education",
        content: "Our education-focused SEO strategies help your institution rank for program-related searches and location-based queries. We develop content that showcases your faculty expertise, student outcomes, and educational approach while optimizing for search engines. From program pages to student resources, our content strategy positions your institution as a leader in education."
      }
    ],
    services: [
      "web-design", 
      "search-engine-optimization", 
      "content-marketing", 
      "social-media-marketing", 
      "web-development"
    ]
  },
  {
    id: 5,
    slug: "home-repair-roofing",
    name: "Home Services",
    shortDescription: "Contractors, home repair, maintenance",
    metaDescription: "Specialized web design and digital marketing for home service businesses in Los Angeles. We help contractors, roofers, plumbers, and other home service providers attract more customers.",
    heroDescription: "Generate qualified leads and grow your home service business with digital strategies designed for contractors and service providers.",
    imageUrl: "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    contentSections: [
      {
        title: "Home Services Digital Marketing",
        content: "The home service industry is highly competitive in Los Angeles. Our digital marketing strategies help contractors, roofers, plumbers, electricians, and other home service providers generate qualified leads and build a strong online reputation. We focus on showcasing your work, highlighting your expertise, and making it easy for potential customers to contact you."
      },
      {
        title: "Contractor Website Design",
        content: "We create conversion-focused websites for home service businesses that turn visitors into leads. Our contractor website designs prominently feature your services, service areas, testimonials, and completed projects while encouraging visitors to request quotes or estimates. We incorporate lead generation features like contact forms, click-to-call, and service area maps."
      },
      {
        title: "Local SEO for Home Service Providers",
        content: "Our local SEO strategies help home service businesses dominate local search results in their service areas. We optimize your Google Business Profile, build local citations, and develop location-specific content that helps you rank for service + location keywords. Our approach focuses on connecting with homeowners actively searching for your services in your service areas."
      }
    ],
    services: [
      "web-design", 
      "local-seo", 
      "search-engine-optimization", 
      "ppc-management", 
      "web-design-wordpress"
    ]
  },
  {
    id: 6,
    slug: "professional-services",
    name: "Professional Services",
    shortDescription: "Consultants, agencies, business services",
    metaDescription: "Specialized web design and digital marketing for professional service businesses in Los Angeles. We help consultants, agencies, and B2B service providers attract more clients.",
    heroDescription: "Establish authority and generate high-quality leads with digital strategies designed for professional service providers.",
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    contentSections: [
      {
        title: "Professional Services Digital Marketing",
        content: "Professional service providers need digital marketing strategies that establish authority and generate qualified leads. We help consultants, agencies, and B2B service providers in Los Angeles develop comprehensive digital strategies that showcase their expertise, communicate their value proposition, and convert visitors into clients."
      },
      {
        title: "B2B Website Design",
        content: "We create professional, conversion-focused websites for B2B service providers that effectively communicate your offerings and generate leads. Our B2B website designs balance professionalism with persuasion, clearly articulating your services, approach, and results while encouraging potential clients to take the next step in the sales process."
      },
      {
        title: "Content Marketing for Professional Services",
        content: "Our content marketing strategies for professional service providers focus on demonstrating expertise and addressing client pain points. We develop thought leadership content, case studies, whitepapers, and other resources that position you as a leader in your field while generating leads. Our approach balances educational content with strategic calls to action."
      }
    ],
    services: [
      "web-design", 
      "content-marketing", 
      "search-engine-optimization", 
      "conversion-rate-optimization", 
      "web-development"
    ]
  },
  {
    id: 7,
    slug: "automotive",
    name: "Automotive",
    shortDescription: "Auto dealers, repair shops, services",
    metaDescription: "Specialized web design and digital marketing for automotive businesses in Los Angeles. We help dealerships, repair shops, and auto service providers attract more customers.",
    heroDescription: "Drive more customers to your automotive business with digital strategies designed for the auto industry.",
    imageUrl: "https://images.unsplash.com/photo-1567360425618-1594206637d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    contentSections: [
      {
        title: "Automotive Digital Marketing",
        content: "The automotive industry is highly competitive in Los Angeles. Our digital marketing strategies help dealerships, repair shops, body shops, and other automotive businesses attract customers searching for vehicles or services online. We focus on showcasing your inventory or services, building trust, and generating leads or shop visits."
      },
      {
        title: "Automotive Website Design",
        content: "We create user-friendly websites for automotive businesses that effectively display inventory or services and drive conversions. Our automotive website designs incorporate inventory management, appointment scheduling, and lead generation features while providing an exceptional user experience on all devices."
      },
      {
        title: "Local SEO for Automotive Businesses",
        content: "Our local SEO strategies help automotive businesses rank for relevant searches in their area. We optimize your Google Business Profile, build local citations, and develop location-specific content that helps you appear in map results and local searches. Our approach focuses on connecting with customers when they're actively searching for automotive services or vehicles."
      }
    ],
    services: [
      "web-design", 
      "local-seo", 
      "search-engine-optimization", 
      "social-media-marketing", 
      "ppc-management"
    ]
  }
];
