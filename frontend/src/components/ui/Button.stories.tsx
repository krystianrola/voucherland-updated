import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button as ButtonComponent } from "./Button";

const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
  title: "UI/Button",
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "create", "delete"],
    },
  },
};

export default meta;

export const Button: StoryObj<typeof ButtonComponent> = {
  args: {
    text: "button text goes here",
    variant: "primary",
    disabled: false,
  },
};
