import { Link } from "wouter";
import { industries } from "@/data/industries";
import { ArrowRight } from "lucide-react";

export default function Industries() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Industries We Serve</h2>
          <p className="section-subheading">
            We specialize in helping businesses across various industries in Los Angeles achieve remarkable results online.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.slice(0, 6).map((industry) => (
            <Link 
              key={industry.slug} 
              href={`/best-los-angeles-industries-${industry.slug}`} 
              className="group block relative overflow-hidden rounded-xl subtle-shadow hover:shadow-xl card-hover"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={industry.imageUrl} 
                  alt={`${industry.name} industry digital marketing solutions Los Angeles`} 
                  className="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-105"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent opacity-90"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <div className="w-12 h-1 bg-teal-400 mb-4 transition-all duration-300 group-hover:w-16"></div>
                  <h3 className="text-2xl font-bold text-white mb-3">{industry.name}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-2">{industry.shortDescription}</p>
                  <span className="inline-flex items-center text-teal-300 font-medium transition-all duration-300 group-hover:translate-x-2">
                    View Solutions
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-14">
          <Link 
            href="/best-los-angeles-industries" 
            className="inline-flex items-center py-3 px-6 bg-white border-2 border-primary text-primary hover:bg-primary/5 font-medium rounded-md shadow-sm transition-all"
          >
            View All Industries 
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      
      {/* Industry expertise highlight */}
      <div className="mt-20 py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Industry-Specific Digital Strategies</h3>
            <p className="text-gray-600 mb-8">
              Our team understands the unique challenges and opportunities in your industry. We develop tailored digital solutions that address your specific needs and help you stand out from competitors.
            </p>
            <Link 
              href="/best-los-angeles-successful-website-for-your-business" 
              className="inline-flex items-center py-3 px-6 bg-gradient-brand text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all"
            >
              Learn Our Approach
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
