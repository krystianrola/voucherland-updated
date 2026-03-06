import { Meta, StoryObj } from "@storybook/react-vite";
import { Dropdown as DropdownComponent } from "./Dropdown";

const meta: Meta<typeof DropdownComponent> = {
  component: DropdownComponent,
  title: "ui/dropdown",
};

export default meta;

export const Dropdown: StoryObj<typeof DropdownComponent> = {
  args: {},
};
