import { Link } from "wouter";
import { Sparkles, ArrowRight, Check } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient and subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 z-0"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-400 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4 mr-2 text-teal-300" />
              Limited Time Offer for Los Angeles Businesses
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Outrank Your Competition in Los Angeles?
            </h2>
            
            <p className="text-xl text-gray-100 mb-8 max-w-lg">
              Get a comprehensive analysis of your website's performance and a custom strategy to increase your visibility in local Los Angeles searches.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-teal-300 mr-3" />
                <span className="text-white">Technical SEO audit with actionable fixes</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-teal-300 mr-3" />
                <span className="text-white">Competitor analysis & keyword opportunities</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-teal-300 mr-3" />
                <span className="text-white">Los Angeles local SEO recommendations</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/best-los-angeles-free-site-audit" 
                className="inline-flex items-center px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-md shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-lg"
              >
                Get Free Website Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link 
                href="/best-los-angeles-contact-us" 
                className="inline-flex items-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md transition-all text-lg backdrop-blur-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          {/* Right side card */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 relative">
              <div className="absolute -top-3 -right-3 bg-teal-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                FREE ANALYSIS
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-6">Website Performance Score</h3>
              
              <div className="space-y-6 mb-8">
                <div>
                  <div className="flex justify-between text-white mb-2">
                    <span>SEO Score</span>
                    <span className="font-bold">?</span>
                  </div>
                  <div className="w-full bg-white/20 h-3 rounded-full">
                    <div className="bg-gradient-to-r from-yellow-400 to-teal-400 h-3 rounded-full w-0"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-white mb-2">
                    <span>Performance</span>
                    <span className="font-bold">?</span>
                  </div>
                  <div className="w-full bg-white/20 h-3 rounded-full">
                    <div className="bg-gradient-to-r from-yellow-400 to-teal-400 h-3 rounded-full w-0"></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-white mb-2">
                    <span>User Experience</span>
                    <span className="font-bold">?</span>
                  </div>
                  <div className="w-full bg-white/20 h-3 rounded-full">
                    <div className="bg-gradient-to-r from-yellow-400 to-teal-400 h-3 rounded-full w-0"></div>
                  </div>
                </div>
              </div>
              
              <div className="text-white text-center p-4 border border-white/20 rounded-lg mb-6">
                <p className="text-sm">Discover how your website performs against top Los Angeles competitors</p>
              </div>
              
              <div className="text-center">
                <Link 
                  href="/best-los-angeles-free-site-audit" 
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-teal-500 hover:bg-teal-600 text-white font-medium rounded-md shadow-lg transition-all"
                >
                  Claim Your Free Audit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
