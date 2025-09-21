import type { AnchorHTMLAttributes, FC } from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
}

const Link: FC<LinkProps> = ({ text, ...props }) => {
  return (
    <a className="text-xs" {...props}>
      {text}
    </a>
  );
};

export { Link };
