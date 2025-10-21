import { Meta, StoryObj } from "@storybook/react-vite";
import { Menu as MenuComponent } from "./Menu";

const meta: Meta<typeof MenuComponent> = {
  component: MenuComponent,
  title: "blocks/Menu",
};

export default meta;

export const Menu: StoryObj<typeof MenuComponent> = {
  args: {},
};
