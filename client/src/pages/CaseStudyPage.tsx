import { useEffect } from "react";
import { Link, useLocation } from "wouter";
import MainLayout from "@/layouts/MainLayout";
import { caseStudies } from "@/data/caseStudies";
import { ArrowRight } from "lucide-react";
import ContactForm from "@/components/home/ContactForm";

interface CaseStudyPageProps {
  studySlug: string;
}

export default function CaseStudyPage({ studySlug }: CaseStudyPageProps) {
  const [location, setLocation] = useLocation();
  const caseStudy = caseStudies.find(s => s.slug === studySlug);
  
  useEffect(() => {
    if (!caseStudy) {
      setLocation("/not-found");
    }
  }, [caseStudy, setLocation]);
  
  if (!caseStudy) return null;
  
  return (
    <MainLayout
      title={`${caseStudy.clientName} Case Study | LumeWeb Studios`}
      description={`Discover how LumeWeb Studios helped ${caseStudy.clientName} achieve ${caseStudy.results.mainResult}.`}
      breadcrumbs={[
        { name: "Case Studies", href: "/best-los-angeles-case-studies" },
        { name: caseStudy.clientName, href: `/best-los-angeles-case-studies-${caseStudy.slug}` },
      ]}
    >
      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <span className="text-sm font-medium text-primary bg-blue-100 px-3 py-1 rounded-full">
              {caseStudy.industry}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-6">
              {caseStudy.clientName} Case Study
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {caseStudy.fullDescription}
            </p>
            
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
              <img 
                src={caseStudy.imageUrl} 
                alt={`${caseStudy.clientName} case study`} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Challenge & Solution */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mr-4">1</span>
                  The Challenge
                </h2>
                <div className="prose">
                  <p>{caseStudy.challenge}</p>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <span className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mr-4">2</span>
                  Our Solution
                </h2>
                <div className="prose">
                  <p>{caseStudy.solution}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Results */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              The Results
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-primary mb-2">{caseStudy.results.stat1Value}</div>
                <p className="text-gray-600">{caseStudy.results.stat1Label}</p>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-primary mb-2">{caseStudy.results.stat2Value}</div>
                <p className="text-gray-600">{caseStudy.results.stat2Label}</p>
              </div>
              
              <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl font-bold text-primary mb-2">{caseStudy.results.stat3Value}</div>
                <p className="text-gray-600">{caseStudy.results.stat3Label}</p>
              </div>
            </div>
            
            <div className="prose lg:prose-xl mx-auto">
              <p>{caseStudy.results.description}</p>
              
              {caseStudy.testimonial && (
                <blockquote className="italic border-l-4 border-primary pl-4 py-2 my-8">
                  "{caseStudy.testimonial.quote}"
                  <footer className="text-right font-medium mt-2">
                    — {caseStudy.testimonial.author}, {caseStudy.testimonial.position}
                  </footer>
                </blockquote>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-12 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to achieve similar results?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
            Our team is ready to help your Los Angeles business succeed online with our proven strategies.
          </p>
          <Link 
            href="/contact-us" 
            className="inline-flex items-center py-3 px-6 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md shadow-md transition-all"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
      
      {/* Other Case Studies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">
            More Success Stories
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies
              .filter(study => study.slug !== studySlug)
              .slice(0, 3)
              .map(study => (
                <div key={study.slug} className="bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
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
              ))
            }
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
      
      <ContactForm />
    </MainLayout>
  );
}
