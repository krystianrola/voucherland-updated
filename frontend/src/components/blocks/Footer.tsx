import type { BaseHTMLAttributes, FC, JSX } from "react";
import { SocialsItem } from "./SocialsItem";
import { Icon } from "../ui/Icon";
import { Link } from "react-router";
import Section from "../layout/Section";

interface FooterGroupProps extends BaseHTMLAttributes<HTMLDivElement> {
  title: string;
  children: JSX.Element;
}

const FooterGroup: FC<FooterGroupProps> = ({ title, children, className = "", ...props }) => {
  return (
    <div className={`flex flex-col gap-2 lg:gap-5 ${className}`} {...props}>
      <h3 className="text-xl text-text font-bold">{title}</h3>
      {children}
    </div>
  );
};

const Footer: FC = () => {
  return (
    <footer className="w-full px-3 bg-dark border-t border-solid border-main  lg:px-6 xxl:px-0 xxl:m-auto">
      <Section color_variant="dark">
        <div className="flex flex-col">
          {/* TOP */}
          <div className="grid gap-7 grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6">
            <FooterGroup title="VOUCHERLAND." className="md:col-span-2 lg:col-span-2">
              <p className="text-sm font-normal leading-6 text-text lg:text-base">
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking.
              </p>
            </FooterGroup>

            <FooterGroup title="Socials" className="lg:col-start-3 xl:col-start-4">
              <div className="flex gap-2 items-center">
                <SocialsItem social="facebook" />
                <SocialsItem social="instagram" />
                <SocialsItem social="linkedin" />
              </div>
            </FooterGroup>

            <FooterGroup title="Trusted by">
              <div className="flex gap-10 items-center lg:flex-col lg:gap-3 lg:items-start">
                <Icon
                  name="delhaize"
                  className="w-auto h-auto max-h-6 object-contain  rounded-sm"
                />
                <Icon
                  name="carrefour"
                  className="w-auto h-auto max-h-6 object-contain  rounded-sm"
                />
              </div>
            </FooterGroup>

            <FooterGroup title="Contact">
              <div className="flex gap-10 items-center">
                <p className="text-sm text-text leading-6">
                  +32 (0) 498 12 23 34
                  <br />
                  info@voucherland.com
                </p>
              </div>
            </FooterGroup>

            {/* <FooterGroup title="Sitemap"></FooterGroup> */}
          </div>

          {/* BOTTOM */}
          <div className="flex justify-between flex-row-reverse mt-5 pt-3 border-t border-solid border-main text-xs text-text">
            <p>&copy;2025 Voucherland</p>
            <Link to={"privacy-policy"} className="cursor-pointer hover:underline">
              Privacy policy
            </Link>
          </div>
        </div>
      </Section>
    </footer>
  );
};

export { Footer };
