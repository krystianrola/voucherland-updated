import { FC } from "react";
import { ButtonVariant, TRoute } from "../../../types";
import ROUTE from "../../../constants/routes";
import { useNavigate } from "react-router";
import { Button } from "../../ui/Button";
import { useAuthStore } from "@/store/AuthStore";

interface ActionButtonsProps {
  onClose: () => void;
}

const ActionButtons: FC<ActionButtonsProps> = ({ onClose }) => {
  const { logout } = useAuthStore();
  const isAuthenticated = useAuthStore((store) => store.token);
  const navigate = useNavigate();

  const onClickHandler = (route: TRoute) => {
    return () => {
      navigate(route);
      onClose();
    };
  };

  const handleLogout = async () => {
    logout();
    navigate(ROUTE.HOME);
  };

  const actionButtons = isAuthenticated
    ? [
        {
          text: "My account",
          variant: ButtonVariant.Primary,
          route: ROUTE.ACCOUNT,
          onClick: onClickHandler(ROUTE.ACCOUNT),
        },
        {
          text: "Log out",
          variant: ButtonVariant.Secondary,
          route: ROUTE.HOME,
          onClick: handleLogout,
        },
      ]
    : [
        {
          text: "Register",
          variant: ButtonVariant.Primary,
          route: ROUTE.REGISTER,
          onClick: onClickHandler(ROUTE.REGISTER),
        },

        {
          text: "Log in",
          variant: ButtonVariant.Secondary,
          route: ROUTE.REGISTER,
          onClick: onClickHandler(ROUTE.LOGIN),
        },
      ];

  return (
    <div className="flex flex-col gap-3 lg:flex-row">
      {actionButtons.map(({ text, variant, onClick }, idx) => (
        <Button text={text} variant={variant} className="w-full" onClick={onClick} key={idx} />
      ))}
    </div>
  );
};

export default ActionButtons;
