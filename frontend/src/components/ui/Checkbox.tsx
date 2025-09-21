import type { FC, InputHTMLAttributes } from "react";
import { useState } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
}

const Checkbox: FC<CheckboxProps> = ({ text, ...props }) => {
  const [isChecked, setIsChecked] = useState<boolean>(props.checked ? props.checked : false);

  return (
    <label
      htmlFor={props.name}
      className="w-fit flex flex-row gap-2 justify-center content-center text-xs text-text cursor-pointer"
    >
      <input
        id={props.name}
        type="checkbox"
        onChange={() => setIsChecked((prev) => !prev)}
        checked={isChecked}
        className="w-3 h-3 self-center outline-none appearance-none border border-solid border-text rounded-xs checked:bg-main "
        {...props}
      />
      {text}
    </label>
  );
};

export { Checkbox };
