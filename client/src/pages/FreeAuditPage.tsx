import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { contactFormSchema } from "@shared/schema";
import MainLayout from "@/layouts/MainLayout";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Sparkles, CheckCircle, ArrowRight, BarChart2, PieChart, LineChart } from "lucide-react";

// Extend the schema for the audit form
const auditFormSchema = contactFormSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  website: z.string().url("Please enter a valid website URL."),
  phone: z.string().optional(),
  goals: z.string().min(10, "Please tell us about your goals (minimum 10 characters)."),
});

type AuditFormValues = z.infer<typeof auditFormSchema>;

export default function FreeAuditPage() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<AuditFormValues>({
    resolver: zodResolver(auditFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      website: "",
      goals: "",
      message: "",
      service: "seo-audit",
    },
  });
  
  const mutation = useMutation({
    mutationFn: async (values: AuditFormValues) => {
      const res = await apiRequest("POST", "/api/contact", values);
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Audit request received!",
        description: "We'll get started on your site audit right away.",
        duration: 5000,
      });
      form.reset();
      setIsSubmitted(true);
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error) => {
      toast({
        title: "Something went wrong.",
        description: error.message || "Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    },
  });
  
  function onSubmit(values: AuditFormValues) {
    mutation.mutate(values);
  }
  
  return (
    <MainLayout 
      title="Free Website Audit for Los Angeles Businesses" 
      description="Get a comprehensive audit of your website's SEO performance, usability, and conversion potential - completely free of charge."
      breadcrumbs={[
        { name: "Home", href: "/" },
        { name: "Free Website Audit", href: "/best-los-angeles-free-site-audit" },
      ]}
    >
      {/* Hero Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-teal-900/95 z-0"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
                <Sparkles className="h-4 w-4 mr-2 text-teal-300" />
                Complimentary SEO Analysis
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Discover How Your Website Can <span className="text-teal-300">Rank Higher</span> in Los Angeles
              </h1>
              
              <p className="text-lg text-gray-100 mb-8">
                Our comprehensive website audit will reveal critical issues that may be holding back your site's performance and costing you valuable customers.
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-300 mr-3 flex-shrink-0" />
                  <span>Technical SEO analysis with actionable recommendations</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-300 mr-3 flex-shrink-0" />
                  <span>Content optimization opportunities for Los Angeles keywords</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-teal-300 mr-3 flex-shrink-0" />
                  <span>Competitor analysis and positioning strategy</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 relative">
              <div className="absolute -top-3 -right-3 bg-teal-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                100% FREE
              </div>
              <h2 className="text-2xl font-bold text-white mb-6">Discover Your Site's Potential</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 p-8 rounded-xl text-center">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="h-10 w-10 text-green-500" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-4">Request Received!</h3>
                  <p className="text-gray-600 mb-6">
                    We'll start working on your free website audit immediately. You can expect to receive your personalized report within 2 business days.
                  </p>
                  <Button 
                    className="bg-teal-600 hover:bg-teal-700"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Submit Another Website
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} action="https://submit-form.com/VvOkPUg6M" className="space-y-5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" className="bg-white/20 border-white/30 text-white placeholder:text-gray-300" {...field} />
                          </FormControl>
                          <FormMessage className="text-red-200" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" className="bg-white/20 border-white/30 text-white placeholder:text-gray-300" {...field} />
                          </FormControl>
                          <FormMessage className="text-red-200" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Phone (Optional)</FormLabel>
                          <FormControl>
                            <Input placeholder="(310) 555-1234" className="bg-white/20 border-white/30 text-white placeholder:text-gray-300" {...field} />
                          </FormControl>
                          <FormMessage className="text-red-200" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="website"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Website URL</FormLabel>
                          <FormControl>
                            <Input placeholder="https://yourwebsite.com" className="bg-white/20 border-white/30 text-white placeholder:text-gray-300" {...field} />
                          </FormControl>
                          <FormMessage className="text-red-200" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="goals"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-white">Your Website Goals</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="What are you trying to achieve with your website? More leads, sales, visibility in Los Angeles?" 
                              className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 min-h-24 resize-none" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage className="text-red-200" />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full py-6 bg-teal-500 hover:bg-teal-600 text-white font-medium"
                      disabled={mutation.isPending}
                    >
                      {mutation.isPending ? "Submitting..." : "Get Your Free Audit"}
                    </Button>
                  </form>
                </Form>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* What You'll Get Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-heading">What Your Free Audit Includes</h2>
            <p className="section-subheading">
              Our comprehensive website audit provides actionable insights to improve your online presence in the Los Angeles market.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl subtle-shadow">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-6">
                <BarChart2 className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Technical SEO Analysis</h3>
              <p className="text-gray-600 mb-4">
                We'll analyze your site speed, mobile friendliness, crawlability, indexation issues, and other technical factors that impact rankings.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Site Speed</span>
                  <span className="text-sm font-bold text-gray-900">?</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full w-0"></div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl subtle-shadow">
              <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center mb-6">
                <PieChart className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">On-Page SEO Review</h3>
              <p className="text-gray-600 mb-4">
                We'll evaluate your content quality, keyword usage, meta tags, headings, internal linking, and local SEO factors for Los Angeles.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Content Optimization</span>
                  <span className="text-sm font-bold text-gray-900">?</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-teal-500 h-2 rounded-full w-0"></div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl subtle-shadow">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-6">
                <LineChart className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Competitive Analysis</h3>
              <p className="text-gray-600 mb-4">
                We'll identify your top competitors in Los Angeles, analyze their strategies, and reveal opportunities to outrank them.
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Competitive Position</span>
                  <span className="text-sm font-bold text-gray-900">?</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full w-0"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Example Audit Results */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-heading">Sample Audit Results</h2>
            <p className="section-subheading">
              Here's an example of the insights and recommendations you'll receive in your free website audit.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="p-6 bg-gray-50 rounded-xl mb-8">
                <h3 className="text-xl font-bold mb-4 text-primary">Before Our Recommendations</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Google Visibility Score</span>
                      <span className="text-red-500 font-semibold">32%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-400 h-2 rounded-full" style={{ width: "32%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Site Speed</span>
                      <span className="text-orange-500 font-semibold">58%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-orange-400 h-2 rounded-full" style={{ width: "58%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Mobile Optimization</span>
                      <span className="text-red-500 font-semibold">41%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-400 h-2 rounded-full" style={{ width: "41%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="text-xl font-bold mb-4 text-teal-600">After Implementing Our Recommendations</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Google Visibility Score</span>
                      <span className="text-green-500 font-semibold">78%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "78%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Site Speed</span>
                      <span className="text-green-500 font-semibold">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Mobile Optimization</span>
                      <span className="text-green-500 font-semibold">88%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: "88%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-lg mb-3 text-primary">Critical Issues Found</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-red-500">●</div>
                    <div>Slow page load times (5.6s average)</div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-red-500">●</div>
                    <div>Missing meta descriptions on 15 pages</div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-red-500">●</div>
                    <div>Duplicate content issues on service pages</div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-red-500">●</div>
                    <div>No structured data for local business</div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-red-500">●</div>
                    <div>Poor mobile responsiveness</div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-lg mb-3 text-teal-600">Recommendations Provided</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-teal-500">✓</div>
                    <div>Image optimization to reduce page size by 60%</div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-teal-500">✓</div>
                    <div>Custom meta descriptions with Los Angeles targeting</div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-teal-500">✓</div>
                    <div>Content rewrite for unique service descriptions</div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-teal-500">✓</div>
                    <div>LocalBusiness schema implementation</div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1 text-teal-500">✓</div>
                    <div>Mobile-first responsive design approach</div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                <h4 className="font-semibold text-lg mb-3 text-blue-600">Business Results</h4>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center p-2 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-700">165%</div>
                    <div className="text-xs text-gray-600">Organic Traffic</div>
                  </div>
                  <div className="text-center p-2 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-700">87%</div>
                    <div className="text-xs text-gray-600">Conversion Rate</div>
                  </div>
                  <div className="text-center p-2 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-700">3.2x</div>
                    <div className="text-xs text-gray-600">ROI Increase</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  *Results based on a real Los Angeles business client that implemented our recommendations
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Button 
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 bg-gradient-brand text-white font-medium rounded-md shadow-md hover:shadow-xl transition-all text-lg"
            >
              Get Your Free Audit Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}