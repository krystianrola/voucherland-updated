import type { FC, JSX } from "react";
import { GhostButton } from "../ui/GhostButton";

interface SectionTitleProps {
  title: string;
  icon?: JSX.Element;
  dark?: true;
  button_text?: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ title, icon, dark, button_text }) => {
  return (
    <div className={`flex flex-row justify-between items-center`}>
      <h2
        className={`flex gap-3 items-center text-[28px] font-semibold leading-7 
          ${dark && "text-text"}
        `}
      >
        {icon && icon}
        {title}
      </h2>
      {button_text && <GhostButton text={button_text} icon_end />}
    </div>
  );
};

export { SectionTitle };
