import type { Preview } from "@storybook/react-vite";
import "../src/index.css";
import { MemoryRouter } from "react-router-dom";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
    backgrounds: {
      options: {
        light: { name: "light", value: " #e9ecef" },
        dark: { name: "dark", value: "#1d1d1d" },
      },
    },
  },
  initialGlobals: {
    background: { value: "light" },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "1440px", padding: "20px" }}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </div>
    ),
  ],
  tags: ["autodocs"],
};

export default preview;
