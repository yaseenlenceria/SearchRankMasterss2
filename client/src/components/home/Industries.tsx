import { Link } from "wouter";
import { industries } from "@/data/industries";

export default function Industries() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We specialize in helping businesses across various industries in Los Angeles.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {industries.slice(0, 3).map((industry) => (
            <Link key={industry.slug} href={`/best-los-angeles-industries-${industry.slug}`} className="group">
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
        
        <div className="text-center mt-12">
          <Link 
            href="/best-los-angeles-industries" 
            className="inline-flex items-center py-3 px-6 bg-primary hover:bg-blue-700 text-white font-medium rounded-md shadow-md transition-all"
          >
            View All Industries 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
