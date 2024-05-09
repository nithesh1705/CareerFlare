import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CareerFlare | Courses",
  description: "This is Courses Page for CareerFlare",
  // other metadata
};

const CoursePage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Courses"
        description="Embark on your learning journey with our Courses page. Browse through a wide range of courses covering diverse topics and skillsets. Gain valuable knowledge and expertise to enhance your career prospects."
      />
      <h1 className="px-10 mt-4 text-2xl font-bold ">Computer Science and Engineering (CSE)</h1>
      <div className="mt-10 mb-10 grid grid-cols-1 md:grid-cols-4 gap-8 px-10 py-4 ">
        <div className="w-80 gap-7 bg-slate-300 dark:bg-white rounded-xl h-80 text-black hover:scale-105 transition-all ease-in-out duration-300 border-2 border-purple-700">
          <img src="/image.webp" className="rounded-t-lg  " alt="img"/>
          <div className="p-4">
            <h1 className="text-xl font-semibold">Software Engineering and Project Management</h1><br></br>
            <center>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="https://www.coursera.org/specializations/software-engineering"
                target="_blank"
                className="rounded-sm bg-fuchsia-600 px-4 py-2 text-base font-semibold text-white duration-300 ease-in-out hover:bg-fuchsia-800/80"
              >
                Go to this Course
              </Link>
              </div>
            </center>
          </div>
        </div>
        <div className="w-80 bg-slate-300 dark:bg-white rounded-xl h-80 text-black hover:scale-105 transition-all ease-in-out duration-300 border-2 border-purple-700">
          <img src="/image.webp" className="rounded-t-lg  " alt="img"/>
          <div className="p-4">
            <h1 className="text-xl font-semibold">IBM Data Science Professional Certificate</h1><br></br>
            <center>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="https://www.coursera.org/professional-certificates/ibm-data-science"
                target="_blank"
                className="rounded-sm bg-fuchsia-600 px-4 py-2 text-base font-semibold text-white duration-300 ease-in-out hover:bg-fuchsia-800/80"
              >
                Go to this Course
              </Link>
              </div>
            </center>
          </div>
        </div>
        <div className="w-80 bg-slate-300 dark:bg-white rounded-xl h-80 text-black hover:scale-105 transition-all ease-in-out duration-300 border-2 border-purple-700">
          <img src="/image.webp" className="rounded-t-lg  " alt="img"/>
          <div className="p-4">
            <h1 className="text-xl font-semibold">Microsoft Cybersecurity Analyst </h1><br></br>
            <center>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="https://www.coursera.org/professional-certificates/microsoft-cybersecurity-analyst?"
                target="_blank"
                className="rounded-sm bg-fuchsia-600 px-4 py-2 text-base font-semibold text-white duration-300 ease-in-out hover:bg-fuchsia-800/80"
              >
                Go to this Course
              </Link>
              </div>
            </center>
          </div>
        </div>
        <div className="w-80 bg-slate-300 dark:bg-white rounded-xl h-80 text-black hover:scale-105 transition-all ease-in-out duration-300 border-2 border-purple-700">
          <img src="/image.webp" className="rounded-t-lg  " alt="img"/>
          <div className="p-4">
            <h1 className="text-xl font-semibold">Security Analyst Fundamentals</h1><br></br>
            <center>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="https://www.coursera.org/specializations/security-analyst-fundamentals?"
                target="_blank"
                className="rounded-sm bg-fuchsia-600 px-4 py-2 text-base font-semibold text-white duration-300 ease-in-out hover:bg-fuchsia-800/80"
              >
                Go to this Course
              </Link>
              </div>
            </center>
          </div>
        </div>
      </div>
      <h1 className="px-10 mt-4 text-2xl font-bold ">Information Technology (IT)</h1>
      <div className="mt-10 mb-10 grid grid-cols-1 md:grid-cols-4 gap-8 px-10 py-4 ">
        <div className="w-80 gap-7 bg-slate-300 dark:bg-white rounded-xl h-80 text-black hover:scale-105 transition-all ease-in-out duration-300 border-2 border-purple-700">
          <img src="/image3.webp" className="rounded-t-lg  " alt="img"/>
          <div className="p-4">
            <h1 className="text-xl font-semibold mb-2">Cloud Fundamentals Specialization</h1><br></br>
            <center>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="https://www.coursera.org/specializations/it-cloud-fundamentals"
                target="_blank"
                className="rounded-sm bg-fuchsia-600 px-4 py-2 text-base font-semibold text-white duration-300 ease-in-out hover:bg-fuchsia-800/80"
              >
                Go to this Course
              </Link>
              </div>
            </center>
          </div>
        </div>
        <div className="w-80 bg-slate-300 dark:bg-white rounded-xl h-80 text-black hover:scale-105 transition-all ease-in-out duration-300 border-2 border-purple-700">
          <img src="/image3.webp" className="rounded-t-lg  " alt="img"/>
          <div className="p-4">
            <h1 className="text-xl font-semibold mb-4">IT Support Specialist Career</h1><br></br><br></br>
            <center>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="https://www.coursera.org/learn/introduction-to-technical-support"
                target="_blank"
                className="rounded-sm bg-fuchsia-600 px-4 py-2 text-base font-semibold text-white duration-300 ease-in-out hover:bg-fuchsia-800/80"
              >
                Go to this Course
              </Link>
              </div>
            </center>
          </div>
        </div>
        <div className="w-80 bg-slate-300 dark:bg-white rounded-xl h-80 text-black hover:scale-105 transition-all ease-in-out duration-300 border-2 border-purple-700">
          <img src="/image3.webp" className="rounded-t-lg  " alt="img"/>
          <div className="p-4">
            <h1 className="text-xl font-semibold mb-4">Data Management</h1><br></br><br></br>
            <center>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="https://www.coursera.org/professional-certificates/ibm-data-engineer"
                target="_blank"
                className="rounded-sm bg-fuchsia-600 px-4 py-2 text-base font-semibold text-white duration-300 ease-in-out hover:bg-fuchsia-800/80"
              >
                Go to this Course
              </Link>
              </div>
            </center>
          </div>
        </div>
      </div>
      <h1 className="px-10 mt-4 text-2xl font-bold ">Electronics and Communication Engineering (ECE)</h1>
      <div className="mt-10 mb-10 grid grid-cols-1 md:grid-cols-4 gap-8 px-10 py-4 ">
        <div className="w-80 gap-7 bg-slate-300 dark:bg-white rounded-xl h-80 text-black hover:scale-105 transition-all ease-in-out duration-300 border-2 border-purple-700">
          <img src="/image1.jpg" className="rounded-t-lg  " alt="img"/>
          <div className="p-4">
            <h1 className="text-xl font-semibold">Modeling and Debugging Embedded Systems</h1><br></br>
            <center>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="https://www.coursera.org/learn/modeling-debugging-embedded-systems?"
                target="_blank"
                className="rounded-sm bg-fuchsia-600 px-4 py-2 text-base font-semibold text-white duration-300 ease-in-out hover:bg-fuchsia-800/80"
              >
                Go to this Course
              </Link>
              </div>
            </center>
          </div>
        </div>
        <div className="w-80 bg-slate-300 dark:bg-white rounded-xl h-80 text-black hover:scale-105 transition-all ease-in-out duration-300 border-2 border-purple-700">
          <img src="/image1.jpg" className="rounded-t-lg  " alt="img"/>
          <div className="p-4">
            <h1 className="text-xl font-semibold">Digital Business Models</h1><br></br><br></br>
            <center>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="https://www.coursera.org/learn/digital-business-models?"
                target="_blank"
                className="rounded-sm bg-fuchsia-600 px-4 py-2 text-base font-semibold text-white duration-300 ease-in-out hover:bg-fuchsia-800/80"
              >
                Go to this Course
              </Link>
              </div>
            </center>
          </div>
        </div>
        <div className="w-80 bg-slate-300 dark:bg-white rounded-xl h-80 text-black hover:scale-105 transition-all ease-in-out duration-300 border-2 border-purple-700">
          <img src="/image1.jpg" className="rounded-t-lg  " alt="img"/>
          <div className="p-4">
            <h1 className="text-xl font-semibold">Introduction to FPGA Design for Embedded Systems</h1><br></br>
            <center>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="https://www.coursera.org/learn/intro-fpga-design-embedded-systems?"
                target="_blank"
                className="rounded-sm bg-fuchsia-600 px-4 py-2 text-base font-semibold text-white duration-300 ease-in-out hover:bg-fuchsia-800/80"
              >
                Go to this Course
              </Link>
              </div>
            </center>
          </div>
        </div>
      </div>
      <h1 className="px-10 mt-4 text-2xl font-bold ">Mechanical Engineering (MECH)</h1>
      <div className="mt-10 mb-10 grid grid-cols-1 md:grid-cols-4 gap-8 px-10 py-4">
        <div className="w-80 gap-7 bg-slate-300 dark:bg-white rounded-xl h-80 text-black hover:scale-105 transition-all ease-in-out duration-300 border-2 border-purple-700">
          <img src="/image2.jpg" className="rounded-t-lg  " alt="img"/>
          <div className="p-4">
            <h1 className="text-xl font-semibold">Course OneAutodesk Fusion 360</h1><br></br>
            <center>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="https://www.coursera.org/specializations/autodesk-cad-cam-cae-mechanical-engineering"
                target="_blank"
                className="rounded-sm bg-fuchsia-600 px-4 py-2 text-base font-semibold text-white duration-300 ease-in-out hover:bg-fuchsia-800/80"
              >
                Go to this Course
              </Link>
              </div>
            </center>
          </div>
        </div>
        <div className="w-80 bg-slate-300 dark:bg-white rounded-xl h-80 text-black hover:scale-105 transition-all ease-in-out duration-300 border-2 border-purple-700">
          <img src="/image2.jpg" className="rounded-t-lg  " alt="img"/>
          <div className="p-4">
            <h1 className="text-xl font-semibold">Manufacturing & Engineering </h1><br></br><br></br>
            <center>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="https://www.coursera.org/learn/advanced-manufacturing-process-analysis"
                target="_blank"
                className="rounded-sm bg-fuchsia-600 px-4 py-2 text-base font-semibold text-white duration-300 ease-in-out hover:bg-fuchsia-800/80"
              >
                Go to this Course
              </Link>
              </div>
            </center>
          </div>
        </div>
        <div className="w-80 bg-slate-300 dark:bg-white rounded-xl h-80 text-black hover:scale-105 transition-all ease-in-out duration-300 border-2 border-purple-700">
          <img src="/image2.jpg" className="rounded-t-lg  " alt="img"/>
          <div className="p-4">
            <h1 className="text-xl font-semibold">Automotive and Transportation Sector</h1><br></br>
            <center>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="https://www.coursera.org/learn/automotive-industrial-engineering"
                target="_blank"
                className="rounded-sm bg-fuchsia-600 px-4 py-2 text-base font-semibold text-white duration-300 ease-in-out hover:bg-fuchsia-800/80"
              >
                Go to this Course
              </Link>
              </div>
            </center>
          </div>
        </div>
        <div className="w-80 bg-slate-300 dark:bg-white rounded-xl h-80 text-black hover:scale-105 transition-all ease-in-out duration-300 border-2 border-purple-700">
          <img src="/image2.jpg" className="rounded-t-lg  " alt="img"/>
          <div className="p-4">
            <h1 className="text-xl font-semibold">Environmental Control and HVAC</h1><br></br>
            <center>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Link
                href="https://www.coursera.org/learn/electricity"
                target="_blank"
                className="rounded-sm bg-fuchsia-600 px-4 py-2 text-base font-semibold text-white duration-300 ease-in-out hover:bg-fuchsia-800/80"
              >
                Go to this Course
              </Link>
              </div>
            </center>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursePage;
