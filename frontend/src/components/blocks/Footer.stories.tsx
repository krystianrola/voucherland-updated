import type { Meta, StoryObj } from "@storybook/react-vite";
import { Footer as FooterComponent } from "./Footer";

const meta: Meta<typeof FooterComponent> = {
  component: FooterComponent,
  title: "Blocks/Footer",
};

export default meta;

export const Footer: StoryObj<typeof FooterComponent> = {
  args: {},
};
