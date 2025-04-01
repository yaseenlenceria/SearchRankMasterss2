import MainLayout from "@/layouts/MainLayout";

export default function PrivacyPolicyPage() {
  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Privacy Policy", href: "/best-los-angeles-privacy-policy" }
  ];

  return (
    <MainLayout
      title="Privacy Policy | LumeWeb Studios"
      description="Read the privacy policy for LumeWeb Studios, a Los Angeles-based web development and digital marketing agency."
      breadcrumbs={breadcrumbs}
    >
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Last updated: April 1, 2025
            </p>
            
            <p>
              This Privacy Policy describes how LumeWeb Studios ("we," "us," or "our") collects, uses, and discloses your personal information when you visit lumewebstudios.com (the "Website") or contact us.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">1.1 Personal Information</h3>
            <p>
              When you visit our Website, we may collect certain personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-5 mt-3 mb-5">
              <li>Fill out a contact form</li>
              <li>Subscribe to our newsletter</li>
              <li>Request a quote or proposal</li>
              <li>Submit a job application</li>
              <li>Contact us via email or phone</li>
            </ul>
            
            <p>
              The types of personal information we may collect include:
            </p>
            <ul className="list-disc pl-5 mt-3 mb-5">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Website URL</li>
              <li>Information about your project or business needs</li>
              <li>Any other information you choose to provide</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">1.2 Automatically Collected Information</h3>
            <p>
              When you visit our Website, certain information about your device and browsing actions may be automatically collected, including:
            </p>
            <ul className="list-disc pl-5 mt-3 mb-5">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring website</li>
              <li>Pages you view</li>
              <li>Time spent on pages</li>
              <li>Links you click</li>
              <li>Date and time of your visit</li>
            </ul>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">1.3 Cookies and Similar Technologies</h3>
            <p>
              We use cookies and similar tracking technologies to collect and track information about your browsing activities. Cookies are small text files that are stored on your device when you visit a website. They help us recognize your device and remember certain information about your visit.
            </p>
            <p>
              You can control cookies through your browser settings and other tools. However, if you block certain cookies, you may not be able to use some features of our Website.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">2. How We Use Your Information</h2>
            <p>
              We may use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-5 mt-3 mb-5">
              <li>Providing, maintaining, and improving our Website</li>
              <li>Responding to your inquiries, comments, or questions</li>
              <li>Processing and fulfilling your requests for our services</li>
              <li>Sending you technical notices, updates, security alerts, and administrative messages</li>
              <li>Providing customer support</li>
              <li>Sending you marketing communications about our services, events, and promotions</li>
              <li>Monitoring and analyzing trends, usage, and activities in connection with our Website</li>
              <li>Detecting, preventing, and addressing technical issues</li>
              <li>Protecting the safety, rights, and property of LumeWeb Studios and others</li>
              <li>Complying with applicable laws, regulations, and legal processes</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Share Your Information</h2>
            <p>
              We may share your personal information in the following circumstances:
            </p>
            <ul className="list-disc pl-5 mt-3 mb-5">
              <li><strong>Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf, such as web hosting, data analysis, payment processing, and customer service.</li>
              <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, financing, or sale of assets, your information may be transferred as part of that transaction.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).</li>
              <li><strong>Protection of Rights:</strong> We may disclose your information to protect the rights, property, or safety of LumeWeb Studios, our clients, or others.</li>
            </ul>
            <p>
              We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Your Rights and Choices</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, such as:
            </p>
            <ul className="list-disc pl-5 mt-3 mb-5">
              <li>Accessing, correcting, or deleting your personal information</li>
              <li>Objecting to our processing of your personal information</li>
              <li>Restricting our processing of your personal information</li>
              <li>Receiving a copy of your personal information in a structured, machine-readable format</li>
              <li>Withdrawing your consent at any time (where our processing is based on your consent)</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
            </p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">6.1 Marketing Communications</h3>
            <p>
              You can opt out of receiving marketing communications from us by clicking the "unsubscribe" link in our emails or by contacting us directly.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Children's Privacy</h2>
            <p>
              Our Website is not intended for children under the age of 13, and we do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us, and we will delete such information from our records.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Third-Party Links</h2>
            <p>
              Our Website may contain links to third-party websites, services, or applications that are not operated by us. This Privacy Policy does not apply to those third-party services, and we are not responsible for their privacy practices. We encourage you to review the privacy policies of any third-party services you access.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will post the updated Privacy Policy on our Website and update the "Last updated" date at the top of this page. We encourage you to review this Privacy Policy periodically.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <p>
              LumeWeb Studios<br />
              Los Angeles, CA<br />
              Phone: +1 (323) 841-0348<br />
              Email: info@lumewebstudios.com
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}