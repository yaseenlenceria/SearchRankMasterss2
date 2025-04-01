import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-teal-900/90 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-20 z-[-1]"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 py-16 md:py-20 lg:py-28 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight text-white text-shadow-lg">
              Premium Web Design & <span className="text-teal-300">SEO</span> for LA Businesses
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-100">
              Transform your online presence with stunning websites and data-driven marketing strategies that attract customers and drive growth.
            </p>
            
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-teal-300 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-100">Stunning, conversion-optimized websites</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-teal-300 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-100">SEO strategies that attract quality traffic</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-teal-300 mr-2 flex-shrink-0 mt-0.5" />
                <span className="text-gray-100">Proven results for LA businesses</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/best-los-angeles-request-for-proposal" className="px-5 sm:px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-md shadow-md transition-all transform hover:-translate-y-1 flex items-center whitespace-nowrap">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/best-los-angeles-free-site-audit" className="px-5 sm:px-6 py-3 bg-white hover:bg-gray-100 text-primary font-medium rounded-md shadow-md transition-all hover:-translate-y-1 whitespace-nowrap">
                Free Site Audit
              </Link>
            </div>
          </div>
          
          {/* Image for larger screens */}
          <div className="hidden md:flex justify-end animate-slide-up">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-teal-400 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Los Angeles web design and development team" 
                className="rounded-lg shadow-2xl relative z-10" 
                width="600" 
                height="400"
              />
              <div className="absolute -right-6 -bottom-6 bg-white p-4 rounded-lg shadow-lg subtle-shadow z-20">
                <div className="text-primary font-bold text-2xl">300+</div>
                <div className="text-gray-600 text-sm">LA Businesses Helped</div>
              </div>
            </div>
          </div>
          
          {/* Simplified image for mobile */}
          <div className="md:hidden w-full max-w-xs mx-auto mt-6">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Los Angeles web design and development team" 
                className="rounded-lg shadow-lg w-full aspect-video object-cover" 
              />
              <div className="absolute -right-2 -bottom-2 bg-white p-3 rounded-lg shadow-lg z-20">
                <div className="text-primary font-bold text-xl">300+</div>
                <div className="text-gray-600 text-xs">LA Businesses</div>
              </div>
            </div>
          </div>
        </div>
        

      </div>
    </section>
  );
}
