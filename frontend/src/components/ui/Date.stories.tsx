import { Meta, StoryObj } from "@storybook/react-vite";
import { Date as DateComponent } from "./Date";

const meta: Meta<typeof DateComponent> = {
  component: DateComponent,
  title: "UI/Date",
};

export default meta;

export const Date: StoryObj<typeof DateComponent> = {
  args: {
    date: "fr 18 feb",
  },
};
