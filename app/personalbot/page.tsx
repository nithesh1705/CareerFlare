import Breadcrumb from "@/components/Common/Breadcrumb";
import PersonalBotForm from "@/components/PersonalBotForm";
import PaymentSteps from "@/components/PersonalBotForm/PaymentSteps";
import AboutBotSectionOne from "@/components/PersonalBotInfo/AboutBotSectionOne";
import BotVideo from "@/components/PersonalBotInfo/BotVideo";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CareerFlare | Personal Bot",
  description: "This is Personal Bot Page for CareerFlare",
  // other metadata
};

const PersonalBot = () => {
  return (
    <>
      <Breadcrumb
        pageName="Personal Bot"
        description="Discover personalized opportunities for internships, hackathons, and job findings through our intelligent bot. Explore tailored recommendations based on your skills, interests, and career goals. Take the next step in your professional journey with targeted suggestions and insights."
      />
      <AboutBotSectionOne />
      <BotVideo />
      <PaymentSteps />
      <PersonalBotForm />
    </>
  );
};

export default PersonalBot;