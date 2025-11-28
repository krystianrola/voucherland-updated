import { FC } from "react";

const AdminPage: FC<{ id: string }> = ({ id }) => {
  return <div>this is a test admin page for now {id}</div>;
};

export { AdminPage };
