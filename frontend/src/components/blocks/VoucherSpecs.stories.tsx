import type { Meta, StoryObj } from "@storybook/react-vite";
import { VoucherSpecs as VoucherSpecsComponent } from "./VoucherSpecs";

const meta: Meta<typeof VoucherSpecsComponent> = {
  component: VoucherSpecsComponent,
  title: "blocks/Voucher Specs",
};
export default meta;

export const VoucherSpecs: StoryObj<typeof VoucherSpecsComponent> = {
  args: {},
};
