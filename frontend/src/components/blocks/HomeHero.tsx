import { useNavigate } from "react-router";
import { ButtonVariant } from "../../types";
import Section from "../layout/Section";
import { Button } from "../ui/Button";
import ROUTE from "../../constants/routes";

const HomeHero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-svh flex flex-col justify-center items-center gap-15 p-3 bg-dark lg:flex-row lg:gap-5">
      <Section
        color_variant="dark"
        className="flex flex-col justify-center items-center gap-15 lg:flex-row bg-transparent"
      >
        <div className="max-h-1/2 flex flex-col items-center gap-4 text-center justify-center lg:flex-1 lg:items-start lg:text-left">
          <h1 className="text-4xl text-light font-semibold lg:text-6xl">
            Get your voucher now and <span className="text-main">be ahead of the crowd.</span>
          </h1>
          <p className="text-sm leading-6 text-description">
            Stop overpaying for the things you love... discover thousands of verified and exclusive
            vouchers, hand-picked deals, limited-time offers and instant savings on top brands, all
            in one place.
            <br />
            Ready to save? Register now and never miss a deal!
          </p>
          <Button
            variant={ButtonVariant.Primary}
            text="Register"
            className="w-full md:w-1/2 lg:w-fit"
            onClick={() => navigate(ROUTE.REGISTER)}
          />
        </div>
        <div className="h-fit mx-auto overflow-hidden rounded-lg md:w-4/5 lg:flex-1 ">
          <img
            src="/images/full-banner-img.webp"
            alt="home-hero"
            className="w-full h-full object-contain"
          />
        </div>
      </Section>
    </div>
  );
};

export { HomeHero };
