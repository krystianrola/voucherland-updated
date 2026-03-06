import { Meta, StoryObj } from "@storybook/react-vite";
import { Account as AccountComponent } from "./Account";

const meta: Meta<typeof AccountComponent> = {
  component: AccountComponent,
  title: "pages/Account",
};

export default meta;

export const Account: StoryObj<typeof AccountComponent> = {
  args: {},
};
