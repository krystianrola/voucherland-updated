import type { FC } from "react";
import { GhostButton } from "../ui/GhostButton";

interface SectionTitleProps {
  title: string;
  button_text?: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ title, button_text }) => {
  return (
    <div className="flex flex-row justify-between items-center ">
      <h2 className="text-[28px] font-semibold leading-7">{title}</h2>
      {button_text && <GhostButton text={button_text} icon_end />}
    </div>
  );
};

export { SectionTitle };
