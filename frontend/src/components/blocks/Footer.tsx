import type { FC, JSX } from "react";
import { SocialsItem } from "./SocialsItem";
import { Icon } from "../ui/Icon";

interface FooterGroupProps {
  title: string;
  children: JSX.Element;
}

const FooterGroup: FC<FooterGroupProps> = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-1">
      <h3 className="mt-5 mb-2.5 text-xl text-text font-bold">{title}</h3>
      {children}
    </div>
  );
};

const Footer: FC = () => {
  return (
    <footer className="max-w-[1440px] px-3 py-12 bg-dark lg:px-6 xxl:px-0 xxl:m-auto">
      <div className="flex flex-col border border-solid border-admin_red">
        {/* TOP */}
        <div>
          <FooterGroup title="VOUCHERLAND.">
            <p className="text-sm font-normal leading-6 text-text lg:text-base">
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking.
            </p>
          </FooterGroup>

          <FooterGroup title="Socials">
            <div className="flex gap-2 items-center">
              <SocialsItem social="facebook" />
              <SocialsItem social="instagram" />
              <SocialsItem social="linkedin" />
            </div>
          </FooterGroup>

          <FooterGroup title="Trusted by">
            <Icon name="carrefour" className="w-5 h-auto" />
          </FooterGroup>
        </div>

        {/* BOTTOM */}
        <div></div>
      </div>
    </footer>
  );
};

export { Footer };
