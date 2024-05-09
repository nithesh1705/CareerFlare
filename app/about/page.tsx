import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SourcesLink from "@/components/Sources";
// import Teammembers from "@/components/Team";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CareerFlare | About Us",
  description: "This is About Page for CareerFlare",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About CareerFlare"
        description="CareerFlare is an innovative platform designed to revolutionize the way individuals explore career opportunities and develop essential skills. With personalized learning resources, expert guidance, and data-driven insights, CareerFlare empowers users to make informed decisions aligned with their interests, skills, and aspirations. Join us on a journey of self-discovery and professional growth with CareerFlare."        
      />
      <SourcesLink />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
