import type { Meta, StoryObj } from "@storybook/react-vite";
import { Login as LoginComponent } from "./Login";

const meta: Meta<typeof LoginComponent> = {
  component: LoginComponent,
  title: "Pages/Login",
};

export default meta;

export const Login: StoryObj<typeof LoginComponent> = {
  args: {},
};
