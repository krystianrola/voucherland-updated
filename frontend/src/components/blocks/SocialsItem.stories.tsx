import type { Meta, StoryObj } from "@storybook/react-vite";
import { SocialsItem as SocialsItemComponent } from "./SocialsItem";

const meta: Meta<typeof SocialsItemComponent> = {
  component: SocialsItemComponent,
  title: "Blocks/Socials Item",
};

export default meta;

export const SocialsItem: StoryObj<typeof SocialsItemComponent> = {
  args: {
    social: "facebook",
  },
  globals: {
    backgrounds: {
      value: "dark",
    },
  },
};
