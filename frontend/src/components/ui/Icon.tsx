import { lazy, Suspense, type BaseHTMLAttributes, type FC } from "react";

interface IconProps extends BaseHTMLAttributes<SVGElement> {
  name?: string;
}

const Icon: FC<IconProps> = ({ name, ...props }) => {
  if (!name) return null;

  const LazyImage = lazy(() => {
    return import(`../../assets/custom-icons/${name}.svg?react`);
  });

  return (
    <Suspense>
      <LazyImage {...props} />
    </Suspense>
  );
};

export { Icon };
