import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tabs } from "./Tabs";

const TEST_ID_TABS = "tabs";

const ExampleTabs = () => (
  <div data-testid="tabs">
    <Tabs.Root defaultValue="tab1">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="tab1">Content 1</Tabs.Content>
      <Tabs.Content value="tab2">Content 2</Tabs.Content>
    </Tabs.Root>
  </div>
);

describe("Tabs Component", () => {
  test("Renders component correctly ", () => {
    render(<ExampleTabs />);

    expect(screen.getByTestId(TEST_ID_TABS)).toBeInTheDocument();
  });

  test("Renders all parts of the tab correctly  ", () => {
    render(<ExampleTabs />);

    expect(screen.getByTestId(TEST_ID_TABS)).toBeInTheDocument();
  });

  test("Shows only the default tab content initially", () => {
    render(<ExampleTabs />);

    expect(screen.getByTestId("tab-trigger-tab1")).toHaveAttribute("data-active", "true");
    expect(screen.getByTestId("tab-trigger-tab2")).toHaveAttribute("data-active", "false");
  });

  test("Switches active tab on trigger click", async () => {
    const user = userEvent.setup();

    render(<ExampleTabs />);

    await user.click(screen.getByTestId("tab-trigger-tab2"));

    expect(screen.getByTestId("tab-trigger-tab1")).toHaveAttribute("data-active", "false");
    expect(screen.getByTestId("tab-trigger-tab2")).toHaveAttribute("data-active", "true");
  });

  test("Throws error if Trigger used outside Root", () => {
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});

    expect(() => render(<Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>)).toThrowError(
      "Tab.Trigger must be used inside the Tab.Root"
    );

    consoleError.mockRestore();
  });

  test("Throws error if Content used outside Root", () => {
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});

    expect(() => render(<Tabs.Content value="tab1">tab 1 content</Tabs.Content>)).toThrowError(
      "Tab.Content must be used inside the Tab.Root"
    );

    consoleError.mockRestore();
  });
});
