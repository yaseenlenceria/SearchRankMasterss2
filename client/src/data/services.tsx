export interface ServiceContent {
  title: string;
  content: string;
  listItems?: string[];
}

export interface Service {
  id: number;
  slug: string;
  title: string;
  shortDescription: string;
  metaDescription: string;
  heroDescription: string;
  heroImage: string;
  contentTitle: string;
  contentSections: ServiceContent[];
}

export const services: Service[] = [
  {
    id: 1,
    slug: "web-design",
    title: "Web Design",
    shortDescription: "Custom, responsive websites built to convert visitors into customers.",
    metaDescription: "Professional web design services in Los Angeles. We create stunning, responsive websites that drive conversions and grow your business. Get a free consultation.",
    heroDescription: "Create a stunning, conversion-focused website that represents your brand and drives business growth.",
    heroImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    contentTitle: "Professional Web Design Services in Los Angeles",
    contentSections: [
      {
        title: "Custom Website Design for LA Businesses",
        content: "At LumeWeb Studios, we design websites that not only look great but also drive results. Our custom web design services focus on creating an optimal user experience that guides visitors toward conversion while reflecting your unique brand identity.",
        listItems: [
          "Responsive designs that work on all devices",
          "Custom layouts tailored to your business goals",
          "User-friendly navigation and intuitive interfaces",
          "Brand-aligned visuals and messaging",
          "SEO-friendly structure from the ground up"
        ]
      },
      {
        title: "Our Web Design Process",
        content: "We follow a collaborative, strategic approach to web design that ensures your website effectively meets both your business objectives and your customers' needs.",
        listItems: [
          "Discovery and research to understand your business and audience",
          "Strategic planning and information architecture",
          "Wireframing and prototyping to refine the user experience",
          "Visual design that captures your brand essence",
          "Development using the latest technologies",
          "Testing across devices and browsers",
          "Launch and post-launch support"
        ]
      },
      {
        title: "Why Choose LumeWeb Studios for Web Design",
        content: "Our team combines creative design skills with technical expertise and marketing knowledge to deliver websites that not only look professional but also perform exceptionally well.",
        listItems: [
          "Experienced designers specialized in business websites",
          "Focus on conversion-oriented design principles",
          "Integration of SEO best practices from the start",
          "Custom solutions tailored to your specific industry",
          "Ongoing support and website maintenance"
        ]
      }
    ]
  },
  {
    id: 2,
    slug: "search-engine-optimization",
    title: "Search Engine Optimization",
    shortDescription: "Data-driven SEO strategies to improve rankings and drive quality traffic.",
    metaDescription: "Expert SEO services in Los Angeles that improve your search rankings and drive quality traffic to your website. Get a free SEO audit today.",
    heroDescription: "Boost your online visibility and attract more customers with our results-driven SEO strategies.",
    heroImage: "https://images.unsplash.com/photo-1571251638931-9a1af3a9a239?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    contentTitle: "Comprehensive SEO Services for Los Angeles Businesses",
    contentSections: [
      {
        title: "Data-Driven SEO Strategies",
        content: "Our SEO approach is founded on thorough research, detailed analysis, and strategic implementation. We develop customized SEO plans that address your specific business goals and market position.",
        listItems: [
          "Comprehensive SEO audits and competitor analysis",
          "Strategic keyword research and targeting",
          "On-page optimization for content and structure",
          "Technical SEO improvements for better performance",
          "Quality link building and off-page strategies",
          "Regular reporting and strategy refinement"
        ]
      },
      {
        title: "Local SEO for Los Angeles Businesses",
        content: "As a Los Angeles-based agency, we specialize in helping local businesses dominate their geographic market through targeted local SEO strategies.",
        listItems: [
          "Google Business Profile optimization",
          "Local citation building and management",
          "Neighborhood and city-specific keyword targeting",
          "Local link building with relevant businesses",
          "Review management and reputation building"
        ]
      },
      {
        title: "Industry-Specific SEO Expertise",
        content: "We understand that different industries have unique SEO challenges and opportunities. Our team has developed specialized expertise across multiple sectors to deliver tailored solutions.",
        listItems: [
          "Legal industry SEO for law firms and attorneys",
          "Healthcare SEO for medical practices and providers",
          "Financial services SEO for accountants and advisors",
          "Construction and home services SEO",
          "Education and professional services optimization"
        ]
      }
    ]
  },
  {
    id: 3,
    slug: "content-marketing",
    title: "Content Marketing",
    shortDescription: "Engaging content that connects with your audience and drives conversions.",
    metaDescription: "Strategic content marketing services in Los Angeles that engage your audience and drive conversions. Expert content creation, strategy, and distribution.",
    heroDescription: "Build authority and engage your audience with compelling content strategies that drive traffic and conversions.",
    heroImage: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    contentTitle: "Content Marketing Services That Drive Results",
    contentSections: [
      {
        title: "Strategic Content Planning",
        content: "We develop comprehensive content strategies that align with your business goals, target audience needs, and search engine requirements.",
        listItems: [
          "Content audit and gap analysis",
          "Audience research and persona development",
          "Keyword and topic research",
          "Content calendar creation",
          "Distribution and promotion planning"
        ]
      },
      {
        title: "Professional Content Creation",
        content: "Our team of experienced writers, designers, and multimedia specialists creates high-quality content that engages your audience and showcases your expertise.",
        listItems: [
          "SEO-optimized blog posts and articles",
          "Website copy that converts",
          "Engaging email marketing campaigns",
          "Visually appealing infographics and images",
          "Video content and scriptwriting",
          "Case studies and white papers"
        ]
      },
      {
        title: "Content Performance Optimization",
        content: "We continuously monitor and optimize your content marketing efforts to maximize ROI and achieve better results over time.",
        listItems: [
          "Content performance tracking and analytics",
          "A/B testing for headlines and formats",
          "Content refresh and updating strategy",
          "Conversion rate optimization",
          "Regular reporting and insights"
        ]
      }
    ]
  },
  {
    id: 4,
    slug: "local-seo",
    title: "Local SEO",
    shortDescription: "Dominate local search results and attract nearby customers.",
    metaDescription: "Dominate local search results with our Los Angeles Local SEO services. We help your business get found by nearby customers actively searching for your services.",
    heroDescription: "Get found by local customers searching for your products and services with targeted local search strategies.",
    heroImage: "https://images.unsplash.com/photo-1569738713551-2958195b458a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    contentTitle: "Local SEO Services for Los Angeles Businesses",
    contentSections: [
      {
        title: "Comprehensive Local Search Optimization",
        content: "Our local SEO services help businesses in Los Angeles and surrounding areas increase their visibility in local search results, driving more foot traffic and local customers.",
        listItems: [
          "Local keyword research and implementation",
          "Google Business Profile optimization and management",
          "Local citation building and cleanup",
          "Local link building strategies",
          "Neighborhood and city-specific targeting"
        ]
      },
      {
        title: "Google Business Profile Management",
        content: "Your Google Business Profile is crucial for local search success. We ensure your profile is fully optimized and actively managed to maximize local visibility.",
        listItems: [
          "Complete profile setup and verification",
          "Keyword-rich business descriptions",
          "Photo and video optimization",
          "Review management and response strategy",
          "Regular posts and updates to keep your profile active"
        ]
      },
      {
        title: "Localized Content Strategy",
        content: "We develop content that resonates with your local audience and helps establish your business as an authority in your local market.",
        listItems: [
          "Location-specific service pages",
          "Local news and events coverage",
          "Neighborhood guides and resources",
          "Location-based case studies and testimonials",
          "Local business spotlights and partnerships"
        ]
      }
    ]
  },
  {
    id: 5,
    slug: "conversion-rate-optimization",
    title: "Conversion Rate Optimization",
    shortDescription: "Turn more visitors into leads and customers with data-backed strategies.",
    metaDescription: "Improve your website's conversion rates with our data-driven CRO services. We help Los Angeles businesses turn more visitors into customers and maximize ROI.",
    heroDescription: "Transform your website into a conversion machine with data-driven strategies that maximize ROI.",
    heroImage: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    contentTitle: "Conversion Rate Optimization Services",
    contentSections: [
      {
        title: "Data-Driven CRO Strategy",
        content: "We use data analysis and user behavior insights to identify optimization opportunities and develop strategies that increase conversions on your website.",
        listItems: [
          "Comprehensive conversion audit",
          "User behavior analysis with heatmaps and session recordings",
          "Conversion funnel analysis and optimization",
          "User experience (UX) assessment",
          "Competitor analysis and benchmarking"
        ]
      },
      {
        title: "CRO Implementation",
        content: "Our team implements targeted changes to your website designed to improve the user experience and guide visitors toward conversion.",
        listItems: [
          "Landing page optimization",
          "Call-to-action (CTA) improvements",
          "Form optimization for higher completion rates",
          "User journey refinement",
          "Page load speed enhancements",
          "Mobile experience optimization"
        ]
      },
      {
        title: "Testing and Continuous Improvement",
        content: "We use scientific testing methodologies to validate changes and continuously refine your website for optimal conversion performance.",
        listItems: [
          "A/B and multivariate testing",
          "User testing and feedback collection",
          "Iterative improvements based on test results",
          "Ongoing performance monitoring",
          "Regular reporting and analysis"
        ]
      }
    ]
  },
  {
    id: 6,
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    shortDescription: "Build brand awareness and engage with your audience on social platforms.",
    metaDescription: "Effective social media marketing services in Los Angeles. We help businesses build brand awareness, engage with customers, and drive growth through strategic social campaigns.",
    heroDescription: "Connect with your audience and build a loyal community through strategic social media marketing.",
    heroImage: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    contentTitle: "Social Media Marketing Services for Los Angeles Businesses",
    contentSections: [
      {
        title: "Strategic Social Media Planning",
        content: "We develop comprehensive social media strategies aligned with your business goals and target audience preferences.",
        listItems: [
          "Social media audit and competitive analysis",
          "Platform selection and prioritization",
          "Content strategy and calendar development",
          "Growth and engagement planning",
          "Campaign development and execution"
        ]
      },
      {
        title: "Content Creation and Curation",
        content: "Our team creates engaging, brand-aligned social media content that resonates with your audience and drives engagement.",
        listItems: [
          "Custom graphics and visual content",
          "Engaging post copywriting",
          "Video content production",
          "User-generated content strategies",
          "Content repurposing across platforms"
        ]
      },
      {
        title: "Community Management and Growth",
        content: "We help you build and nurture an engaged community through active management and strategic growth tactics.",
        listItems: [
          "Audience engagement and response management",
          "Community building activities",
          "Influencer partnership coordination",
          "Hashtag and trend monitoring",
          "Crisis management planning and execution"
        ]
      }
    ]
  },
  {
    id: 7,
    slug: "web-development",
    title: "Web Development",
    shortDescription: "Custom website development with modern technologies and best practices.",
    metaDescription: "Professional web development services in Los Angeles. We build custom, high-performance websites using the latest technologies. Get a quote today.",
    heroDescription: "Build a website that performs as good as it looks with our expert web development services.",
    heroImage: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    contentTitle: "Expert Web Development Services",
    contentSections: [
      {
        title: "Custom Website Development",
        content: "We build custom websites that deliver exceptional user experiences while meeting your business objectives and technical requirements.",
        listItems: [
          "Custom WordPress development",
          "E-commerce website development",
          "Web application development",
          "API integrations and custom functionality",
          "Database design and implementation"
        ]
      },
      {
        title: "Technical Expertise",
        content: "Our development team stays current with the latest technologies and best practices to deliver websites that are fast, secure, and future-proof.",
        listItems: [
          "Frontend development (HTML, CSS, JavaScript)",
          "Backend development and CMS implementation",
          "Responsive design and mobile optimization",
          "Performance optimization and speed enhancements",
          "Security implementation and best practices"
        ]
      },
      {
        title: "Ongoing Support and Maintenance",
        content: "We provide comprehensive support and maintenance services to ensure your website continues to perform optimally over time.",
        listItems: [
          "Regular updates and security patches",
          "Performance monitoring and optimization",
          "Backup and recovery solutions",
          "Technical troubleshooting and support",
          "Website enhancements and additions"
        ]
      }
    ]
  },
  {
    id: 8,
    slug: "ppc-management",
    title: "PPC Management",
    shortDescription: "Maximize ROI with targeted pay-per-click advertising campaigns.",
    metaDescription: "Professional PPC management services in Los Angeles. We create and manage high-performance paid advertising campaigns that deliver measurable ROI.",
    heroDescription: "Drive immediate traffic and conversions with expertly managed pay-per-click advertising campaigns.",
    heroImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    contentTitle: "PPC Management Services",
    contentSections: [
      {
        title: "Strategic PPC Campaign Development",
        content: "We create targeted, data-driven PPC campaigns that maximize your advertising budget and drive high-quality traffic to your website.",
        listItems: [
          "Comprehensive account setup and structure",
          "Strategic keyword research and selection",
          "Competitor analysis and positioning",
          "Ad copy development and testing",
          "Landing page optimization for conversions"
        ]
      },
      {
        title: "Platform Expertise",
        content: "Our PPC specialists have deep expertise across multiple advertising platforms to help you reach your target audience wherever they are.",
        listItems: [
          "Google Ads management",
          "Microsoft Advertising (Bing Ads)",
          "Social media advertising (Facebook, Instagram, LinkedIn)",
          "Display and remarketing campaigns",
          "Shopping campaigns for e-commerce"
        ]
      },
      {
        title: "Performance Optimization",
        content: "We continuously monitor and optimize your campaigns to improve performance, reduce costs, and maximize your return on investment.",
        listItems: [
          "Bid management and budget optimization",
          "A/B testing of ad creative and landing pages",
          "Quality score improvements",
          "Negative keyword refinement",
          "Detailed reporting and performance analysis"
        ]
      }
    ]
  },
  {
    id: 9,
    slug: "web-design-wordpress",
    title: "WordPress Web Design",
    shortDescription: "Custom WordPress websites that combine beautiful design with powerful functionality.",
    metaDescription: "Professional WordPress web design services in Los Angeles. We create custom, high-performance WordPress websites tailored to your business needs.",
    heroDescription: "Leverage the world's most popular CMS with a custom WordPress website designed for your unique business needs.",
    heroImage: "https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    contentTitle: "WordPress Web Design Services",
    contentSections: [
      {
        title: "Custom WordPress Development",
        content: "We create custom WordPress websites that go far beyond templates, providing unique designs and functionality tailored to your specific business needs.",
        listItems: [
          "Custom theme development",
          "Responsive design implementation",
          "WordPress plugin customization",
          "Custom post types and taxonomies",
          "Advanced functionality integration"
        ]
      },
      {
        title: "WordPress Optimization",
        content: "Our WordPress sites are built with performance in mind, ensuring fast load times, security, and an optimal user experience.",
        listItems: [
          "Server-side optimization",
          "Caching and performance tuning",
          "Image optimization",
          "Database optimization",
          "Security hardening and best practices"
        ]
      },
      {
        title: "WordPress Maintenance and Support",
        content: "We provide ongoing WordPress maintenance to keep your site secure, up-to-date, and performing at its best.",
        listItems: [
          "Regular WordPress core updates",
          "Theme and plugin updates",
          "Security monitoring and protection",
          "Performance monitoring and optimization",
          "Content updates and management"
        ]
      }
    ]
  },
  {
    id: 10,
    slug: "shopify-web-design",
    title: "Shopify Web Design",
    shortDescription: "Custom Shopify stores designed to showcase your products and drive sales.",
    metaDescription: "Professional Shopify web design services in Los Angeles. We create custom, high-converting Shopify stores that help you sell more products online.",
    heroDescription: "Launch or upgrade your e-commerce store with a custom Shopify website designed to convert visitors into customers.",
    heroImage: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    contentTitle: "Shopify E-Commerce Design Services",
    contentSections: [
      {
        title: "Custom Shopify Store Development",
        content: "We design and develop custom Shopify stores that stand out from the competition and provide an exceptional shopping experience for your customers.",
        listItems: [
          "Custom theme design and development",
          "Responsive and mobile-optimized layouts",
          "Product showcase optimization",
          "Shopping cart and checkout optimization",
          "Cross-selling and upselling features"
        ]
      },
      {
        title: "Shopify Store Optimization",
        content: "We optimize every aspect of your Shopify store to maximize conversions and sales performance.",
        listItems: [
          "Page speed optimization",
          "SEO-friendly product structure",
          "Conversion rate optimization",
          "User experience enhancements",
          "Abandoned cart recovery setup"
        ]
      },
      {
        title: "Shopify App Integration",
        content: "We integrate the right Shopify apps to extend your store's functionality and improve the shopping experience.",
        listItems: [
          "Payment gateway integration",
          "Shipping and fulfillment solutions",
          "Inventory management systems",
          "Customer reviews and social proof",
          "Marketing automation tools"
        ]
      }
    ]
  }
];
