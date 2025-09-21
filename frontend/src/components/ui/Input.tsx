import type { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error: boolean;
  error_msg: string;
}

const Input: FC<InputProps> = ({ error = true, error_msg, ...props }) => {
  return (
    <div className="flex flex-col gap-0.5">
      <input
        {...props}
        className="w-full px-3 py-1.5 rounded-md bg-light-bg border border-solid border-dark text-md text-dark outline-none focus:border-main"
      />

      {error && <p className="text-tiny text-admin_red italic">{error_msg}</p>}
    </div>
  );
};

export { Input };
