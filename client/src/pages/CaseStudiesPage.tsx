import MainLayout from "@/layouts/MainLayout";
import { caseStudies } from "@/data/caseStudies";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import ContactForm from "@/components/home/ContactForm";

export default function CaseStudiesPage() {
  return (
    <MainLayout
      title="Case Studies | LumeWeb Studios"
      description="Explore our case studies and discover how LumeWeb Studios has helped businesses in Los Angeles achieve remarkable results."
      breadcrumbs={[
        { name: "Case Studies", href: "/best-los-angeles-case-studies" },
      ]}
    >
      {/* Hero Section */}
      <section className="bg-blue-700 py-16 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
            Case Studies
          </h1>
          <p className="text-lg text-blue-100 mb-8 text-center max-w-3xl mx-auto">
            Explore our success stories and discover how we've helped businesses in Los Angeles achieve remarkable results.
          </p>
        </div>
      </section>
      
      {/* Case Studies Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map(study => (
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
                  <h2 className="text-xl font-semibold mt-3 mb-2">{study.clientName}</h2>
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
        </div>
      </section>
      
      {/* Results Summary */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Proven Results Across Industries
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">175%</div>
              <p className="text-gray-600">Average increase in organic traffic</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">320%</div>
              <p className="text-gray-600">Average ROI on digital marketing</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">85%</div>
              <p className="text-gray-600">Increase in quality leads</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <p className="text-gray-600">Client satisfaction rate</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/contact-us" 
              className="inline-flex items-center py-3 px-6 bg-primary hover:bg-blue-700 text-white font-medium rounded-md shadow-md transition-all"
            >
              Become Our Next Success Story
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      <ContactForm />
    </MainLayout>
  );
}
