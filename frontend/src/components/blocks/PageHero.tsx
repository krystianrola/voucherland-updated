import type { FC, ReactNode } from "react";
import Section from "../layout/Section";

export type HeroVariant = "default" | "search" | "account";

interface PageHeroProps {
  title: string | ReactNode;
  variant?: HeroVariant;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

const PageHero: FC<PageHeroProps> = ({
  title,
  description,
  children,
  variant = "default",
  align = "center",
}) => {
  const hero_variant: Record<HeroVariant, string> = {
    default: "bg-white text-dark",
    search: "!bg-dark !text-white",
    account: "bg-main text-dark",
  };

  return (
    <Section
      color_variant="dark"
      className={`flex flex-col gap-1
        ${align === "left" ? "justify-start items-start" : "justify-center items-center"} ${hero_variant[variant]} py-20`}
    >
      <h1 className="text-2xl leading-8 font-bold">{title}</h1>
      {description && (
        <p
          className={`w-full lg:w-4/5 text-base leading-6 text-description font-normal
            ${align === "center" && "m-auto text-center"}
          `}
        >
          {description}
        </p>
      )}
      {children}
    </Section>
  );
};

export { PageHero };
