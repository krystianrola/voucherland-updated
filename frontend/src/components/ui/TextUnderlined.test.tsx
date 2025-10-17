import { render, screen } from "@testing-library/react";
import { TextUnderlined } from "./TextUnderlined";

const TEST_ID_TEXTUNDERLINED = "text-underlined";

describe("TextUnderlined Component", () => {
  test("Renders component correctly", () => {
    render(<TextUnderlined text="" />);

    expect(screen.getByTestId(TEST_ID_TEXTUNDERLINED)).toBeInTheDocument();
  });

  test("Renders text correctly", () => {
    const text = "some text";
    render(<TextUnderlined text={text} />);

    expect(screen.getByTestId(TEST_ID_TEXTUNDERLINED)).toHaveTextContent(text);
  });

  test("Renders correct text after component update", () => {
    const { rerender } = render(<TextUnderlined text={"old text"} />);
    rerender(<TextUnderlined text={"new text"} />);

    const component = screen.getByTestId(TEST_ID_TEXTUNDERLINED);

    expect(component).not.toHaveTextContent("old text");
    expect(component).toHaveTextContent("new text");
  });
});
