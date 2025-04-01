import { Switch, Route } from "wouter";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import ServicePage from "@/pages/ServicePage";
import IndustryPage from "@/pages/IndustryPage";
import CaseStudiesPage from "@/pages/CaseStudiesPage";
import CaseStudyPage from "@/pages/CaseStudyPage";
import NotFound from "@/pages/not-found";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { caseStudies } from "@/data/caseStudies";

function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contact-us" component={Contact} />
      
      {/* Service Pages */}
      {services.map((service) => (
        <Route 
          key={service.slug}
          path={`/best-los-angeles-${service.slug}`}
          component={() => <ServicePage serviceSlug={service.slug} />}
        />
      ))}
      
      {/* Industry Pages */}
      <Route path="/best-los-angeles-industries" component={() => <IndustryPage showAll />} />
      {industries.map((industry) => (
        <Route 
          key={industry.slug}
          path={`/best-los-angeles-industries-${industry.slug}`}
          component={() => <IndustryPage industrySlug={industry.slug} />}
        />
      ))}
      
      {/* Case Studies */}
      <Route path="/best-los-angeles-case-studies" component={CaseStudiesPage} />
      {caseStudies.map((study) => (
        <Route 
          key={study.slug}
          path={`/best-los-angeles-case-studies-${study.slug}`}
          component={() => <CaseStudyPage studySlug={study.slug} />}
        />
      ))}
      
      {/* Fallback 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
