import type { BaseHTMLAttributes, FC, JSX } from "react";
import { Footer } from "../blocks/Footer";

interface PageProps extends BaseHTMLAttributes<HTMLElement> {
  children: JSX.Element[];
}

const Page: FC<PageProps> = ({ children, className, ...props }) => {
  return (
    <>
      <main className={`${className} min-h-dvh w-full max-w-[1440px] m-auto`} {...props}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Page;
