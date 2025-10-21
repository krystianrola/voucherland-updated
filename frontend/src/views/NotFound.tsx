import type { FC } from "react";
import Page from "../components/layout/Page";
import { Button } from "../components/ui/Button";
import { ButtonVariant } from "../types";
import { useNavigate } from "react-router";
import ROUTE from "../constants/routes";

const NotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <Page className="">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-8xl leading-20 text-dark font-bold font-mono">404</h1>
        <p className="text-lg text-description font-semibold">Page Not Found</p>
      </div>
      <p className="w-full mt-5 lg:w-2/5 xl:w-3/5 m-auto text-sm text-center text-description">
        Sorry! We can't seem to find that page. But since you're here, check out some of our best
        deals below. Or go back to the homepage.
      </p>
      <Button
        variant={ButtonVariant.Primary}
        text="Back to Homepage"
        onClick={() => navigate(ROUTE.HOME)}
      />
    </Page>
  );
};

export { NotFound };
