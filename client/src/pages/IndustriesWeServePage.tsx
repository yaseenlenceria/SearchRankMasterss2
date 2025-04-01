import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  ShoppingBag,
  Utensils,
  Warehouse,
  Building,
  Car,
  GraduationCap,
  Home,
  Stethoscope,
  PenTool,
  ArrowUpRight
} from "lucide-react";
import { Link } from "wouter";

export default function IndustriesWeServePage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Industries We Serve", href: "/best-los-angeles-industries-we-serve" }
  ];

  const industries = [
    {
      name: "Real Estate",
      icon: <Building2 className="h-10 w-10 text-primary" />,
      description: "We help real estate agents, brokers, and property management companies attract more leads, showcase properties, and close more deals with strategic digital marketing and stunning websites.",
      link: "/best-los-angeles-industries/real-estate"
    },
    {
      name: "Healthcare",
      icon: <Stethoscope className="h-10 w-10 text-primary" />,
      description: "Our digital solutions for healthcare providers focus on patient acquisition, appointment scheduling, and building trust through accessible, informative, and compliant web experiences.",
      link: "/best-los-angeles-industries/healthcare"
    },
    {
      name: "Retail & E-commerce",
      icon: <ShoppingBag className="h-10 w-10 text-primary" />,
      description: "We create seamless online shopping experiences and digital marketing strategies that drive traffic, increase conversions, and build customer loyalty for retailers and e-commerce businesses.",
      link: "/best-los-angeles-industries/retail"
    },
    {
      name: "Restaurants & Hospitality",
      icon: <Utensils className="h-10 w-10 text-primary" />,
      description: "Our restaurant and hospitality marketing solutions help increase reservations, showcase menus and amenities, and improve customer engagement through strategic digital presence.",
      link: "/best-los-angeles-industries/restaurants"
    },
    {
      name: "Professional Services",
      icon: <Building className="h-10 w-10 text-primary" />,
      description: "We help law firms, accounting firms, and consultancies establish authority, generate leads, and streamline client communication through targeted digital marketing and web design.",
      link: "/best-los-angeles-industries/professional-services"
    },
    {
      name: "Manufacturing",
      icon: <Warehouse className="h-10 w-10 text-primary" />,
      description: "Our digital strategies for manufacturers focus on showcasing products, streamlining distributor relationships, and establishing industry leadership through effective online presence.",
      link: "/best-los-angeles-industries/manufacturing"
    },
    {
      name: "Automotive",
      icon: <Car className="h-10 w-10 text-primary" />,
      description: "We help automotive dealerships, repair shops, and parts retailers drive more traffic, showcase inventory, and increase service appointments through targeted digital marketing.",
      link: "/best-los-angeles-industries/automotive"
    },
    {
      name: "Education",
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
      description: "Our education-focused digital solutions help schools, universities, and educational programs increase enrollment, engage students, and communicate effectively with parents and stakeholders.",
      link: "/best-los-angeles-industries/education"
    },
    {
      name: "Home Services",
      icon: <Home className="h-10 w-10 text-primary" />,
      description: "We help contractors, cleaning services, landscapers, and other home service providers generate qualified leads, showcase their work, and build trust with potential customers.",
      link: "/best-los-angeles-industries/home-services"
    },
    {
      name: "Creative & Design",
      icon: <PenTool className="h-10 w-10 text-primary" />,
      description: "Our digital marketing strategies for creative professionals and agencies focus on portfolio showcasing, client acquisition, and establishing unique brand positioning in competitive markets.",
      link: "/best-los-angeles-industries/creative"
    }
  ];

  return (
    <MainLayout
      title="Industries We Serve | Digital Marketing & Web Design | LumeWeb Studios"
      description="LumeWeb Studios provides specialized digital marketing and web design services across various industries in Los Angeles. Discover industry-specific solutions for your business."
      breadcrumbs={breadcrumbs}
    >
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/90 to-primary/70 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Industry-Specific Digital Solutions for Los Angeles Businesses
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              We understand the unique challenges and opportunities in your industry. Our specialized digital marketing and web design services are tailored to meet the specific needs of businesses across various sectors.
            </p>
            <Link href="/best-los-angeles-request-for-proposal">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Request a Proposal
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Industries We Serve</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Explore our industry-specific digital marketing and web design solutions designed to meet the unique needs of various business sectors in Los Angeles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col h-full">
                    <div className="mb-5">{industry.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{industry.name}</h3>
                    <p className="text-gray-700 mb-5 flex-grow">{industry.description}</p>
                    <Link href={industry.link} className="text-primary hover:text-primary-dark font-medium inline-flex items-center mt-auto">
                      <span>Learn More</span>
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Industry-Focused Approach</h2>
              <p className="text-lg text-gray-700 mb-6">
                At LumeWeb Studios, we believe that effective digital strategy requires industry-specific knowledge. That's why we take a specialized approach to serving businesses across different sectors in Los Angeles.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-primary"></div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Industry Research</h3>
                    <p className="text-gray-700">We stay up-to-date with trends, challenges, and opportunities in your industry to inform our strategy.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-primary"></div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Competitive Analysis</h3>
                    <p className="text-gray-700">We analyze your competitors within your specific industry to identify opportunities for differentiation.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-primary"></div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Tailored Solutions</h3>
                    <p className="text-gray-700">We customize our digital marketing and web design services to address your industry-specific challenges.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-primary"></div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Results Measurement</h3>
                    <p className="text-gray-700">We track key performance indicators relevant to your industry to ensure our strategies deliver meaningful results.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Our Industry-Focused Approach"
                className="rounded-lg shadow-xl max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose LumeWeb Studios</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our industry expertise combined with digital marketing excellence makes us the ideal partner for businesses across Los Angeles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Industry Expertise</h3>
              <p className="text-gray-700">
                Our team has deep knowledge across various industries, allowing us to create strategies that address your specific challenges and opportunities.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Customized Strategies</h3>
              <p className="text-gray-700">
                We don't believe in one-size-fits-all solutions. Every strategy we develop is tailored to your industry, business goals, and target audience.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
              <p className="text-gray-700">
                Our industry-specific approach has delivered measurable results for businesses across Los Angeles, from increased traffic to higher conversion rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Hear from businesses across different industries about their experience working with LumeWeb Studios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="36" viewBox="0 0 45 36" fill="none" className="text-primary/30">
                    <path d="M13.052 0L0 36H13.052L19.578 0H13.052ZM38.474 0L25.422 36H38.474L45 0H38.474Z" fill="currentColor" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-6">
                  "LumeWeb Studios transformed our real estate agency's online presence. Their industry knowledge and SEO expertise helped us attract high-quality leads and close more deals."
                </p>
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-gray-600">CEO, LA Premier Properties</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="36" viewBox="0 0 45 36" fill="none" className="text-primary/30">
                    <path d="M13.052 0L0 36H13.052L19.578 0H13.052ZM38.474 0L25.422 36H38.474L45 0H38.474Z" fill="currentColor" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-6">
                  "As a healthcare provider, we needed a website that was both professional and accessible to our patients. LumeWeb Studios delivered exactly what we needed while meeting all compliance requirements."
                </p>
                <div>
                  <p className="font-semibold">Dr. Michael Chen</p>
                  <p className="text-sm text-gray-600">Director, Westside Medical Group</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardContent className="p-8">
                <div className="mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="45" height="36" viewBox="0 0 45 36" fill="none" className="text-primary/30">
                    <path d="M13.052 0L0 36H13.052L19.578 0H13.052ZM38.474 0L25.422 36H38.474L45 0H38.474Z" fill="currentColor" />
                  </svg>
                </div>
                <p className="text-gray-700 mb-6">
                  "Our e-commerce sales increased by 215% after implementing LumeWeb Studios' digital marketing strategy. Their understanding of retail customer behavior made all the difference."
                </p>
                <div>
                  <p className="font-semibold">Jessica Torres</p>
                  <p className="text-sm text-gray-600">Owner, Urban Style Boutique</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Get in touch with our team to discuss how our industry-specific digital solutions can help your Los Angeles business thrive online.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/best-los-angeles-request-for-proposal">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Request a Proposal
              </Button>
            </Link>
            <Link href="/contact-us">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}