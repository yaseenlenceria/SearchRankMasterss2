import { Link } from "wouter";
import { Laptop, Search, Megaphone, PenTool, BarChart2, MapPin } from "lucide-react";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions to help your Los Angeles business thrive online.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service) => (
            <div key={service.slug} className="p-6 bg-gray-100 rounded-lg hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-primary text-white flex items-center justify-center rounded-full mb-4">
                {getServiceIcon(service.slug)}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.shortDescription}</p>
              <Link 
                href={`/best-los-angeles-${service.slug}`} 
                className="text-primary hover:text-blue-800 font-medium inline-flex items-center"
              >
                Learn more 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function getServiceIcon(slug: string) {
  switch (slug) {
    case 'web-design':
    case 'web-development':
    case 'web-design-wordpress':
    case 'shopify-web-design':
    case 'woocommerce-web-design':
      return <Laptop className="h-6 w-6" />;
    case 'search-engine-optimization':
    case 'local-seo':
    case 'seo-for-small-businesses':
    case 'seo-audit':
      return <Search className="h-6 w-6" />;
    case 'digital-marketing':
    case 'social-media-marketing':
    case 'ppc-management':
      return <Megaphone className="h-6 w-6" />;
    case 'content-marketing':
      return <PenTool className="h-6 w-6" />;
    case 'conversion-rate-optimization':
    case 'competitive-analysis':
      return <BarChart2 className="h-6 w-6" />;
    case 'local-seo':
      return <MapPin className="h-6 w-6" />;
    default:
      return <Laptop className="h-6 w-6" />;
  }
}
