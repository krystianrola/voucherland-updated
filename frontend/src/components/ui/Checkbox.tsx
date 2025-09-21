import type { FC, InputHTMLAttributes } from "react";
import { useState } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  text: string;
}

const Checkbox: FC<CheckboxProps> = ({ id, text, ...props }) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div>
      <label
        htmlFor={id}
        className="w-fit flex flex-row gap-2 justify-center content-center text-xs text-dark"
      >
        <input
          id={id}
          type="checkbox"
          onChange={() => setChecked((prev) => !prev)}
          checked={checked}
          className="w-3 h-3 self-center outline-none border-none appearance-none border  checked:bg-main"
          {...props}
        />
        {text}
      </label>
    </div>
  );
};

export { Checkbox };
