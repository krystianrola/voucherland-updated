import { FC } from "react";
import { MenuItem } from "./header/MenuItem";
import ROUTE from "../../constants/routes";
import { useAuthStore } from "@/store/AuthStore";
import { UserRole } from "@/types";

const Menu: FC = () => {
  const isAdmin = useAuthStore((store) => store.user?.user_role === UserRole.Admin);

  return (
    <ul className="h-full flex flex-col justify-center items-center gap-[10%] py-4 lg:p-0 lg:w-full lg:flex-row ">
      <MenuItem text="Vouchers" route={ROUTE.VOUCHERS} />
      <MenuItem text="Articles" route={ROUTE.ARTICLES} />
      <MenuItem text="Contact" route={ROUTE.CONTACT} />
      {isAdmin && <MenuItem text="Admin" route={ROUTE.ADMIN} />}
    </ul>
  );
};

export { Menu };
