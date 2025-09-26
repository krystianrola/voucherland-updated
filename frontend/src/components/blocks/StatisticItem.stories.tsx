import type { Meta, StoryObj } from "@storybook/react-vite";
import { StatisticItem as StatisticItemComponent } from "./StatisticItem";

const meta: Meta<typeof StatisticItemComponent> = {
  component: StatisticItemComponent,
  title: "Blocks/Statistic Item",
};

export default meta;

export const StatisticItem: StoryObj<typeof StatisticItemComponent> = {
  args: {
    name: "#voucher used",
    value: 22123,
  },
};
