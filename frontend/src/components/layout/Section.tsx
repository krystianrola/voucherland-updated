import type { BaseHTMLAttributes, FC, JSX } from "react";

interface SectionProps extends BaseHTMLAttributes<HTMLDivElement> {
  dark?: true;
  children: JSX.Element | JSX.Element[];
}

const Section: FC<SectionProps> = ({ dark = false, children, className }) => {
  return (
    <section className={`max-w-[1440px] mx-auto ${dark ? "bg-dark" : "bg-light"} ${className}`}>
      {/* <div className="max-w-7xl m-auto">{children}</div> */}
      {children}
    </section>
  );
};

export default Section;
