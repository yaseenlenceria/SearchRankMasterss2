import MainLayout from "@/layouts/MainLayout";
import ContactForm from "@/components/home/ContactForm";

export default function Contact() {
  return (
    <MainLayout 
      title="Contact Us | LumeWeb Studios"
      description="Get in touch with LumeWeb Studios. We're ready to help your Los Angeles business grow with premium web solutions."
      breadcrumbs={[
        { name: "Contact", href: "/contact-us" },
      ]}
    >
      <div className="bg-blue-700 py-12 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100">
            We're ready to help your business grow online. Reach out today!
          </p>
        </div>
      </div>
      
      <ContactForm />
      
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">Visit Us</h2>
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423286.27405770525!2d-118.69192047471653!3d34.02016130653294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2sLos%20Angeles%2C%20CA!5e0!3m2!1sen!2sus!4v1619733420158!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{border: 0}} 
                allowFullScreen={false} 
                loading="lazy"
                title="LumeWeb Studios Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
