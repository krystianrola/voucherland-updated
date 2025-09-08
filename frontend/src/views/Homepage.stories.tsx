import type { Meta, StoryObj } from "@storybook/react-vite";
import { Homepage as HomepageComponent } from "./Homepage";

const meta: Meta<typeof HomepageComponent> = {
  component: HomepageComponent,
  title: "Pages/Homepage",
};

export default meta;

export const Homepage: StoryObj<typeof HomepageComponent> = {
  args: {},
};
