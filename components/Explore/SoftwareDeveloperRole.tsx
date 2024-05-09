import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

const SoftwareDeveloperRole = () => {
  return (
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  Software Developer
                </h1>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    <span className="text-primary underline dark:text-white">
                      Description: {" "}
                    </span><br></br>
                    Software Developers design, develop, and maintain software applications to meet specific user requirements. They collaborate with stakeholders to understand project needs and implement solutions using programming languages and development tools.
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded">
                    <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                      <Image
                        src="/images/RoleImages/SoftwareDeveloperImg.jpg"
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
                    Software Developers analyze user needs, design software solutions, and write code to implement functionality. They test and debug software applications, ensuring they meet quality standards and functional requirements.
                  </p>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    <span className="text-primary underline dark:text-white">
                      Detailed Note on this Job/Role: {" "}
                    </span><br></br>
                    Software Developers work on various projects, ranging from web development to mobile app development and enterprise software solutions. They collaborate with cross-functional teams and follow industry best practices to deliver high-quality software products.
                  </p>
                  <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                    Current Market Status, Future Development Chances:
                  </h3>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      High Demand: Software Developers are in high demand across industries, with opportunities for career growth and advancement.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Technology Advancements: The rapid advancement of technology opens up new opportunities for Software Developers to work on cutting-edge projects and innovative solutions.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Specialization: Software Developers can specialize in various domains such as web development, mobile app development, backend development, and more, catering to specific industry needs.
                    </li>
                  </ul>

                  <div className="items-center justify-between sm:flex">
                    <div className="mb-5">
                      <h3 className="mb-3 text-sm font-medium text-body-color">
                        Skills:
                      </h3>
                      <div className="flex flex-wrap gap-3">
                        <TagButton text="Proficiency in Programming" />
                        <TagButton text="Proficiency in OOP" />
                        <TagButton text="Java" />
                        <TagButton text="JavaScript" />
                        <TagButton text="Version Control Systems" />
                        <TagButton text="Software Development Lifecycle" />
                        <TagButton text="Problem-solving" />
                        <TagButton text="Analytical Skills" />
                        <TagButton text="Communication and Collaboration" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  );
};

export default SoftwareDeveloperRole;
