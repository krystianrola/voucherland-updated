import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextUnderlined as TextUnderlinedComponent } from "./TextUnderlined";

const meta: Meta<typeof TextUnderlinedComponent> = {
  component: TextUnderlinedComponent,
  title: "UI/Text Underlined",
};

export default meta;

export const TextUnderlined: StoryObj<typeof TextUnderlinedComponent> = {
  args: {
    text: "text goes here",
  },
};
