import { FC } from "react";
import { ButtonVariant, TRoute } from "../../../types";
import ROUTE from "../../../constants/routes";
import { useNavigate } from "react-router";
import { Button } from "../../ui/Button";

interface ActionButtonsProps {
  isLoggedIn: boolean;
  onClose: () => void;
}

const ActionButtons: FC<ActionButtonsProps> = ({ isLoggedIn, onClose }) => {
  const navigate = useNavigate();

  const onClickHandler = (route: TRoute) => {
    return () => {
      navigate(route);
      onClose();
    };
  };

  const handleLogout = async () => {
    // e.g. clear auth, call API, etc.
    console.log("Logging out...");
    // maybe await logoutUser();
    navigate(ROUTE.HOME);
    onClose();
  };

  const actionButtons = isLoggedIn
    ? [
        {
          text: "My account",
          variant: ButtonVariant.Primary,
          route: ROUTE.REGISTER,
          onClick: onClickHandler(ROUTE.REGISTER),
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
      {actionButtons.map(({ text, variant, onClick }) => (
        <Button text={text} variant={variant} className="w-full" onClick={onClick} />
      ))}
    </div>
  );
};

export default ActionButtons;
