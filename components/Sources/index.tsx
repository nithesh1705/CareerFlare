import SectionTitle from "../Common/SectionTitle";
// import SingleFeature from "./SingleFeature";
// import featuresData from "./featuresData";
import Link from "next/link";

const SourcesLink = () => {
  return (
    <>
      <section id="sourcelink" className="py-16 md:py-20 lg:py-5">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
              <SectionTitle
                title="Highlights"
                paragraph="Discover the core features of CareerFlare and unlock the tools that can propel you forward in your career path. Explore how CareerFlare empowers you to make informed decisions and achieve your professional aspirations."
                center
              />
            <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
              
              <div className="w-full">
                <div className="wow fadeInUp" data-wow-delay=".15s">
                  <center><div className="mb-10 flex items-center justify-center h-[70px] w-[70px] rounded-md bg-primary bg-opacity-10 text-primary">
                    <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current text-fuchsia-600">
                      <path
                        opacity="0.5"
                        d="M37.7778 40.2223H24C22.8954 40.2223 22 39.3268 22 38.2223V20.0001C22 18.8955 22.8954 18.0001 24 18.0001H37.7778C38.8823 18.0001 39.7778 18.8955 39.7778 20.0001V38.2223C39.7778 39.3268 38.8823 40.2223 37.7778 40.2223Z"
                      />
                      <path d="M23.2222 0C22.6699 0 22.2222 0.447715 22.2222 1V12.3333C22.2222 12.8856 22.6699 13.3333 23.2222 13.3333H39C39.5523 13.3333 40 12.8856 40 12.3333V0.999999C40 0.447714 39.5523 0 39 0H23.2222ZM0 39C0 39.5523 0.447715 40 1 40H16.7778C17.3301 40 17.7778 39.5523 17.7778 39V27.6667C17.7778 27.1144 17.3301 26.6667 16.7778 26.6667H1C0.447716 26.6667 0 27.1144 0 27.6667V39ZM0 21.2222C0 21.7745 0.447715 22.2222 1 22.2222H16.7778C17.3301 22.2222 17.7778 21.7745 17.7778 21.2222V0.999999C17.7778 0.447714 17.3301 0 16.7778 0H1C0.447716 0 0 0.447715 0 1V21.2222Z" />
                    </svg>
                  </div></center>
                  <center><h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Career Guidance
                  </h3></center>
                  <center><p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                    Get expert advice and personalized recommendations to navigate your career effectively.
                  </p></center>
                  <center>
                    <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                      <Link
                        href="/career"
                        className="rounded-sm bg-fuchsia-600 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-fuchsia-800/80"
                      >
                        Go to Career Guidance
                      </Link>
                  </div></center>
                </div>
              </div>

            
              <div className="w-full">
                <div className="wow fadeInUp" data-wow-delay=".15s">
                  <center><div className="mb-10 flex items-center justify-center h-[70px] w-[70px] rounded-md bg-primary bg-opacity-10 text-primary">
                    <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current text-fuchsia-600">
                      <path
                        opacity="0.5"
                        d="M37.7778 40.2223H24C22.8954 40.2223 22 39.3268 22 38.2223V20.0001C22 18.8955 22.8954 18.0001 24 18.0001H37.7778C38.8823 18.0001 39.7778 18.8955 39.7778 20.0001V38.2223C39.7778 39.3268 38.8823 40.2223 37.7778 40.2223Z"
                      />
                      <path d="M23.2222 0C22.6699 0 22.2222 0.447715 22.2222 1V12.3333C22.2222 12.8856 22.6699 13.3333 23.2222 13.3333H39C39.5523 13.3333 40 12.8856 40 12.3333V0.999999C40 0.447714 39.5523 0 39 0H23.2222ZM0 39C0 39.5523 0.447715 40 1 40H16.7778C17.3301 40 17.7778 39.5523 17.7778 39V27.6667C17.7778 27.1144 17.3301 26.6667 16.7778 26.6667H1C0.447716 26.6667 0 27.1144 0 27.6667V39ZM0 21.2222C0 21.7745 0.447715 22.2222 1 22.2222H16.7778C17.3301 22.2222 17.7778 21.7745 17.7778 21.2222V0.999999C17.7778 0.447714 17.3301 0 16.7778 0H1C0.447716 0 0 0.447715 0 1V21.2222Z" />
                    </svg>
                  </div></center>
                  <center><h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Explore Job, Role
                  </h3></center>
                  <center><p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                    Dive into a vast repository of job opportunities, roles, and industries to find your perfect fit.
                  </p></center>
                  <center>
                    <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                      <Link
                        href="/explore"
                        className="rounded-sm bg-fuchsia-600 px-8 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-fuchsia-800/80"
                      >
                        Explore Job, Role
                      </Link>
                  </div></center>
                </div>
              </div>

            
              <div className="w-full">
                <div className="wow fadeInUp" data-wow-delay=".15s">
                  <center><div className="mb-10 flex items-center justify-center h-[70px] w-[70px] rounded-md bg-primary bg-opacity-10 text-primary">
                    <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current text-fuchsia-600">
                      <path
                        opacity="0.5"
                        d="M37.7778 40.2223H24C22.8954 40.2223 22 39.3268 22 38.2223V20.0001C22 18.8955 22.8954 18.0001 24 18.0001H37.7778C38.8823 18.0001 39.7778 18.8955 39.7778 20.0001V38.2223C39.7778 39.3268 38.8823 40.2223 37.7778 40.2223Z"
                      />
                      <path d="M23.2222 0C22.6699 0 22.2222 0.447715 22.2222 1V12.3333C22.2222 12.8856 22.6699 13.3333 23.2222 13.3333H39C39.5523 13.3333 40 12.8856 40 12.3333V0.999999C40 0.447714 39.5523 0 39 0H23.2222ZM0 39C0 39.5523 0.447715 40 1 40H16.7778C17.3301 40 17.7778 39.5523 17.7778 39V27.6667C17.7778 27.1144 17.3301 26.6667 16.7778 26.6667H1C0.447716 26.6667 0 27.1144 0 27.6667V39ZM0 21.2222C0 21.7745 0.447715 22.2222 1 22.2222H16.7778C17.3301 22.2222 17.7778 21.7745 17.7778 21.2222V0.999999C17.7778 0.447714 17.3301 0 16.7778 0H1C0.447716 0 0 0.447715 0 1V21.2222Z" />
                    </svg>
                  </div></center>
                  <center><h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Courses
                  </h3></center>
                  <center><p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
                    Enhance your skills and knowledge with curated courses designed to help you advance in your career.
                  </p></center>
                  <center>
                    <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                      <Link
                        href="/courses"
                        className="rounded-sm bg-fuchsia-600 px-8 py-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-fuchsia-800/80"
                      >
                        Go to Courses
                      </Link>
                  </div></center>
                </div>
              </div>
            </div> 

          </div>
        </div>
      </section>
    </>
  );
};

export default SourcesLink;
