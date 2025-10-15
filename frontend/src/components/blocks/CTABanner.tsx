import type { FC } from "react";
import { Button } from "../ui/Button";
import { ButtonVariant } from "../../types";
import { useNavigate } from "react-router";
import ROUTE from "../../constants/routes";

interface CTABannerProps {
  label: string;
  title: string;
  description: string;
  button: string;
}

const CTABanner: FC<CTABannerProps> = ({ label, title, description, button }) => {
  const navigate = useNavigate();

  return (
    <section>
      <div className="flex flex-col w-full gap-0 lg:flex-row">
        <div className="w-full overflow-hidden rounded-t-lg lg:w-1/2 lg:rounded-l-lg lg:rounded-tr-none">
          <img src="./images/banner.png" alt="banner" className="w-full h-auto object-fill" />
        </div>
        <div className="overflow-hidden w-full h-auto flex flex-col gap-5 justify-center rounded-b-lg px-6 py-[50px] lg:p-[50px] bg-light lg:w-1/2 lg:rounded-bl-none lg:rounded-r-lg">
          <p className="text-sm text-tag font-bold">{label}</p>
          <h3 className="text-lg text-dark font-bold leading-7">{title}</h3>
          <p className="text-base text-description leading-6">{description}</p>
          {button && (
            <Button
              text={button}
              variant={ButtonVariant.Primary}
              onClick={() => navigate(ROUTE.CONTACT)}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export { CTABanner };
