import type { FC } from "react";
import Page from "@/components/layout/Page";
import { Button } from "@/components/ui/Button";
import { ButtonVariant } from "@/types";
import { useNavigate } from "react-router";
import ROUTE from "@/constants/routes";
import Section from "@/components/layout/Section";
import { LuFileSearch } from "react-icons/lu";

const NotFound: FC = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <Section className="h-[calc(100vh-3.25rem-16rem)] flex flex-col gap-5 justify-center items-center py-10 px-3">
        <div className="flex flex-col justify-center items-center">
          <LuFileSearch className="text-8xl" />

          <h1 className="text-7xl leading-20 text-dark font-bold font-mono">404</h1>
          <p className="text-lg text-description font-semibold">Page Not Found</p>
        </div>
        <p className="w-full text-sm text-description text-center">
          Sorry! We can't seem to find that page. But since you're here, check out some of our best
          deals below. <br /> Or go back to the homepage.
        </p>
        <Button
          variant={ButtonVariant.Primary}
          text="Back to Homepage"
          onClick={() => navigate(ROUTE.HOME)}
        />
      </Section>
    </Page>
  );
};

export { NotFound };
