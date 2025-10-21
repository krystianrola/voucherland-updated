import { FC } from "react";
import { createPortal } from "react-dom";
import { LuX } from "react-icons/lu";
import ActionButtons from "./ActionButtons";
import { Menu } from "../Menu";

interface MobileHeaderProps {
  onClose: () => void;
  isLoggedIn: boolean;
}

const MobileHeader: FC<MobileHeaderProps> = ({ onClose, isLoggedIn }) => {
  return createPortal(
    <nav className="absolute top-0 left-0 w-full h-dvh flex flex-col justify-between p-3 bg-white lg:hidden ">
      <LuX className="w-8 h-8 place-self-end" onClick={onClose} />

      <Menu />

      <div className="flex flex-col gap-4 pt-4 border-t border-solid border-main">
        {<ActionButtons isLoggedIn={isLoggedIn} onClose={onClose} />}
      </div>
    </nav>,
    document.getElementById("menu")!
  );
};

export default MobileHeader;
