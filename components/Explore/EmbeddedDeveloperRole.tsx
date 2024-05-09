import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

const EmbeddedDeveloperRole = () => {
  return (
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Embedded Developer
                </h1>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    <span className="text-primary underline dark:text-white">
                      Description: {" "}
                    </span><br></br>
                    Embedded Developers design and develop software and firmware for embedded systems, including microcontrollers and microprocessors. They work on a wide range of projects, from IoT devices to automotive electronics, ensuring that software integrates seamlessly with hardware components.
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/RoleImages/EmbeddedDeveloperImg.jpg"
                        alt="image"
                        fill
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    <span className="text-primary underline dark:text-white">
                      About the Role: {" "}
                    </span><br></br>
                    Embedded Developers collaborate with hardware engineers to design and implement software solutions for embedded systems. They write code, conduct debugging, and optimize performance to meet project requirements and ensure reliability in real-time environments.
                  </p>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    <span className="text-primary underline dark:text-white">
                      Detailed Note on this Job/Role: {" "}
                    </span><br></br>
                    Embedded Developers work with low-level programming languages such as C and assembly language to interface with hardware components. They design and implement device drivers, protocols, and communication interfaces to enable seamless interaction between software and hardware elements.
                  </p>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Current Market Status, Future Development Chances:
                  </h3>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Growing Demand: With the proliferation of IoT devices and smart technologies, the demand for Embedded Developers is expected to increase significantly.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Industry Diversification: Embedded Developers have opportunities across various industries, including automotive, healthcare, consumer electronics, and industrial automation.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Emerging Technologies: The evolution of embedded systems and the advent of new technologies like edge computing and AI present exciting prospects for Embedded Developers to innovate and create next-generation solutions.
                    </li>
                  </ul>

                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h3 className="mb-3 text-sm font-medium text-body-color">
                        Skills:
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        <TagButton text="Proficiency in C and Assembly Language" />
                        <TagButton text="Experience with Embedded Systems Design" />
                        <TagButton text="Knowledge of Microcontrollers and Microprocessors" />
                        <TagButton text="Device Driver Development" />
                        <TagButton text="Real-time Operating Systems" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

  );
};

export default EmbeddedDeveloperRole;
