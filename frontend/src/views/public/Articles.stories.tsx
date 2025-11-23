import type { Meta, StoryObj } from "@storybook/react-vite";
import { Articles as ArticlesComponent } from "./Articles";

const meta: Meta<typeof ArticlesComponent> = {
  component: ArticlesComponent,
  title: "Pages/Articles",
};

export default meta;

export const Articles: StoryObj<typeof ArticlesComponent> = {
  args: {},
};
