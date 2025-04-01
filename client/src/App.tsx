import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import Home from "@/pages/Home";
import Contact from "@/pages/Contact";
import ServicePage from "@/pages/ServicePage";
import IndustryPage from "@/pages/IndustryPage";
import CaseStudiesPage from "@/pages/CaseStudiesPage";
import CaseStudyPage from "@/pages/CaseStudyPage";
import FreeAuditPage from "@/pages/FreeAuditPage";
import NotFound from "@/pages/not-found";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { caseStudies } from "@/data/caseStudies";

// Scroll to top component to ensure pages load from the top when navigating
function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/best-los-angeles-contact-us" component={Contact} />
        <Route path="/contact-us" component={Contact} />
        
        {/* Free Audit Page */}
        <Route path="/best-los-angeles-free-site-audit" component={FreeAuditPage} />
        <Route path="/best-los-angeles-request-for-proposal" component={Contact} />
        
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
    </>
  );
}

export default App;
