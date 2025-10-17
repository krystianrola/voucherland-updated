import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Accordion as AccordionComponent,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";

const meta: Meta<typeof AccordionComponent> = {
  component: AccordionComponent,
  title: "UI/Accordion",
};

export default meta;

export const Accordion: StoryObj<typeof AccordionComponent> = {
  render: () => {
    return (
      <AccordionComponent type="multiple" defaultValue={["item-1"]}>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
      </AccordionComponent>
    );
  },
};
