import type { BaseHTMLAttributes, FC } from "react";

interface TextUnderlinedProps extends BaseHTMLAttributes<HTMLSpanElement> {
  text: string;
}

const TextUnderlined: FC<TextUnderlinedProps> = ({ text, className = "" }) => {
  return (
    <span
      className={`relative after:animate-line after:bg-main after:w-full after:h-0.5 after:content-[''] after:absolute after:-bottom-[10%] after:left-0 rounded-sm ${className}`}
    >
      {text}
    </span>
  );
};
export { TextUnderlined };
