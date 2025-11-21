import type { ButtonHTMLAttributes, FC } from "react";
import { ButtonVariant, type TButtonVariant } from "../../types";

//icons
import { FaLongArrowAltLeft } from "react-icons/fa";
import { LuSquarePlus, LuOctagonX } from "react-icons/lu";

const ButtonVariants: Record<TButtonVariant, string> = {
  primary: "px-5 bg-main hover:bg-main-hover text-dark border-transparent",
  secondary: "px-5 bg-second text-dark border-transparent",
  tertiary: "px-5 bg-dark border-main text-text",
  create: "bg-admin_green text-text border-transparent",
  delete: "bg-admin_red text-text border-transparent",
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: TButtonVariant;
}

const Button: FC<ButtonProps> = ({
  text,
  variant = ButtonVariant.Primary,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`flex flex-row gap-3 justify-center items-center text-center whitespace-nowrap w-fit p-1.5 text-[1rem] font-semibold cursor-pointer outline-none rounded-md border border-solid transform transition-all duration-200 disabled:bg-disabled disabled:text-disabled-text disabled:cursor-not-allowed ${ButtonVariants[variant]} ${className}`}
    >
      {variant == ButtonVariant.Tertiary && <FaLongArrowAltLeft className="w-5 h-5 self-center" />}
      {text}
      {variant == ButtonVariant.Create && <LuSquarePlus className="w-6.5 h-6.5 self-center" />}
      {variant == ButtonVariant.Delete && <LuOctagonX className="w-6.5 h-6.5 self-center " />}
    </button>
  );
};

export { Button };
