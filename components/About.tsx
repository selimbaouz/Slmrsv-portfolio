import { cn } from "@/lib/utils";
import { GoArrowDownRight } from "react-icons/go";
import { MdCircle } from "react-icons/md";

const About = () => {
  return (
    <section
      className={cn(
        "py-4 px-4 lg:px-20 border-t space-y-24",
        "xl:space-y-36",
      )}
    >
      <div className="flex items-center gap-2">
        <h3
          className={cn(
            "uppercase font-semibold text-base",
            "xl:text-2xl",
          )}
        >
          What I do
        </h3>
        <GoArrowDownRight
          className={cn("text-lg", "xl:text-2xl")}
        />
      </div>
      <div
        className={cn(
          "py-6 space-y-8",
          "xl:py-8 xl:space-y-0 xl:flex xl:justify-between xl:items-start",
        )}
      >
        <ul className="lg:space-y-4 w-full">
          {[
            {
              title: "Web Design",
              icon: <MdCircle className={cn("text-[10px]", "lg:text-xs")} />,
            },
            {
              title: "Front-End",
              icon: <MdCircle className={cn("text-[10px]", "lg:text-xs")} />,
            },
            {
              title: "Back-End",
              icon: <MdCircle className={cn("text-[10px]", "lg:text-xs")} />,
            },
            {
              title: "SEO",
              icon: <MdCircle className={cn("text-[10px]", "lg:text-xs")} />,
            },
            {
              title: "3D",
              icon: <MdCircle className={cn("text-[10px]", "lg:text-xs")} />,
            },
          ].map((services, index) => (
            <li
              key={index}
              className={cn(
                "w-full text-2xl flex justify-end",
                "xl:text-5xl",
              )}
            >
              <div
                className={cn(
                  "border-t py-6 space-y-4 duration-500 delay-75",
                  "xl:py-8 xl:space-y-8",
                )}
              >
                <div>
                  <p className={cn(
                    "uppercase font-medium text-4xl",
                    "xl:text-9xl",
                  )}>{services.title}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
