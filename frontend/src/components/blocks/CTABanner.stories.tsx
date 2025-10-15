import type { Meta, StoryObj } from "@storybook/react-vite";
import { CTABanner as CTABannerComponent } from "./CTABanner";

const meta: Meta<typeof CTABannerComponent> = {
  component: CTABannerComponent,
  title: "Blocks/CTA Banner",
};
export default meta;

export const CTABanner: StoryObj<typeof CTABannerComponent> = {
  args: {
    label: "collaborations",
    title: "Contact us to give your clients the best deals possible.",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum.",
    button: "Contact us",
  },
  globals: {
    backgrounds: {
      value: "dark",
    },
  },
};
