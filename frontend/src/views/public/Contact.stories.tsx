import type { Meta, StoryObj } from "@storybook/react-vite";
import { Contact as ContactComponent } from "./Contact";

const meta: Meta<typeof ContactComponent> = {
  component: ContactComponent,
  title: "Pages/Contact",
};

export default meta;

export const Contact: StoryObj<typeof ContactComponent> = {
  args: {},
};
