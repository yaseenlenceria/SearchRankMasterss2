import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import MainLayout from "@/layouts/MainLayout";
import { industries } from "@/data/industries";
import { services } from "@/data/services";
import { caseStudies } from "@/data/caseStudies";
import ContactForm from "@/components/home/ContactForm";
import CallToAction from "@/components/home/CallToAction";
import { ArrowRight } from "lucide-react";

interface IndustryPageProps {
  industrySlug?: string;
  showAll?: boolean;
}

export default function IndustryPage({ industrySlug, showAll = false }: IndustryPageProps) {
  const [location, setLocation] = useLocation();
  const industry = industrySlug ? industries.find(i => i.slug === industrySlug) : null;
  
  useEffect(() => {
    if (!showAll && !industry) {
      setLocation("/not-found");
    }
  }, [industry, showAll, setLocation]);
  
  // If showing a specific industry page and industry not found, return null
  if (!showAll && !industry) return null;
  
  const title = showAll ? "Industries We Serve" : `${industry?.name} Industry Solutions`;
  const description = showAll 
    ? "LumeWeb Studios offers specialized web design and SEO services for various industries in Los Angeles. See how we can help your business."
    : industry?.metaDescription || "";
  
  const breadcrumbs = showAll 
    ? [{ name: "Industries", href: "/best-los-angeles-industries" }]
    : [
        { name: "Industries", href: "/best-los-angeles-industries" },
        { name: industry?.name || "", href: `/best-los-angeles-industries-${industrySlug}` },
      ];
  
  // If showing all industries, use all industries
  // If showing a specific industry, filter related case studies
  const relevantCaseStudies = showAll 
    ? caseStudies
    : caseStudies.filter(study => study.industry.toLowerCase() === industry?.name.toLowerCase());
  
  return (
    <MainLayout
      title={`${title} | LumeWeb Studios`}
      description={description}
      breadcrumbs={breadcrumbs}
    >
      {/* Hero Section */}
      <section className="bg-blue-700 py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            {title}
          </h1>
          <p className="text-lg text-blue-100 mb-8 text-center max-w-3xl mx-auto">
            {showAll 
              ? "We provide specialized web solutions for various industries in Los Angeles. Our tailored approach ensures your business stands out in your specific market." 
              : industry?.heroDescription
            }
          </p>
        </div>
      </section>
      
      {/* Industries Grid */}
      {showAll && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map(industry => (
                <Link 
                  key={industry.slug} 
                  href={`/best-los-angeles-industries-${industry.slug}`}
                  className="group"
                >
                  <div className="relative h-64 overflow-hidden rounded-lg shadow-md">
                    <img 
                      src={industry.imageUrl} 
                      alt={`${industry.name} industry`} 
                      className="w-full h-full object-cover transition-all transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                      <p className="text-gray-300">{industry.shortDescription}</p>
                      <span className="mt-4 inline-block text-orange-400 group-hover:text-orange-300">Learn more →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Industry Specific Content */}
      {!showAll && industry && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose lg:prose-xl mx-auto">
                {industry.contentSections.map((section, index) => (
                  <div key={index} className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">
                      {section.title}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Industry-specific services */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold mb-8 text-center">
                  Our {industry.name} Services
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {industry.services.map(serviceSlug => {
                    const service = services.find(s => s.slug === serviceSlug);
                    if (!service) return null;
                    
                    return (
                      <div key={service.slug} className="bg-gray-100 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold mb-2">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {service.shortDescription}
                        </p>
                        <Link 
                          href={`/best-los-angeles-${service.slug}`} 
                          className="text-primary hover:text-blue-800 font-medium inline-flex items-center"
                        >
                          Learn more
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Related Case Studies */}
      {relevantCaseStudies.length > 0 && (
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">
              {showAll ? "Recent Case Studies" : `${industry?.name} Case Studies`}
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relevantCaseStudies.slice(0, 3).map(study => (
                <div key={study.slug} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
                  <img 
                    src={study.imageUrl} 
                    alt={`${study.clientName} case study`} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className="text-xs font-medium text-primary bg-blue-100 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                    <h3 className="text-xl font-semibold mt-3 mb-2">{study.clientName}</h3>
                    <p className="text-gray-600 mb-4">{study.shortDescription}</p>
                    <Link 
                      href={`/best-los-angeles-case-studies-${study.slug}`} 
                      className="text-primary hover:text-blue-800 font-medium inline-flex items-center"
                    >
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link 
                href="/best-los-angeles-case-studies" 
                className="inline-flex items-center py-2 px-4 border border-primary text-primary hover:bg-blue-50 font-medium rounded-md transition-all"
              >
                View All Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}
      
      <CallToAction />
      <ContactForm />
    </MainLayout>
  );
}
