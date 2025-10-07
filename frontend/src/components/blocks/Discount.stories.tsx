import type { Meta, StoryObj } from "@storybook/react-vite";
import { Discount as DiscountComponent } from "./Discount";
import { DiscountTypes } from "../../types";

const meta: Meta<typeof DiscountComponent> = {
  component: DiscountComponent,
  title: "Blocks/Discount",
};
export default meta;

export const DiscountPercentage: StoryObj<typeof DiscountComponent> = {
  args: {
    type: DiscountTypes.Percentage,
    text: "30% off",
  },
};

export const DiscountFixed: StoryObj<typeof DiscountComponent> = {
  args: {
    type: DiscountTypes.Fixed,
    text: "-10€",
  },
};

export const DiscountBuyOneGetOne: StoryObj<typeof DiscountComponent> = {
  args: {
    type: DiscountTypes.BuyOneGetOne,
    text: "2+1",
  },
};

export const DiscountBundle: StoryObj<typeof DiscountComponent> = {
  args: {
    type: DiscountTypes.Bundle,
    text: "2 for 5€",
  },
};
