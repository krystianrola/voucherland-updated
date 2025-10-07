import type { Meta, StoryObj } from "@storybook/react-vite";
import { BenefitItem as BenefitItemComponent } from "./BenefitItem";

const meta: Meta<typeof BenefitItemComponent> = {
  component: BenefitItemComponent,
  title: "Blocks/ Benefit Item",
};
export default meta;

export const BenefitItem: StoryObj<typeof BenefitItemComponent> = {
  args: {
    title: "Save money",
    number: "01",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
};
