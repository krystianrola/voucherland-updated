import { FC, useState } from "react";
import { LuChartNoAxesGantt } from "react-icons/lu";
import MobileHeader from "./MobileHeader";
import { useNavigate } from "react-router";
import ROUTE from "../../../constants/routes";
import { Menu } from "../Menu";
import ActionButtons from "./ActionButtons";

const Header: FC = () => {
  const navigate = useNavigate();
  const [openMenu, setopenMenu] = useState<boolean>(false);

  return (
    <header className="w-full max-w-[1440px] sticky top-0 flex p-1 lg:p-3 border-b border-solid border-main backdrop-blur-2xl">
      <div className="w-full flex justify-between items-center gap-2 lg:w-auto">
        <h1
          className="text-xl font-bold lg:text-2xl hover:cursor-pointer"
          onClick={() => navigate(ROUTE.HOME)}
        >
          voucherland.
        </h1>
        <LuChartNoAxesGantt className="w-6 h-6 lg:hidden" onClick={() => setopenMenu(true)} />
      </div>

      <nav className="hidden  lg:w-full lg:block lg:max-w-[1220px]">
        <Menu />
      </nav>

      <div className="hidden lg:block">
        <ActionButtons isLoggedIn={false} onClose={() => setopenMenu(true)} />
      </div>

      {openMenu && <MobileHeader onClose={() => setopenMenu(false)} isLoggedIn={true} />}
    </header>
  );
};

export { Header };
