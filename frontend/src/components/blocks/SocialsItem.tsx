import type { AnchorHTMLAttributes, FC, JSX } from "react";
import { LuFacebook, LuLinkedin, LuInstagram } from "react-icons/lu";

type TSocials = "facebook" | "instagram" | "linkedin";

interface SocialsItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  social: TSocials;
}

const SocialsItem: FC<SocialsItemProps> = ({ social, ...props }) => {
  const socials_icon: Record<TSocials, { icon: JSX.Element; href: string }> = {
    facebook: {
      icon: <LuFacebook className="transition duration-300 group-hover:text-[#1877F2]" />,
      href: "https://www.google.com/",
    },
    instagram: {
      icon: <LuInstagram className="transition duration-300 group-hover:text-[#dd2a7b]" />,
      href: "https://www.google.com/",
    },
    linkedin: {
      icon: <LuLinkedin className="transition duration-300 group-hover:text-[#0A66C2]" />,
      href: "https://www.google.com/",
    },
  };

  return (
    <a
      href={socials_icon[social].href}
      target="_blank"
      className="group w-10 h-10 p-2 flex justify-center items-center rounded-full bg-text text-xl cursor-pointer"
      {...props}
    >
      {socials_icon[social].icon}
    </a>
  );
};

export { SocialsItem };
