import Breadcrumb from "@/components/Common/Breadcrumb";
import ResumeAnalyzerPage from "@/components/ResumeAnalyzer/ResumeAnalyzer";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CareerFlare | Personal Bot",
  description: "This is Personal Bot Page for CareerFlare",
  // other metadata
};

const ResumeAnalyzer = () => {
  return (
    <>
      <Breadcrumb
        pageName="Resume Analzer"
        description="Optimize your resume with our advanced analyzer tool. Receive detailed feedback and recommendations to improve your resume's effectiveness and visibility to employers. Enhance your chances of securing interviews and advancing your career with a professionally polished resume."
      />
      <ResumeAnalyzerPage />
    </>
  );
};

export default ResumeAnalyzer;