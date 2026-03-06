import type { BaseHTMLAttributes, FC, ReactNode } from "react";

export type ColorVariant = "light" | "dark" | "main" | "grey";

interface SectionProps extends BaseHTMLAttributes<HTMLDivElement> {
  color_variant?: ColorVariant;
  children: ReactNode;
}

const Section: FC<SectionProps> = ({ color_variant = "light", children, className }) => {
  const colorVariant: Record<ColorVariant, string> = {
    light: "bg-white",
    dark: "bg-dark",
    main: "bg-main",
    grey: "bg-block2",
  };

  return (
    <section className={` ${colorVariant[color_variant]}`}>
      <div className={`max-w-[1440px] mx-auto px-3 py-20 m-auto lg:px-0 ${className}`}>
        {children}
      </div>
      {/* {children} */}
    </section>
  );
};

export default Section;
