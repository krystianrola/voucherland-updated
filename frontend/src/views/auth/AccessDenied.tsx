import type { FC } from "react";

interface AccessDeniedProp {}

const AccessDenied: FC<AccessDeniedProp> = () => {
  return <div>You don't have permission to view this page.</div>;
};

export { AccessDenied };
