import MainLayout from "@/layouts/MainLayout";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Industries from "@/components/home/Industries";
import CaseStudies from "@/components/home/CaseStudies";
import Testimonials from "@/components/home/Testimonials";
import CallToAction from "@/components/home/CallToAction";
import ContactForm from "@/components/home/ContactForm";

export default function Home() {
  return (
    <MainLayout showBreadcrumbs={false}>
      <Hero />
      <Services />
      <Industries />
      <CaseStudies />
      <Testimonials />
      <CallToAction />
      <ContactForm />
    </MainLayout>
  );
}
