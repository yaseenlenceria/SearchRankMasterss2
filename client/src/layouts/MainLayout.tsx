import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  breadcrumbs?: Array<{ name: string; href: string }>;
  showBreadcrumbs?: boolean;
}

export default function MainLayout({
  children,
  title = "LumeWeb Studios | Premium Web Solutions for LA Businesses",
  description = "LumeWeb Studios is your go-to website development, redesign, SEO, and business consultation agency in Los Angeles. We help small businesses create stunning websites.",
  breadcrumbs = [],
  showBreadcrumbs = true,
}: MainLayoutProps) {
  // Set page title and meta description
  document.title = title;
  
  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", description);
  }

  return (
    <>
      <Header />
      
      {showBreadcrumbs && <Breadcrumbs items={breadcrumbs} />}
      
      <main className="w-full max-w-[1440px] mx-auto">
        {children}
      </main>
      
      <Footer />
    </>
  );
}
