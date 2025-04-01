import { Link } from "wouter";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudies() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Case Studies</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how we've helped LA businesses achieve remarkable results.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.slice(0, 3).map((study) => (
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
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/best-los-angeles-case-studies" 
            className="inline-flex items-center py-3 px-6 border border-primary text-primary hover:bg-blue-50 font-medium rounded-md transition-all"
          >
            View All Case Studies 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
