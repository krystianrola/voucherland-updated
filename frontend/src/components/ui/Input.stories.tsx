import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input as InputComponent } from "./Input";

const meta: Meta<typeof InputComponent> = {
  component: InputComponent,
  title: "UI/Input",
};

export default meta;

export const Input: StoryObj<typeof InputComponent> = {
  args: {
    error: false,
    error_msg: "validation error message",
    placeholder: "field",
  },
};
