import type { BaseHTMLAttributes, FC, JSX } from "react";

interface SectionProps extends BaseHTMLAttributes<HTMLDivElement> {
  dark?: true;
  children: JSX.Element;
}

const Section: FC<SectionProps> = ({ dark = false, children }) => {
  return (
    <section className={`${dark ? "bg-dark" : "bg-light"}`}>
      <div className="max-w-7xl m-auto">{children}</div>
    </section>
  );
};

export default Section;
