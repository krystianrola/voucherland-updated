import type { Meta, StoryObj } from "@storybook/react-vite";
import { GhostButton as GhostButtonComponent } from "./GhostButton";

const meta: Meta<typeof GhostButtonComponent> = {
  component: GhostButtonComponent,
  title: "UI/GhostButton",
};

export default meta;

export const GhostButton: StoryObj<typeof GhostButtonComponent> = {
  args: {
    text: "Button text here",
  },
};

export const GhostButton_Icon_Start: StoryObj<typeof GhostButtonComponent> = {
  args: {
    text: "Button text here",
    icon_start: true,
  },
};

export const GhostButton_Icon_End: StoryObj<typeof GhostButtonComponent> = {
  args: {
    text: "Button text here",
    icon_end: true,
  },
};
