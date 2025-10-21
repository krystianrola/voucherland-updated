import { NavLink } from "react-router-dom";
import { TRoute } from "../../../types";
import { FC } from "react";

interface MenuItemProps {
  text: string;
  route: TRoute;
}

const MenuItem: FC<MenuItemProps> = ({ text, route }) => {
  return (
    <li className="relative text-base leading-6 text-dark font-semibold ">
      <NavLink
        to={route}
        className={({ isActive }) =>
          isActive
            ? "after:animate-line after:bg-main after:w-full after:h-0.5 after:content-[''] after:absolute after:-bottom-[10%] after:left-0 rounded-sm"
            : ""
        }
      >
        {text}
      </NavLink>
    </li>
  );
};

export { MenuItem };
