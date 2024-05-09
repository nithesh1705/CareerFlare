import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CareerFlare | Contact Page",
  description: "This is Contact Page for CareerFlare",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Get in touch with us. We'd love to hear from you! Whether you have questions, feedback, or inquiries, our team is here to assist you. Reach out to us via email, or by filling out the contact form below."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
