import { FC } from "react";
import { MenuItem } from "./header/MenuItem";
import ROUTE from "../../constants/routes";

const Menu: FC = () => {
  return (
    <ul className="h-full flex flex-col justify-center items-center gap-[10%] py-4 lg:p-0 lg:w-full lg:flex-row ">
      <MenuItem text="Vouchers" route={ROUTE.VOUCHERS} />
      <MenuItem text="Articles" route={ROUTE.ARTICLES} />
      <MenuItem text="Contact" route={ROUTE.CONTACT} />
      <MenuItem text="Admin" route={ROUTE.ADMIN} />
    </ul>
  );
};

export { Menu };
