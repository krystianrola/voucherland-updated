import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionTitle as SectionTitleComponent } from "./SectionTitle";

const meta: Meta<typeof SectionTitleComponent> = {
  component: SectionTitleComponent,
  title: "Blocks/Section Title",
};

export default meta;

export const SectionTitle: StoryObj<typeof SectionTitleComponent> = {
  args: {
    title: "Section title here",
  },
};

export const SectionTitle_WithButton: StoryObj<typeof SectionTitleComponent> = {
  args: {
    title: "Section title here",
    button_text: "Button text here",
  },
};
