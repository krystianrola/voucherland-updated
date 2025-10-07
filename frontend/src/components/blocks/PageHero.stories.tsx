import type { Meta, StoryObj } from "@storybook/react-vite";
import { PageHero as PageHeroComponent } from "./PageHero";
import { TextUnderlined } from "../ui/TextUnderlined";

const meta: Meta<typeof PageHeroComponent> = {
  component: PageHeroComponent,
  title: "Blocks/Page Hero",
};

export default meta;

export const PageHero: StoryObj<typeof PageHeroComponent> = {
  args: {
    title: "page hero title here",
  },
};

export const PageHero_WithDescription: StoryObj<typeof PageHeroComponent> = {
  args: {
    title: "page hero title here",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
};

export const PageHero_Left: StoryObj<typeof PageHeroComponent> = {
  args: {
    title: "page hero title here",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    align: "left",
  },
};

export const PageHero_UnderlinedText: StoryObj<typeof PageHeroComponent> = {
  args: {
    title: (
      <>
        <TextUnderlined text="underlined" /> not underlined
      </>
    ),
  },
};
