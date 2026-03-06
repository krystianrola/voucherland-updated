import Page from "@/components/layout/Page";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import ROUTE from "@/constants/routes";
import { ButtonVariant } from "@/types";
import type { FC } from "react";
import { useNavigate } from "react-router";
import { LuShieldX } from "react-icons/lu";

interface AccessDeniedProp {}

const AccessDenied: FC<AccessDeniedProp> = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <Section className="h-[calc(100vh-3.25rem-16rem)] flex flex-col gap-5 justify-center items-center py-10 px-3">
        <div className="flex flex-col justify-center items-center">
          <LuShieldX className="text-8xl text-red-600" />
          <h1 className="text-7xl leading-20 text-dark font-bold font-mono">403</h1>
          <p className="text-lg text-description font-semibold">Access Denied</p>
        </div>
        <p className="w-full text-sm text-description text-center">
          Sorry! You do not have permission to view this page! <br />
          Please check your credentials or contact admin.
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

export { AccessDenied };
