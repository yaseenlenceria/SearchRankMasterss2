import MainLayout from "@/layouts/MainLayout";

export default function DisclaimerPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Disclaimer", href: "/best-los-angeles-disclaimer" }
  ];

  return (
    <MainLayout
      title="Website Disclaimer | LumeWeb Studios"
      description="Read the disclaimer for LumeWeb Studios, a Los Angeles-based web development and digital marketing agency."
      breadcrumbs={breadcrumbs}
    >
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Disclaimer</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Website Disclaimer</h2>
            <p>
              The information provided by LumeWeb Studios ("we," "us," or "our") on lumewebstudios.com (the "Site") is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.
            </p>
            
            <p>
              Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the Site or reliance on any information provided on the Site. Your use of the Site and your reliance on any information on the Site is solely at your own risk.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. External Links Disclaimer</h2>
            <p>
              The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features in banners or other advertising. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.
            </p>
            
            <p>
              We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability of any information offered by third-party websites linked through the Site or any website or feature linked in any banner or other advertising. We will not be a party to or in any way be responsible for monitoring any transaction between you and third-party providers of products or services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Professional Disclaimer</h2>
            <p>
              The Site cannot and does not contain marketing, legal, or financial advice. The marketing, legal, and financial information is provided for general informational and educational purposes only and is not a substitute for professional advice.
            </p>
            
            <p>
              Accordingly, before taking any actions based upon such information, we encourage you to consult with the appropriate professionals. We do not provide any kind of marketing, legal, or financial advice. The use or reliance of any information contained on the Site is solely at your own risk.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Testimonials Disclaimer</h2>
            <p>
              The Site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume, that all users will have the same experiences.
            </p>
            
            <p>
              Your individual results may vary. The testimonials on the Site are submitted in various forms such as text, audio and/or video, and are reviewed by us before being posted. They appear on the Site verbatim as given by the users, except for the correction of grammar or typing errors. Some testimonials may have been shortened for the sake of brevity where the full testimonial contained extraneous information not relevant to the general public.
            </p>
            
            <p>
              The views and opinions contained in the testimonials belong solely to the individual user and do not reflect our views and opinions.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Errors and Omissions Disclaimer</h2>
            <p>
              The information given by the Site is for general guidance on matters of interest only. Even if the Company takes every precaution to ensure that the content of the Site is both current and accurate, errors can occur. Plus, given the changing nature of laws, rules, and regulations, there may be delays, omissions, or inaccuracies in the information contained on the Site.
            </p>
            
            <p>
              The Company is not responsible for any errors or omissions, or for the results obtained from the use of this information.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Fair Use Disclaimer</h2>
            <p>
              The Company may use copyrighted material which has not always been specifically authorized by the copyright owner. The Company is making such material available for criticism, comment, news reporting, teaching, scholarship, or research.
            </p>
            
            <p>
              The Company believes this constitutes a "fair use" of any such copyrighted material as provided for in section 107 of the United States Copyright law.
            </p>
            
            <p>
              If you wish to use copyrighted material from the Site for your own purposes that go beyond fair use, you must obtain permission from the copyright owner.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Views Expressed Disclaimer</h2>
            <p>
              The Site may contain views and opinions which are those of the authors and do not necessarily reflect the official policy or position of any other author, agency, organization, employer, or company, including the Company.
            </p>
            
            <p>
              Comments published by users are their sole responsibility and the users will take full responsibility, liability, and blame for any libel or litigation that results from something written in or as a direct result of something written in a comment. The Company is not liable for any comment published by users and reserves the right to delete any comment for any reason whatsoever.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. No Responsibility Disclaimer</h2>
            <p>
              The information on the Site is provided with the understanding that the Company is not herein engaged in rendering legal, accounting, tax, or other professional advice and services. As such, it should not be used as a substitute for consultation with professional accounting, tax, legal, or other competent advisers.
            </p>
            
            <p>
              In no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever arising out of or in connection with your access or use or inability to access or use the Site.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. "Use at Your Own Risk" Disclaimer</h2>
            <p>
              All information in the Site is provided "as is," with no guarantee of completeness, accuracy, timeliness, or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability, and fitness for a particular purpose.
            </p>
            
            <p>
              The Company will not be liable to you or anyone else for any decision made or action taken in reliance on the information given by the Site or for any consequential, special, or similar damages, even if advised of the possibility of such damages.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
            <p>
              If you have any questions about this Disclaimer, you can contact us at:
            </p>
            <p>
              LumeWeb Studios<br />
              Los Angeles, CA<br />
              Phone: +1 (323) 841-0348<br />
              Email: info@lumewebstudios.com
            </p>
            
            <p className="mt-8 text-gray-600 text-sm">
              Last updated: April 1, 2025
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}