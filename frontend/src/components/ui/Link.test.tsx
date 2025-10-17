import { render, screen } from "@testing-library/react";
import { Link } from "./Link";

const TEST_ID_LINK = "link";

describe("Link Component", () => {
  test("Renders component correctly", () => {
    render(<Link text="some link" />);

    expect(screen.getByTestId(TEST_ID_LINK)).toBeInTheDocument();
  });

  test("Renders text correctly", () => {
    const text = "some link";
    render(<Link text={text} />);

    expect(screen.getByTestId(TEST_ID_LINK)).toHaveTextContent(text);
  });

  test("Renders correct text after component update", () => {
    const { rerender } = render(<Link text="old link text" />);
    rerender(<Link text="new link text" />);

    const component = screen.getByTestId(TEST_ID_LINK);

    expect(component).not.toHaveTextContent("old link text");
    expect(component).toHaveTextContent("new link text");
  });

  test("Forwards additional props correctly", () => {
    render(<Link text="link" href="/" />);

    expect(screen.getByTestId(TEST_ID_LINK)).toHaveAttribute("href", "/");
  });
});
