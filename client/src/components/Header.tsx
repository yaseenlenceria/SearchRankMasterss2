import { useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { 
  Laptop, Search, PenTool, MapPin, ChevronDown, Menu, X
} from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          {/* Logo */}
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary">Lume<span className="text-orange-500">Web</span> Studios</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 -my-2 md:hidden">
            <button 
              type="button" 
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-700 hover:text-primary hover:bg-gray-100 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open menu</span>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-10">
            <div className="relative group">
              <button className="group py-2 px-1 inline-flex items-center text-base font-medium text-gray-800 hover:text-primary focus:outline-none">
                <span>Services</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {/* Services Dropdown */}
              <div className="hidden group-hover:block absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <Link href="/best-los-angeles-web-design" className="flex items-start rounded-lg hover:bg-gray-100 px-3 py-2">
                      <Laptop className="mt-1 text-primary h-5 w-5" />
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-800">Web Design</p>
                        <p className="mt-1 text-sm text-gray-600">Stunning, responsive websites for LA businesses</p>
                      </div>
                    </Link>
                    
                    <Link href="/best-los-angeles-search-engine-optimization" className="flex items-start rounded-lg hover:bg-gray-100 px-3 py-2">
                      <Search className="mt-1 text-primary h-5 w-5" />
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-800">SEO</p>
                        <p className="mt-1 text-sm text-gray-600">Boost your rankings with our expert SEO strategies</p>
                      </div>
                    </Link>
                    
                    <Link href="/best-los-angeles-content-marketing" className="flex items-start rounded-lg hover:bg-gray-100 px-3 py-2">
                      <PenTool className="mt-1 text-primary h-5 w-5" />
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-800">Content Marketing</p>
                        <p className="mt-1 text-sm text-gray-600">Compelling content that drives engagement</p>
                      </div>
                    </Link>
                  </div>
                  
                  <div className="px-5 py-5 bg-gray-100 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                    <div className="flow-root">
                      <Link href="/best-los-angeles-free-site-audit" className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <span>Free Site Audit</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="py-2 px-1 inline-flex items-center text-base font-medium text-gray-800 hover:text-primary focus:outline-none">
                <span>Industries</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {/* Industries Dropdown */}
              <div className="hidden group-hover:block absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <Link href="/best-los-angeles-industries-legal" className="flex items-start rounded-lg hover:bg-gray-100 px-3 py-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 text-primary h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-800">Legal</p>
                        <p className="mt-1 text-sm text-gray-600">Law firms, attorneys, legal consultants</p>
                      </div>
                    </Link>
                    
                    <Link href="/best-los-angeles-industries-health" className="flex items-start rounded-lg hover:bg-gray-100 px-3 py-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 text-primary h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-800">Healthcare</p>
                        <p className="mt-1 text-sm text-gray-600">Doctors, dentists, specialists</p>
                      </div>
                    </Link>
                    
                    <Link href="/best-los-angeles-industries-finance" className="flex items-start rounded-lg hover:bg-gray-100 px-3 py-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="mt-1 text-primary h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-800">Finance</p>
                        <p className="mt-1 text-sm text-gray-600">Accounting, insurance, financial planning</p>
                      </div>
                    </Link>
                  </div>
                  
                  <div className="px-5 py-5 bg-gray-100 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                    <div className="flow-root">
                      <Link href="/best-los-angeles-industries" className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-800 hover:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                        <span>All Industries</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/best-los-angeles-case-studies" className={cn(
              "py-2 px-1 text-base font-medium text-gray-800 hover:text-primary",
              location.includes("case-studies") && "text-primary"
            )}>
              Case Studies
            </Link>
            
            <Link href="/contact-us" className={cn(
              "py-2 px-1 text-base font-medium text-gray-800 hover:text-primary",
              location === "/contact-us" && "text-primary"
            )}>
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Link href="/best-los-angeles-free-site-audit" className="whitespace-nowrap text-base font-medium text-primary hover:text-primary-800">
              Free Audit
            </Link>
            <Link href="/contact-us" className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-600">
              Get Started
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "absolute top-full inset-x-0 p-2 transition transform origin-top-right md:hidden bg-white",
        isMobileMenuOpen ? "block" : "hidden"
      )}>
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-200">
          <div className="pt-5 pb-6 px-5">
            <div className="mt-6">
              <nav className="grid gap-y-8">
                <Link href="/best-los-angeles-web-design" className="flex items-center p-3 rounded-md hover:bg-gray-100">
                  <Laptop className="text-primary h-5 w-5" />
                  <span className="ml-3 text-base font-medium text-gray-800">Web Design</span>
                </Link>
                
                <Link href="/best-los-angeles-search-engine-optimization" className="flex items-center p-3 rounded-md hover:bg-gray-100">
                  <Search className="text-primary h-5 w-5" />
                  <span className="ml-3 text-base font-medium text-gray-800">SEO</span>
                </Link>
                
                <Link href="/best-los-angeles-industries" className="flex items-center p-3 rounded-md hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-primary h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-800">Industries</span>
                </Link>
                
                <Link href="/best-los-angeles-case-studies" className="flex items-center p-3 rounded-md hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-primary h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-800">Case Studies</span>
                </Link>
                
                <Link href="/contact-us" className="flex items-center p-3 rounded-md hover:bg-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-primary h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="ml-3 text-base font-medium text-gray-800">Contact</span>
                </Link>
              </nav>
            </div>
          </div>
          
          <div className="py-6 px-5 space-y-6">
            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
              <Link href="/best-los-angeles-free-site-audit" className="text-base font-medium text-primary hover:text-primary-800">
                Free Site Audit
              </Link>
            </div>
            <div>
              <Link href="/contact-us" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-500 hover:bg-orange-600">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
