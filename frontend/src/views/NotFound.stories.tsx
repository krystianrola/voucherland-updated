import type { Meta, StoryObj } from "@storybook/react-vite";
import { NotFound as NotFoundComponent } from "./NotFound";

const meta: Meta<typeof NotFoundComponent> = {
  component: NotFoundComponent,
  title: "pages/Not Found",
};

export default meta;

export const NotFound: StoryObj<typeof NotFoundComponent> = {
  args: {},
};
