import { Meta, StoryObj } from "@storybook/react-vite";
import { HomeHero as HomeHeroComponent } from "./HomeHero";

const meta: Meta<typeof HomeHeroComponent> = {
  component: HomeHeroComponent,
  title: "blocks/Home Hero",
};

export default meta;

export const HomeHero: StoryObj<typeof HomeHeroComponent> = {
  args: {},
};
