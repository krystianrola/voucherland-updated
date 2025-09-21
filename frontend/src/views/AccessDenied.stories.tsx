import type { Meta, StoryObj } from "@storybook/react-vite";
import { AccessDenied as AccessDeniedComponent } from "./AccessDenied";

const meta: Meta<typeof AccessDeniedComponent> = {
  component: AccessDeniedComponent,
  title: "Pages/AccessDenied",
};

export default meta;

export const AccessDenied: StoryObj<typeof AccessDeniedComponent> = {
  args: {},
};
