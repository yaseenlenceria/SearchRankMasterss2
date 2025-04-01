import { Link } from "wouter";
import { Laptop, Search, Megaphone, PenTool, BarChart2, MapPin, Zap, ArrowRight, LayoutGrid, Users } from "lucide-react";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">Our Services</h2>
          <p className="section-subheading">
            Comprehensive digital solutions to help your Los Angeles business thrive online and outperform competitors.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {services.slice(0, 6).map((service) => (
            <div key={service.slug} className="bg-white rounded-lg subtle-shadow card-hover relative overflow-hidden group">
              {/* Top accent border */}
              <div className="h-1.5 w-full bg-gradient-to-r from-primary to-teal-400"></div>
              
              <div className="p-8">
                <div className="w-12 h-12 bg-gray-100 text-primary flex items-center justify-center rounded-lg mb-6 group-hover:text-white group-hover:bg-primary transition-all">
                  {getServiceIcon(service.slug)}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.shortDescription}</p>
                <Link 
                  href={`/best-los-angeles-${service.slug}`} 
                  className="text-primary hover:text-teal-600 font-medium inline-flex items-center transition-all group-hover:translate-x-1"
                >
                  Learn more 
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            href="/best-los-angeles-request-for-proposal" 
            className="inline-flex items-center px-6 py-3 bg-gradient-brand text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all"
          >
            Discuss Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      
      {/* Stats section */}
      <div className="mt-24 bg-gradient-to-r from-gray-900 to-primary py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-2">Delivering Measurable Results</h3>
            <p className="text-gray-300">Real numbers from real Los Angeles businesses</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl md:text-5xl font-bold text-teal-300 mb-2">175%</div>
              <p className="text-gray-300">Average increase in organic traffic</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl md:text-5xl font-bold text-teal-300 mb-2">320%</div>
              <p className="text-gray-300">Average ROI on digital marketing</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl md:text-5xl font-bold text-teal-300 mb-2">85%</div>
              <p className="text-gray-300">Increase in quality leads</p>
            </div>
            
            <div className="text-center p-6">
              <div className="text-4xl md:text-5xl font-bold text-teal-300 mb-2">95%</div>
              <p className="text-gray-300">Client satisfaction rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function getServiceIcon(slug: string) {
  switch (slug) {
    case 'web-design':
    case 'web-design-wordpress':
    case 'shopify-web-design':
    case 'woocommerce-web-design':
      return <Laptop className="h-6 w-6" />;
    case 'web-development':
      return <LayoutGrid className="h-6 w-6" />;
    case 'search-engine-optimization':
    case 'seo-for-small-businesses':
    case 'seo-audit':
      return <Search className="h-6 w-6" />;
    case 'digital-marketing':
    case 'social-media-marketing':
      return <Users className="h-6 w-6" />;
    case 'ppc-management':
      return <Megaphone className="h-6 w-6" />;
    case 'content-marketing':
      return <PenTool className="h-6 w-6" />;
    case 'conversion-rate-optimization':
      return <Zap className="h-6 w-6" />;
    case 'competitive-analysis':
      return <BarChart2 className="h-6 w-6" />;
    case 'local-seo':
      return <MapPin className="h-6 w-6" />;
    default:
      return <Laptop className="h-6 w-6" />;
  }
}
