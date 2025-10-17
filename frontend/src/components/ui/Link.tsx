import type { AnchorHTMLAttributes, FC } from "react";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
}

const Link: FC<LinkProps> = ({ text, ...props }) => {
  return (
    <a className="text-xs text-text" data-testid="link" {...props}>
      {text}
    </a>
  );
};

export { Link };
