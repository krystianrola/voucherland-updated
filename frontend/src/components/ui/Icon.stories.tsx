import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon as IconComponent } from "./Icon";

const meta: Meta<typeof IconComponent> = {
  component: IconComponent,
  title: "UI/Icon",
};

export default meta;

export const Icon: StoryObj<typeof IconComponent> = {
  args: {},
};
