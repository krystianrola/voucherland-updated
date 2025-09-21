import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link as LinkComponent } from "./Link";

const meta: Meta<typeof LinkComponent> = {
  component: LinkComponent,
  title: "UI/Link",
};

export default meta;

export const Link: StoryObj<typeof LinkComponent> = {
  args: {
    text: "anchor text here",
  },
  globals: {
    backgrounds: {
      value: "dark",
    },
  },
};
