import type { ButtonHTMLAttributes, FC } from "react";
import { LuMoveLeft, LuMoveRight } from "react-icons/lu";

interface GhostButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon_start?: true;
  icon_end?: true;
}

const GhostButton: FC<GhostButtonProps> = ({ text, icon_start, icon_end, ...props }) => {
  return (
    <button
      className="flex flex-row gap-3 justify-center wrap w-fit px-3 py-1.5 text-[1rem] font-semibold cursor-pointer outline-none rounded-md border border-solid border-main"
      {...props}
    >
      {icon_start && <LuMoveLeft className="w-6 h-6" />}
      {text}
      {icon_end && <LuMoveRight className="w-6 h-6" />}
    </button>
  );
};

export { GhostButton };
