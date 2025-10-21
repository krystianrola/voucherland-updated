import { Meta, StoryObj } from "@storybook/react-vite";
import { Header as HeaderComponent } from "./Header";
import MobileHeader from "./MobileHeader";

const meta: Meta<typeof HeaderComponent> = {
  component: HeaderComponent,
  title: "blocks/Header",
};
export default meta;

export const Header: StoryObj<typeof HeaderComponent> = {
  args: {},
};

export const HeaderMobile: StoryObj<typeof HeaderComponent> = {
  render: () => <MobileHeader onClose={() => {}} isLoggedIn={true} />,
  globals: {
    viewport: { value: "mobile1", isRotated: false },
  },
};
