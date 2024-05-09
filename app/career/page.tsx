import CareerGuidance from "@/components/CareerGuidance/CareerGuidance";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CareerFlare | Career",
  description: "This is Career Page for CareerFlare",
  // other metadata
};

const CareerPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Career Guidance"
        description="Get expert guidance and insights to navigate your career path effectively with our Career Guidance. Access valuable resources, receive personalized recommendations, and make informed decisions about your professional future."
      />
      <CareerGuidance />
    </>
  );
};

export default CareerPage;
