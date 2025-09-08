import type { Meta, StoryObj } from "@storybook/react-vite";
import { Vouchers as VouchersComponent } from "./Vouchers";

const meta: Meta<typeof VouchersComponent> = {
  component: VouchersComponent,
  title: "Pages/Vouchers",
};

export default meta;

export const Vouchers: StoryObj<typeof VouchersComponent> = {
  args: {},
};
