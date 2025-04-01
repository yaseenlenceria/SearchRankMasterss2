import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-teal-900/90 z-0"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-20 z-[-1]"></div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white text-shadow-lg">
              Premium Web Design & <span className="text-teal-300">SEO</span> for LA Businesses
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-100">
              Transform your online presence with stunning websites and data-driven marketing strategies that attract customers and drive growth.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-teal-300 mr-2" />
                <span className="text-gray-100">Stunning, conversion-optimized websites</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-teal-300 mr-2" />
                <span className="text-gray-100">SEO strategies that attract quality traffic</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-teal-300 mr-2" />
                <span className="text-gray-100">Proven results for LA businesses</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link href="/best-los-angeles-request-for-proposal" className="px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-md shadow-md transition-all transform hover:-translate-y-1 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/best-los-angeles-free-site-audit" className="px-6 py-3 bg-white hover:bg-gray-100 text-primary font-medium rounded-md shadow-md transition-all hover:-translate-y-1">
                Free Site Audit
              </Link>
            </div>
          </div>
          
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
        </div>
        
        {/* Trusted by section */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6 text-sm uppercase tracking-widest">Trusted by Los Angeles businesses</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-80">
            <div className="w-24 h-12 bg-white rounded flex items-center justify-center">
              <span className="font-bold text-gray-700">LOGO 1</span>
            </div>
            <div className="w-24 h-12 bg-white rounded flex items-center justify-center">
              <span className="font-bold text-gray-700">LOGO 2</span>
            </div>
            <div className="w-24 h-12 bg-white rounded flex items-center justify-center">
              <span className="font-bold text-gray-700">LOGO 3</span>
            </div>
            <div className="w-24 h-12 bg-white rounded flex items-center justify-center">
              <span className="font-bold text-gray-700">LOGO 4</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
