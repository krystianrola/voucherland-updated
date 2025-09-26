import type { BaseHTMLAttributes, FC, JSX } from "react";
import { LuFacebook, LuLinkedin, LuInstagram } from "react-icons/lu";

type TSocials = "facebook" | "instagram" | "linkedin";

interface SocialsItemProps extends BaseHTMLAttributes<HTMLDivElement> {
  social: TSocials;
}

const SocialsItem: FC<SocialsItemProps> = ({ social, ...props }) => {
  const socials_icon: Record<TSocials, JSX.Element> = {
    facebook: <LuFacebook className="transition duration-300 group-hover:text-[#1877F2]" />,
    instagram: <LuInstagram className="transition duration-300 group-hover:text-[#dd2a7b]" />,
    linkedin: <LuLinkedin className="transition duration-300 group-hover:text-[#0A66C2]" />,
  };

  return (
    <div
      className="group w-11 h-11 p-2 flex justify-center items-center rounded-full bg-text text-2xl cursor-pointer"
      {...props}
    >
      {socials_icon[social]}
    </div>
  );
};

export { SocialsItem };
