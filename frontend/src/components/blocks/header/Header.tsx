import { FC, useState } from "react";
import { LuChartNoAxesGantt } from "react-icons/lu";
import MobileHeader from "./MobileHeader";
import { useNavigate } from "react-router";
import ROUTE from "../../../constants/routes";
import { Menu } from "../Menu";
import ActionButtons from "./ActionButtons";
import useScrollBlock from "../../../hooks/useScrollBlock";
import { useAuthStore } from "@/store/AuthStore";

const Header: FC = () => {
  const navigate = useNavigate();
  const [disableScroll] = useScrollBlock();
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { loading } = useAuthStore();

  return (
    <header className="sticky z-40 w-full h-13 lg:h-16 top-0 flex p-3 border-b border-solid border-main bg-dark">
      <div className="w-full max-w-[1440px] m-auto flex justify-between ">
        <div className="w-full flex justify-between items-center gap-2 lg:w-auto">
          <h1
            className="text-xl font-bold cursor-pointer text-light lg:text-2xl "
            onClick={() => navigate(ROUTE.HOME)}
          >
            Voucherland.
          </h1>
          <LuChartNoAxesGantt
            className="w-6 h-6 text-light lg:hidden"
            onClick={() => {
              setOpenMenu(true);
              disableScroll(true);
            }}
          />
        </div>

        <nav className="hidden lg:w-full lg:block lg:max-w-[1220px]">
          <Menu />
        </nav>

        <div className="hidden lg:block">
          <ActionButtons onClose={() => setOpenMenu(true)} />
        </div>
      </div>

      {openMenu && (
        <MobileHeader
          onClose={() => {
            setOpenMenu(false);
            disableScroll(false);
          }}
          isLoggedIn={true}
        />
      )}
    </header>
  );
};

export { Header };
