import { Link } from "wouter";
import { caseStudies } from "@/data/caseStudies";
import { ArrowRight, BarChart, TrendingUp, ArrowUpRight } from "lucide-react";

export default function CaseStudies() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Success Stories</h2>
          <p className="section-subheading">
            See how we've helped Los Angeles businesses achieve remarkable results with data-driven strategies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Featured Case Study */}
          <div className="md:col-span-3 grid md:grid-cols-2 gap-8 mb-12 bg-white rounded-xl overflow-hidden subtle-shadow">
            <div className="relative h-96 md:h-auto">
              <img 
                src={caseStudies[0].imageUrl} 
                alt={`${caseStudies[0].clientName} case study - Los Angeles ${caseStudies[0].industry} SEO success story`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/70 to-transparent md:hidden flex items-center justify-center">
                <ArrowUpRight className="h-16 w-16 text-white opacity-70" />
              </div>
            </div>
            <div className="p-8 md:p-10 flex flex-col justify-center">
              <div className="flex items-center mb-4">
                <span className="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-medium rounded-full">
                  Featured Case Study
                </span>
                <span className="ml-3 px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                  {caseStudies[0].industry}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {caseStudies[0].clientName}
              </h3>
              <p className="text-gray-600 mb-6">
                {caseStudies[0].shortDescription}
              </p>
              
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{caseStudies[0].results.stat1Value}</div>
                  <div className="text-sm text-gray-500 mt-1">{caseStudies[0].results.stat1Label}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{caseStudies[0].results.stat2Value}</div>
                  <div className="text-sm text-gray-500 mt-1">{caseStudies[0].results.stat2Label}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{caseStudies[0].results.stat3Value}</div>
                  <div className="text-sm text-gray-500 mt-1">{caseStudies[0].results.stat3Label}</div>
                </div>
              </div>
              
              <Link 
                href={`/best-los-angeles-case-studies-${caseStudies[0].slug}`} 
                className="inline-flex items-center py-2 px-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-md transition-all"
              >
                View Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          
          {/* Other Case Studies */}
          {caseStudies.slice(1, 4).map((study) => (
            <div 
              key={study.slug} 
              className="bg-white rounded-xl overflow-hidden shadow-sm card-hover"
            >
              <div className="relative">
                <img 
                  src={study.imageUrl} 
                  alt={`${study.clientName} case study - Los Angeles ${study.industry} digital marketing success`} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-medium rounded-full">
                  {study.industry}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{study.clientName}</h3>
                  <div className="flex items-center text-teal-600 text-sm font-medium">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>{study.results.stat1Value}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 line-clamp-2">{study.shortDescription}</p>
                <Link 
                  href={`/best-los-angeles-case-studies-${study.slug}`} 
                  className="text-primary hover:text-teal-600 font-medium inline-flex items-center group"
                >
                  View Case Study 
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link 
            href="/best-los-angeles-case-studies" 
            className="inline-flex items-center py-3 px-8 border-2 border-primary text-primary hover:bg-primary/5 font-medium rounded-md transition-all"
          >
            View All Case Studies 
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
