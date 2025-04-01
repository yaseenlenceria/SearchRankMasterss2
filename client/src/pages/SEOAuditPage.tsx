import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle,
  Search,
  BarChart,
  LineChart,
  ShieldCheck,
  Smartphone,
  Code,
  ArrowUpRight,
  Zap
} from "lucide-react";
import { Link } from "wouter";

export default function SEOAuditPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "SEO Audit", href: "/best-los-angeles-seo-audit" }
  ];

  return (
    <MainLayout
      title="Professional SEO Audit Services in Los Angeles | LumeWeb Studios"
      description="Get a comprehensive SEO audit for your Los Angeles business website. Our in-depth analysis identifies issues and opportunities to improve your search rankings."
      breadcrumbs={breadcrumbs}
    >
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/90 to-primary/70 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Comprehensive SEO Audit Services for Los Angeles Businesses
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                Uncover hidden issues that are holding your website back from ranking higher. Our detailed SEO audit provides actionable insights to boost your search visibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/best-los-angeles-request-for-proposal">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Request an Audit
                  </Button>
                </Link>
                <Link href="#audit-process">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="SEO Audit Analytics"
                className="rounded-lg shadow-xl max-w-full"
                width={500}
                height={350}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Audit Overview */}
      <section className="py-16 bg-gray-50" id="audit-process">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Our SEO Audit Includes</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our comprehensive SEO audit evaluates all aspects of your website that impact search rankings, with actionable recommendations for improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Search className="text-primary h-10 w-10 mr-4" />
                  <h3 className="text-xl font-semibold">Keyword Analysis</h3>
                </div>
                <p className="text-gray-700">
                  Detailed review of your current keyword strategy, identifying opportunities and competitive gaps to target high-value keywords for your Los Angeles business.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Code className="text-primary h-10 w-10 mr-4" />
                  <h3 className="text-xl font-semibold">Technical SEO</h3>
                </div>
                <p className="text-gray-700">
                  Thorough analysis of website structure, crawlability, indexation, site speed, and mobile-friendliness to ensure optimal technical performance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <LineChart className="text-primary h-10 w-10 mr-4" />
                  <h3 className="text-xl font-semibold">On-Page SEO</h3>
                </div>
                <p className="text-gray-700">
                  Evaluation of content quality, meta tags, heading structure, internal linking, and keyword usage to optimize your on-page elements.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <ArrowUpRight className="text-primary h-10 w-10 mr-4" />
                  <h3 className="text-xl font-semibold">Backlink Analysis</h3>
                </div>
                <p className="text-gray-700">
                  In-depth review of your backlink profile, identifying toxic links and opportunities for high-quality link building with local Los Angeles businesses.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Smartphone className="text-primary h-10 w-10 mr-4" />
                  <h3 className="text-xl font-semibold">Local SEO Assessment</h3>
                </div>
                <p className="text-gray-700">
                  Analysis of your Google Business Profile, local citations, and location-specific optimization to improve visibility in Los Angeles search results.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <BarChart className="text-primary h-10 w-10 mr-4" />
                  <h3 className="text-xl font-semibold">Competitor Analysis</h3>
                </div>
                <p className="text-gray-700">
                  Comparison with top competitors in the Los Angeles market to identify their strengths and weaknesses, and opportunities for your website.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Audit Process */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our SEO Audit Process</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our systematic approach ensures a thorough evaluation of your website's SEO performance, providing you with actionable strategies for improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex">
              <div className="mr-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white">
                  1
                </div>
                <div className="h-full w-px bg-gray-300 mx-auto mt-2"></div>
              </div>
              <div className="pb-12">
                <h3 className="text-xl font-semibold mb-3">Discovery & Data Collection</h3>
                <p className="text-gray-700">
                  We begin by gathering all relevant data about your website, business goals, target audience, and current search performance. This includes access to analytics, search console, and other measurement tools.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white">
                  2
                </div>
                <div className="h-full w-px bg-gray-300 mx-auto mt-2"></div>
              </div>
              <div className="pb-12">
                <h3 className="text-xl font-semibold mb-3">Technical SEO Analysis</h3>
                <p className="text-gray-700">
                  Our team conducts a thorough technical audit of your website, examining site structure, crawlability, indexability, site speed, mobile-friendliness, and other technical aspects.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white">
                  3
                </div>
                <div className="h-full w-px bg-gray-300 mx-auto mt-2"></div>
              </div>
              <div className="pb-12">
                <h3 className="text-xl font-semibold mb-3">Content & On-Page SEO Review</h3>
                <p className="text-gray-700">
                  We evaluate your content quality, relevance, keyword usage, meta tags, headings, internal linking, and other on-page elements to identify opportunities for optimization.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white">
                  4
                </div>
                <div className="h-full w-px bg-gray-300 mx-auto mt-2"></div>
              </div>
              <div className="pb-12">
                <h3 className="text-xl font-semibold mb-3">Off-Page & Local SEO Assessment</h3>
                <p className="text-gray-700">
                  Our experts analyze your backlink profile, local citations, Google Business Profile, and other off-page factors that impact your search visibility, particularly in the Los Angeles area.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white">
                  5
                </div>
                <div className="h-full w-px bg-gray-300 mx-auto mt-2"></div>
              </div>
              <div className="pb-12">
                <h3 className="text-xl font-semibold mb-3">Competitor Analysis</h3>
                <p className="text-gray-700">
                  We benchmark your website against top competitors in your industry and local market to identify competitive gaps and opportunities for differentiation.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="mr-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white">
                  6
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Detailed Report & Strategic Recommendations</h3>
                <p className="text-gray-700">
                  We provide a comprehensive report with our findings, prioritized recommendations, and an actionable roadmap for implementing SEO improvements to achieve your business goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why You Need an SEO Audit</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A comprehensive SEO audit is the foundation of any successful search engine optimization strategy, providing critical insights for improvement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="text-teal-500 h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Identify Technical Issues</h3>
              <p className="text-gray-700">
                Uncover hidden technical problems that may be preventing search engines from properly indexing and ranking your site.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="text-teal-500 h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Improve User Experience</h3>
              <p className="text-gray-700">
                Enhance site speed, mobile responsiveness, and navigation to create a better experience for your visitors, leading to higher conversion rates.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="text-teal-500 h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Target the Right Keywords</h3>
              <p className="text-gray-700">
                Discover the most valuable keywords for your Los Angeles business that will drive qualified traffic and potential customers to your website.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="text-teal-500 h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Outrank Competitors</h3>
              <p className="text-gray-700">
                Understand what your competitors are doing right and where they're falling short, so you can develop strategies to gain a competitive edge.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="text-teal-500 h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Increase Local Visibility</h3>
              <p className="text-gray-700">
                Optimize your local SEO to ensure your business appears in local searches, Google Maps, and other location-based search results in Los Angeles.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="text-teal-500 h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Maximize ROI</h3>
              <p className="text-gray-700">
                Focus your SEO efforts and budget on the strategies that will deliver the best results, maximizing your return on investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Unlock Your Website's Full Potential?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Get a comprehensive SEO audit from Los Angeles' leading digital marketing experts and start climbing the search rankings today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/best-los-angeles-request-for-proposal">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Request an Audit
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

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700">
              Get answers to common questions about our SEO audit services.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">How long does an SEO audit take?</h3>
              <p className="text-gray-700">
                A comprehensive SEO audit typically takes 7-14 days to complete, depending on the size and complexity of your website. We analyze hundreds of factors that affect your search rankings to provide a thorough evaluation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">What do I receive after the audit is complete?</h3>
              <p className="text-gray-700">
                You'll receive a detailed report outlining our findings, prioritized recommendations, and an actionable roadmap for implementing improvements. We also schedule a call to review the results and answer any questions you may have.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">How often should I conduct an SEO audit?</h3>
              <p className="text-gray-700">
                We recommend conducting a comprehensive SEO audit annually, with quarterly mini-audits to monitor progress and address emerging issues. This ensures your SEO strategy stays current with algorithm changes and market trends.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Do you provide implementation services after the audit?</h3>
              <p className="text-gray-700">
                Yes, we offer full implementation services to address the issues identified in the audit. Our team can handle technical fixes, content optimization, link building, and local SEO improvements to boost your rankings.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">How much does an SEO audit cost?</h3>
              <p className="text-gray-700">
                The cost of an SEO audit depends on the size of your website and the depth of analysis required. Our audits start at $1,500 for small websites and increase based on complexity. Contact us for a custom quote.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}