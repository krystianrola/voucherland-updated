import type { FC, JSX } from "react";
import Section from "../layout/Section";

interface PageHeroProps {
  title: string | JSX.Element;
  description?: string;
  align?: "left" | "center";
}

const PageHero: FC<PageHeroProps> = ({
  title,
  description,
  align = "center",
}) => {
  return (
    <Section
      className={`flex flex-col gap-1  ${
        align === "left"
          ? "justify-start items-start"
          : "justify-center items-center"
      } py-20`}
    >
      <h1 className="text-2xl leading-8 text-dark font-bold">{title}</h1>
      <>
        {description && (
          <p
            className={`w-full lg:w-4/5 text-base leading-6 text-description font-normal
              ${align === "center" && "m-auto text-center"}
            `}
          >
            {description}
          </p>
        )}
      </>
    </Section>
  );
};

export { PageHero };
