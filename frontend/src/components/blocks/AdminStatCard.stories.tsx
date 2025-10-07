import type { Meta, StoryObj } from "@storybook/react-vite";
import { AdminStatCard as AdminStatCardComponent } from "./AdminStatCard";

const meta: Meta<typeof AdminStatCardComponent> = {
  component: AdminStatCardComponent,
  title: "Blocks/Admin Statistics",
};

export default meta;

export const AdminStatistics: StoryObj<typeof AdminStatCardComponent> = {
  args: {
    statLabel: "#downloads24h",
    statValue: 123123,
    trendChange: 20,
  },
};

export const AdminStatisticsNegativeTrend: StoryObj<typeof AdminStatCardComponent> = {
  args: {
    statLabel: "#downloads24h",
    statValue: 123123,
    trendChange: -10,
  },
};

export const AdminStatisticsNoTrend: StoryObj<typeof AdminStatCardComponent> = {
  args: {
    statLabel: "#downloads24h",
    statValue: 123123,
  },
};
