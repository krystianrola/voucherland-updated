import type { Meta, StoryObj } from "@storybook/react-vite";
import { Registration as RegistrationComponent } from "./Registration";

const meta: Meta<typeof RegistrationComponent> = {
  component: RegistrationComponent,
  title: "Pages/Registration",
};

export default meta;

export const Registration: StoryObj<typeof RegistrationComponent> = {
  args: {},
};
