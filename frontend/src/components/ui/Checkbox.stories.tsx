import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox as CheckboxComponent } from "./Checkbox";

const meta: Meta<typeof CheckboxComponent> = {
  component: CheckboxComponent,
  title: "UI/Checkbox",
};

export default meta;

export const Checkbox: StoryObj<typeof CheckboxComponent> = {
  args: {
    id: "remember-me",
    text: "checkbox test here",
  },
};
