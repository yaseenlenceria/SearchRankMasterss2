import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import MainLayout from "@/layouts/MainLayout";
import { services } from "@/data/services";
import ContactForm from "@/components/home/ContactForm";
import CallToAction from "@/components/home/CallToAction";
import { ArrowRight } from "lucide-react";

interface ServicePageProps {
  serviceSlug: string;
}

export default function ServicePage({ serviceSlug }: ServicePageProps) {
  const [location, setLocation] = useLocation();
  const service = services.find(s => s.slug === serviceSlug);
  
  useEffect(() => {
    if (!service) {
      setLocation("/not-found");
    }
  }, [service, setLocation]);
  
  if (!service) return null;
  
  return (
    <MainLayout
      title={`${service.title} | Best Los Angeles ${service.title} | LumeWeb Studios`}
      description={service.metaDescription}
      breadcrumbs={[
        { name: "Services", href: "/services" },
        { name: service.title, href: `/best-los-angeles-${service.slug}` },
      ]}
    >
      {/* Hero Section */}
      <section className="bg-blue-700 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-lg text-blue-100 mb-8">
                {service.heroDescription}
              </p>
              <Link 
                href="/contact-us" 
                className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md shadow-md transition-all"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="hidden md:block">
              <img 
                src={service.heroImage} 
                alt={service.title} 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              {service.contentTitle}
            </h2>
            
            <div className="prose lg:prose-xl mx-auto">
              {service.contentSections.map((section, index) => (
                <div key={index} className="mb-12">
                  <h3 className="text-2xl font-semibold mb-4">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {section.content}
                  </p>
                  {section.listItems && (
                    <ul className="space-y-2 mt-4">
                      {section.listItems.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-6 w-6 text-primary mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
            
            {/* Related Services */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold mb-8 text-center">
                Related Services
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {services
                  .filter(s => s.slug !== serviceSlug)
                  .slice(0, 3)
                  .map(relatedService => (
                    <div key={relatedService.slug} className="bg-gray-100 p-6 rounded-lg">
                      <h4 className="text-xl font-semibold mb-2">
                        {relatedService.title}
                      </h4>
                      <p className="text-gray-600 mb-4">
                        {relatedService.shortDescription}
                      </p>
                      <Link 
                        href={`/best-los-angeles-${relatedService.slug}`} 
                        className="text-primary hover:text-blue-800 font-medium inline-flex items-center"
                      >
                        Learn more
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction />
      <ContactForm />
    </MainLayout>
  );
}
