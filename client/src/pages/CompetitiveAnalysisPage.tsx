import MainLayout from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  LineChart,
  BarChart2,
  Users,
  TrendingUp,
  Search,
  Eye,
  Award,
  ArrowUpRight,
  CheckCircle
} from "lucide-react";
import { Link } from "wouter";

export default function CompetitiveAnalysisPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Competitive Analysis", href: "/best-los-angeles-competitive-analysis" }
  ];

  return (
    <MainLayout
      title="Comprehensive Competitive Analysis Services in Los Angeles | LumeWeb Studios"
      description="Get powerful insights into your competitors' strategies with our comprehensive competitive analysis services for Los Angeles businesses."
      breadcrumbs={breadcrumbs}
    >
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/90 to-primary/70 text-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Gain the Competitive Edge in Los Angeles Market
              </h1>
              <p className="text-lg md:text-xl mb-8 text-white/90">
                Uncover your competitors' strategies and identify opportunities to outperform them with our in-depth competitive analysis services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/best-los-angeles-request-for-proposal">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Request Analysis
                  </Button>
                </Link>
                <Link href="#analysis-process">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Competitive Analysis Strategy"
                className="rounded-lg shadow-xl max-w-full"
                width={500}
                height={350}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Overview */}
      <section className="py-16 bg-gray-50" id="analysis-process">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Comprehensive Competitive Analysis</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our detailed competitor analysis gives you actionable insights to help you stand out in your industry and capture market share in the Los Angeles area.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Search className="text-primary h-10 w-10 mr-4" />
                  <h3 className="text-xl font-semibold">SEO & Content Strategy</h3>
                </div>
                <p className="text-gray-700">
                  We identify your competitors' target keywords, content gaps, and SEO tactics, giving you insights to develop a stronger organic search presence.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <BarChart2 className="text-primary h-10 w-10 mr-4" />
                  <h3 className="text-xl font-semibold">Market Positioning</h3>
                </div>
                <p className="text-gray-700">
                  Understand how your competitors position themselves in the Los Angeles market, identifying opportunities for differentiation and unique selling propositions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="text-primary h-10 w-10 mr-4" />
                  <h3 className="text-xl font-semibold">Digital Marketing Tactics</h3>
                </div>
                <p className="text-gray-700">
                  Analyze competitors' social media, email marketing, PPC campaigns, and other digital marketing strategies to optimize your own approach.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Users className="text-primary h-10 w-10 mr-4" />
                  <h3 className="text-xl font-semibold">Audience Analysis</h3>
                </div>
                <p className="text-gray-700">
                  Identify your competitors' target audience, engagement strategies, and how they address customer pain points to refine your customer approach.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Eye className="text-primary h-10 w-10 mr-4" />
                  <h3 className="text-xl font-semibold">Website UX/UI Evaluation</h3>
                </div>
                <p className="text-gray-700">
                  Review competitors' website designs, user experience, features, and conversion strategies to improve your own website performance.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Target className="text-primary h-10 w-10 mr-4" />
                  <h3 className="text-xl font-semibold">Local Business Strategy</h3>
                </div>
                <p className="text-gray-700">
                  Assess how competitors leverage local Los Angeles business opportunities, partnerships, and community engagement to enhance your local presence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Analysis Process */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Competitive Analysis Process</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We follow a systematic approach to provide you with actionable competitive intelligence that drives business results.
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
                <h3 className="text-xl font-semibold mb-3">Competitor Identification</h3>
                <p className="text-gray-700">
                  We identify your direct and indirect competitors in the Los Angeles market, including established players and emerging threats in your industry.
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
                <h3 className="text-xl font-semibold mb-3">In-Depth Research</h3>
                <p className="text-gray-700">
                  Our team conducts thorough research on each competitor's online presence, marketing strategies, product/service offerings, and customer experience.
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
                <h3 className="text-xl font-semibold mb-3">Digital Marketing Analysis</h3>
                <p className="text-gray-700">
                  We analyze competitors' SEO strategies, content marketing, social media presence, email marketing, and paid advertising campaigns to identify best practices.
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
                <h3 className="text-xl font-semibold mb-3">SWOT Analysis</h3>
                <p className="text-gray-700">
                  We perform a comprehensive SWOT analysis (Strengths, Weaknesses, Opportunities, Threats) to identify competitive advantages and areas for improvement.
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
                <h3 className="text-xl font-semibold mb-3">Gap Analysis</h3>
                <p className="text-gray-700">
                  We identify gaps in the market and your competitors' offerings that represent opportunities for your business to gain competitive advantage.
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
                <h3 className="text-xl font-semibold mb-3">Strategic Recommendations</h3>
                <p className="text-gray-700">
                  We deliver actionable recommendations and a strategic roadmap to help you outperform competitors and capture market share in the Los Angeles area.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits of Competitive Analysis</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Understanding your competition is essential for developing effective business strategies that drive growth and market leadership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="text-teal-500 h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Identify Market Opportunities</h3>
              <p className="text-gray-700">
                Discover untapped market segments, service gaps, and emerging trends that you can capitalize on before your competitors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="text-teal-500 h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Refine Your Unique Value Proposition</h3>
              <p className="text-gray-700">
                Develop a stronger value proposition that effectively differentiates your business from competitors in the Los Angeles market.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="text-teal-500 h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Optimize Marketing Strategies</h3>
              <p className="text-gray-700">
                Improve your marketing effectiveness by learning from competitors' successes and failures, focusing your budget on high-impact activities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="text-teal-500 h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Enhance Product/Service Offerings</h3>
              <p className="text-gray-700">
                Refine your products or services based on competitive insights, addressing customer needs better than your competition.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="text-teal-500 h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Anticipate Market Changes</h3>
              <p className="text-gray-700">
                Stay ahead of industry shifts by monitoring competitors' strategies, allowing you to adapt quickly to changing market conditions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <CheckCircle className="text-teal-500 h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Make Data-Driven Decisions</h3>
              <p className="text-gray-700">
                Base your business strategies on solid competitive intelligence rather than assumptions, reducing risk and increasing success rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Success Stories</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              See how our competitive analysis has helped Los Angeles businesses gain market advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Award className="text-teal-500 h-8 w-8 mr-3" />
                <h3 className="text-xl font-semibold">LA Tech Startup</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Our competitive analysis helped a Los Angeles tech startup identify an underserved market segment that larger competitors had overlooked. By focusing on this niche, they achieved 215% growth in their first year.
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold text-primary">215%</span>
                  <span className="text-gray-600 ml-2">Growth</span>
                </div>
                <Link href="/best-los-angeles-case-studies" className="text-primary hover:text-primary-dark flex items-center">
                  <span className="mr-1">Read Case Study</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Award className="text-teal-500 h-8 w-8 mr-3" />
                <h3 className="text-xl font-semibold">Healthcare Provider</h3>
              </div>
              <p className="text-gray-700 mb-4">
                A Los Angeles healthcare provider used our competitive analysis to revamp their digital marketing strategy, resulting in a 180% increase in qualified leads and a 43% reduction in customer acquisition costs.
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold text-primary">180%</span>
                  <span className="text-gray-600 ml-2">More Leads</span>
                </div>
                <Link href="/best-los-angeles-case-studies" className="text-primary hover:text-primary-dark flex items-center">
                  <span className="mr-1">Read Case Study</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Award className="text-teal-500 h-8 w-8 mr-3" />
                <h3 className="text-xl font-semibold">Retail Chain</h3>
              </div>
              <p className="text-gray-700 mb-4">
                Our analysis helped a Los Angeles retail chain identify gaps in competitors' product offerings, leading to the development of a new product line that generated $1.2M in additional revenue within six months.
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold text-primary">$1.2M</span>
                  <span className="text-gray-600 ml-2">New Revenue</span>
                </div>
                <Link href="/best-los-angeles-case-studies" className="text-primary hover:text-primary-dark flex items-center">
                  <span className="mr-1">Read Case Study</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Award className="text-teal-500 h-8 w-8 mr-3" />
                <h3 className="text-xl font-semibold">Professional Services Firm</h3>
              </div>
              <p className="text-gray-700 mb-4">
                A Los Angeles-based law firm used our competitive content analysis to revamp their content strategy, resulting in a 320% increase in organic traffic and 47 new high-value client acquisitions.
              </p>
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-2xl font-bold text-primary">320%</span>
                  <span className="text-gray-600 ml-2">Traffic Increase</span>
                </div>
                <Link href="/best-los-angeles-case-studies" className="text-primary hover:text-primary-dark flex items-center">
                  <span className="mr-1">Read Case Study</span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-7xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Outperform Your Competition?</h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Get a comprehensive competitive analysis from Los Angeles' leading digital marketing experts and start gaining market share today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/best-los-angeles-request-for-proposal">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Request Analysis
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
              Get answers to common questions about our competitive analysis services.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">How many competitors do you analyze?</h3>
              <p className="text-gray-700">
                Our standard competitive analysis includes detailed reviews of 3-5 direct competitors and a broader overview of your industry landscape. We can customize the scope based on your specific needs and market situation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">How long does a competitive analysis take?</h3>
              <p className="text-gray-700">
                A comprehensive competitive analysis typically takes 2-3 weeks to complete, depending on the scope and complexity of your industry. This allows us to gather and analyze sufficient data to provide actionable insights.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">What deliverables will I receive?</h3>
              <p className="text-gray-700">
                You'll receive a detailed report with competitor profiles, SWOT analysis, gap analysis, and strategic recommendations. We also provide a presentation of findings and a consultation to discuss implementation strategies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">How often should competitive analysis be updated?</h3>
              <p className="text-gray-700">
                We recommend updating your competitive analysis quarterly or semi-annually to stay current with market changes and competitor activities. More frequent monitoring may be advisable in rapidly evolving industries.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Do you offer implementation support?</h3>
              <p className="text-gray-700">
                Yes, we provide implementation support through our digital marketing services. We can help you execute the strategies identified in the competitive analysis, from SEO and content marketing to website redesign and paid advertising.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}