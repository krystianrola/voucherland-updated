import type { FC, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
}

const Input: FC<InputProps> = ({ error, className, ...props }) => {
  return (
    <div className="flex flex-col gap-0.5">
      <input
        {...props}
        className={`w-full px-3 py-2 rounded-md bg-light border-2 border-solid text-sm text-dark outline-none focus:border-main 
          ${error ? "border-admin_red" : "border-dark"} ${className}`}
      />

      {error && <p className="text-tiny text-admin_red italic">{error.message}</p>}
    </div>
  );
};

export { Input };
