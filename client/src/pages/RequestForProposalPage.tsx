import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, Send } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const rfpFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  company: z.string().min(1, { message: "Company name is required." }),
  website: z.string().optional(),
  projectType: z.string().min(1, { message: "Please select a project type." }),
  budget: z.string().min(1, { message: "Please select a budget range." }),
  timeline: z.string().min(1, { message: "Please select a timeline." }),
  projectDetails: z.string().min(20, { message: "Please provide more details about your project." }),
});

type RfpFormValues = z.infer<typeof rfpFormSchema>;

export default function RequestForProposalPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Request for Proposal", href: "/best-los-angeles-request-for-proposal" }
  ];

  const form = useForm<RfpFormValues>({
    resolver: zodResolver(rfpFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      website: "",
      projectType: "",
      budget: "",
      timeline: "",
      projectDetails: "",
    },
  });

  async function onSubmit(values: RfpFormValues) {
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      
      // Add all form values to formData
      Object.entries(values).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });
      
      // Submit to form service
      const response = await fetch("https://submit-form.com/VvOkPUg6M", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: "Proposal request submitted!",
          description: "We'll get back to you within 1-2 business days.",
        });
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong!",
        description: "Please try submitting your request again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <MainLayout
      title="Request a Proposal | LumeWeb Studios"
      description="Request a detailed proposal for your web development or digital marketing project from LumeWeb Studios, a Los Angeles-based agency."
      breadcrumbs={breadcrumbs}
    >
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/90 to-primary/70 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Request a Custom Proposal
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90 max-w-3xl">
              Tell us about your project goals and requirements, and our team will create a tailored proposal to help your Los Angeles business succeed online.
            </p>
          </div>
        </div>
      </section>

      {/* RFP Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card className="border-none shadow-xl">
            <CardContent className="p-8 md:p-12">
              {isSubmitted ? (
                <div className="text-center py-10">
                  <div className="flex justify-center mb-6">
                    <CheckCircle className="h-16 w-16 text-teal-500" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Thank You for Your Request!</h2>
                  <p className="text-lg text-gray-700 mb-8">
                    We've received your proposal request and will review it promptly. One of our team members will contact you within 1-2 business days to discuss your project in more detail.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} className="mt-4">
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <>
                  <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Tell Us About Your Project</h2>
                    <p className="text-gray-700">
                      Fill out the form below to request a detailed proposal tailored to your specific needs.
                    </p>
                  </div>

                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} action="https://submit-form.com/VvOkPUg6M" className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name*</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address*</FormLabel>
                              <FormControl>
                                <Input placeholder="you@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number*</FormLabel>
                              <FormControl>
                                <Input placeholder="(323) 555-1234" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="company"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company Name*</FormLabel>
                              <FormControl>
                                <Input placeholder="Your Company" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="website"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Current Website (if any)</FormLabel>
                              <FormControl>
                                <Input placeholder="https://yourwebsite.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="projectType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Project Type*</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select project type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="website-design">Website Design & Development</SelectItem>
                                  <SelectItem value="ecommerce">E-commerce Website</SelectItem>
                                  <SelectItem value="seo">SEO & Content Marketing</SelectItem>
                                  <SelectItem value="ppc">PPC & Paid Advertising</SelectItem>
                                  <SelectItem value="branding">Branding & Identity</SelectItem>
                                  <SelectItem value="social-media">Social Media Marketing</SelectItem>
                                  <SelectItem value="email-marketing">Email Marketing</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="budget"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Budget Range*</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select budget range" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="below-5k">Below $5,000</SelectItem>
                                  <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                                  <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                                  <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                                  <SelectItem value="50k-plus">$50,000+</SelectItem>
                                  <SelectItem value="not-sure">Not Sure</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="timeline"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Project Timeline*</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select timeline" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="immediate">Immediate (1-2 weeks)</SelectItem>
                                  <SelectItem value="1-month">1 month</SelectItem>
                                  <SelectItem value="2-3-months">2-3 months</SelectItem>
                                  <SelectItem value="3-6-months">3-6 months</SelectItem>
                                  <SelectItem value="6-plus-months">6+ months</SelectItem>
                                  <SelectItem value="flexible">Flexible</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="projectDetails"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Project Details*</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Please describe your project goals, requirements, and any specific features you need. The more details you provide, the better we can tailor our proposal."
                                className="min-h-[150px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="text-center pt-4">
                        <Button type="submit" size="lg" className="px-8" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <span className="flex items-center">
                              <span className="animate-spin mr-2">⟳</span> Submitting...
                            </span>
                          ) : (
                            <span className="flex items-center">
                              <Send className="mr-2 h-5 w-5" /> Submit Request
                            </span>
                          )}
                        </Button>
                        <p className="text-sm text-gray-500 mt-4">
                          We'll get back to you within 1-2 business days.
                        </p>
                      </div>
                    </form>
                  </Form>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Work With LumeWeb Studios</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We're committed to delivering exceptional results for our clients through strategic thinking, creative design, and technical excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Personalized Approach</h3>
                <p className="text-gray-700">
                  We take the time to understand your business, target audience, and goals to create tailored solutions that drive results.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Transparent Communication</h3>
                <p className="text-gray-700">
                  We believe in open and clear communication throughout the project, keeping you informed at every stage of the process.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Technical Expertise</h3>
                <p className="text-gray-700">
                  Our team brings years of experience in web development, SEO, content marketing, and digital strategy to your project.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Results-Driven</h3>
                <p className="text-gray-700">
                  We focus on achieving measurable results that contribute to your business growth and success in the Los Angeles market.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Creative Excellence</h3>
                <p className="text-gray-700">
                  Our creative team delivers stunning designs that captivate your audience while maintaining optimal functionality.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Long-Term Partnership</h3>
                <p className="text-gray-700">
                  We aim to build lasting relationships with our clients, providing ongoing support and strategic guidance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Proposal Process</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              What to expect after submitting your request for proposal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Initial Consultation</h3>
              <p className="text-gray-700">
                We'll schedule a call to discuss your project in detail, understand your goals, and answer any questions you may have.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Proposal Development</h3>
              <p className="text-gray-700">
                Our team will create a comprehensive proposal including project scope, timeline, deliverables, and investment details.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">Proposal Review</h3>
              <p className="text-gray-700">
                We'll walk you through the proposal, address any questions, and refine the details until you're completely satisfied.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">How quickly will I receive a proposal after submitting my request?</h3>
              <p className="text-gray-700">
                We typically respond to proposal requests within 1-2 business days. The time to develop a complete proposal depends on the complexity of your project, but most proposals are delivered within 3-5 business days after our initial consultation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Is there a cost for receiving a proposal?</h3>
              <p className="text-gray-700">
                No, all our proposals are provided free of charge with no obligation. We believe in demonstrating our value and expertise before you make any commitments.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">What information do I need to provide for the most accurate proposal?</h3>
              <p className="text-gray-700">
                The more details you can provide about your project goals, target audience, desired features, and budget range, the more accurate and tailored our proposal will be. However, we can work with you to clarify these details during our consultation if you're unsure.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Can you work with clients outside of Los Angeles?</h3>
              <p className="text-gray-700">
                Absolutely! While we're based in Los Angeles and have deep expertise in the local market, we work with clients nationwide and can provide the same level of service regardless of your location.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}