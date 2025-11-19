import { Meta, StoryObj } from "@storybook/react-vite";
import { SkeletonCard as SkeletonCardComponent } from "./SkeletonCard";

const meta: Meta<typeof SkeletonCardComponent> = {
  component: SkeletonCardComponent,
  title: "blocks/Skeleton",
};

export default meta;

export const Skeleton: StoryObj<typeof SkeletonCardComponent> = {
  args: {},
};

export const SkeletonGroup: StoryObj<typeof SkeletonCardComponent> = {
  render: () => {
    return (
      <div className="flex justify-between">
        <SkeletonCardComponent />
        <SkeletonCardComponent />
        <SkeletonCardComponent />
      </div>
    );
  },
};
