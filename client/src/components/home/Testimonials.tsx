import { useState, useEffect } from "react";
import { testimonials } from "@/data/testimonials";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  // Auto-slide functionality
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 7000);
    
    return () => clearTimeout(timer);
  }, [currentSlide]);
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-heading">What Los Angeles Businesses Say</h2>
          <p className="section-subheading">
            Hear directly from businesses that achieved exceptional results with our digital solutions.
          </p>
        </div>
        
        {/* Main testimonial display */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative bg-gray-50 rounded-2xl overflow-hidden subtle-shadow">
            {/* Background design elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-teal-50 rounded-full translate-x-1/3 translate-y-1/3"></div>
            
            <div className="relative p-8 md:p-12 z-10">
              <Quote className="w-12 h-12 text-teal-500/20 mb-6" />
              
              <div className="grid md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-3">
                  <div className="relative overflow-hidden" style={{ height: "200px" }}>
                    <div 
                      className="absolute w-full transition-transform duration-500 ease-in-out" 
                      style={{ transform: `translateY(-${currentSlide * 200}px)` }}
                    >
                      {testimonials.map((testimonial, index) => (
                        <div key={index} className="h-[200px] py-4">
                          <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed mb-8">
                            "{testimonial.quote}"
                          </p>
                          <div className="flex items-center">
                            <img 
                              src={testimonial.avatar} 
                              alt={`${testimonial.name} from ${testimonial.company}`} 
                              className="w-14 h-14 rounded-full border-2 border-white shadow-sm mr-4 object-cover"
                            />
                            <div>
                              <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                              <p className="text-gray-600">{testimonial.position}, {testimonial.company}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Navigation controls */}
                  <div className="flex justify-between items-center mt-10">
                    <div className="flex space-x-3">
                      {testimonials.map((_, index) => (
                        <button 
                          key={index}
                          className={cn(
                            "w-10 h-2 rounded-full transition-all",
                            index === currentSlide 
                              ? "bg-primary w-12" 
                              : "bg-gray-300 hover:bg-teal-300"
                          )}
                          onClick={() => goToSlide(index)}
                          aria-label={`Testimonial ${index + 1}`}
                        />
                      ))}
                    </div>
                    
                    <div className="flex space-x-2">
                      <button 
                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary transition-all"
                        onClick={prevSlide}
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      
                      <button 
                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary transition-all"
                        onClick={nextSlide}
                        aria-label="Next testimonial"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Metrics/stats side panel */}
                <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Client Satisfaction</h3>
                  
                  {/* Star rating */}
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-2 text-gray-700 font-medium">5.0/5</span>
                  </div>
                  
                  {/* Stats */}
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Client Retention Rate</span>
                        <span className="text-sm font-bold text-gray-900">96%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-teal-500 h-2 rounded-full" style={{ width: "96%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Recommend to Others</span>
                        <span className="text-sm font-bold text-gray-900">98%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-teal-500 h-2 rounded-full" style={{ width: "98%" }}></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-600">Return on Investment</span>
                        <span className="text-sm font-bold text-gray-900">97%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-teal-500 h-2 rounded-full" style={{ width: "97%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
