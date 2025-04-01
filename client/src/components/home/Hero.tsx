import { Link } from "wouter";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Premium Web Solutions for LA Businesses
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Transform your online presence with websites that attract customers and drive growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact-us" className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-md shadow-md transition-all transform hover:scale-105">
                Get Started
              </Link>
              <Link href="/best-los-angeles-free-site-audit" className="px-6 py-3 bg-white hover:bg-gray-100 text-blue-800 font-medium rounded-md shadow-md transition-all">
                Free Website Audit
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Web development team working" 
              className="rounded-lg shadow-2xl" 
              width="600" 
              height="400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
