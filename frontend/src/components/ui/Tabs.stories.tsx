import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs as TabsComponent } from "./Tabs";
import { LuLockKeyholeOpen, LuLockKeyhole } from "react-icons/lu";
import { PiWarningBold } from "react-icons/pi";

const meta: Meta<typeof TabsComponent.Root> = {
  component: TabsComponent.Root,
  title: "UI/Tabs",
};
export default meta;

export const Tabs: StoryObj<typeof TabsComponent.Root> = {
  render: () => (
    <TabsComponent.Root defaultValue="tab-1">
      <TabsComponent.List>
        <TabsComponent.Trigger value="tab-1">Tab 1</TabsComponent.Trigger>
        <TabsComponent.Trigger value="tab-2">Tab 2</TabsComponent.Trigger>
        <TabsComponent.Trigger value="tab-3">Tab 3</TabsComponent.Trigger>
      </TabsComponent.List>
      <TabsComponent.Content value="tab-1">TAb 1 content</TabsComponent.Content>
      <TabsComponent.Content value="tab-2">TAb 2 content</TabsComponent.Content>
      <TabsComponent.Content value="tab-3">TAb 3 content</TabsComponent.Content>
    </TabsComponent.Root>
  ),
};

export const TabsExample: StoryObj<typeof TabsComponent.Root> = {
  render: () => (
    <TabsComponent.Root defaultValue="tab-1">
      <TabsComponent.List>
        <TabsComponent.Trigger value="tab-1" color="admin_green">
          <LuLockKeyholeOpen className="w-5 h-5" /> public
        </TabsComponent.Trigger>
        <TabsComponent.Trigger value="tab-2" color="admin_red">
          <LuLockKeyhole className="w-5 h-5" /> private
        </TabsComponent.Trigger>
        <TabsComponent.Trigger value="tab-3" color="dark">
          <PiWarningBold className="w-5 h-5" /> expired
        </TabsComponent.Trigger>
      </TabsComponent.List>
      <TabsComponent.Content value="tab-1">Tab 1 Content</TabsComponent.Content>
      <TabsComponent.Content value="tab-2">Tab 2 Content</TabsComponent.Content>
      <TabsComponent.Content value="tab-3">Tab 3 Content</TabsComponent.Content>
    </TabsComponent.Root>
  ),
};
