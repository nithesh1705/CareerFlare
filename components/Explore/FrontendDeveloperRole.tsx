import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

const FrontEndDeveloperRole = () => {
  return (
    <div className="w-full px-4 lg:w-8/12">
      <div>
        <h1 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
          Frontend Developer
        </h1>
        <div>
          <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
            <span className="text-primary underline dark:text-white">
              Description: {" "}
            </span><br></br>
            Frontend Developers are responsible for creating engaging user interfaces and interactive web applications. They collaborate with designers and backend developers to implement frontend solutions that enhance user experience and functionality.
          </p>
          <div className="mb-10 w-full overflow-hidden rounded">
            <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
              <Image
                src="/images/RoleImages/FrontendDeveloperImg.jpg"
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
            As a Frontend Developer, you'll translate design mockups and wireframes into responsive and interactive web pages using HTML, CSS, and JavaScript frameworks like React, Vue, or Angular. You'll optimize web applications for speed, accessibility, and cross-browser compatibility.
          </p>
          <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
            <span className="text-primary underline dark:text-white">
              Detailed Note on this Job/Role: {" "}
            </span><br></br>
            Frontend Developers focus on creating visually appealing and intuitive user interfaces that enhance user engagement and satisfaction. They ensure seamless navigation and smooth user interactions by implementing frontend frameworks, libraries, and UI components.
          </p>
          <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
            Current Market Status, Future Development Chances:
          </h3>
          <ul className="mb-10 list-inside list-disc text-body-color">
            <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
              High Demand: Frontend Developers are in high demand as businesses prioritize digital transformation and online presence, creating opportunities for frontend development projects.
            </li>
            <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
              Evolution of Technologies: The frontend development landscape continues to evolve with the emergence of new frameworks, tools, and libraries, offering Frontend Developers opportunities to upskill and specialize in trending technologies.
            </li>
            <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
              Focus on User Experience: With an increased focus on user experience (UX) and user interface (UI) design, Frontend Developers play a crucial role in delivering visually appealing and user-friendly web applications that meet customer expectations.
            </li>
          </ul>

          <div className="items-center justify-between sm:flex">
            <div className="mb-5">
              <h3 className="mb-3 text-sm font-medium text-body-color">
                Skills:
              </h3>
              <div className="flex flex-wrap gap-3">
                <TagButton text="HTML5" />
                <TagButton text="CSS3 (Sass, Less)" />
                <TagButton text="JavaScript (ES6+)" />
                <TagButton text="React.js" />
                <TagButton text="Vue.js" />
                <TagButton text="Angular" />
                <TagButton text="Responsive Design" />
                <TagButton text="Cross-browser Compatibility" />
                <TagButton text="UI/UX Principles" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontEndDeveloperRole;