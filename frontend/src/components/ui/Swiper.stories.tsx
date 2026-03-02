import { Meta, StoryObj } from "@storybook/react-vite";
import { Swiper as SwiperComponent } from "./Swiper";
import { SkeletonCard } from "../blocks/SkeletonCard";

const meta: Meta<typeof SwiperComponent> = {
  component: SwiperComponent,
  title: "ui/Swiper",
};

export default meta;

export const Swiper: StoryObj<typeof SwiperComponent> = {
  args: {
    children: [
      <SkeletonCard />,
      <SkeletonCard />,
      <SkeletonCard />,
      <SkeletonCard />,
      <SkeletonCard />,
      <SkeletonCard />,
      <SkeletonCard />,
    ],
  },
};
