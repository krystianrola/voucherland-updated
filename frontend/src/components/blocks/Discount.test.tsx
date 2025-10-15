import { render, screen } from "@testing-library/react";
import { DiscountTypes } from "../../types";
import { Discount } from "./Discount";

const TEST_ID_DISCOUNT = "discount";

describe("Discount Component", () => {
  test("Renders component correctly ", () => {
    render(<Discount type={DiscountTypes.Percentage} text="30% off" />);

    expect(screen.getByTestId(TEST_ID_DISCOUNT)).toBeInTheDocument();
  });

  test("Renders text correctly", () => {
    const text: string = "30% off";
    render(<Discount type={DiscountTypes.Percentage} text={text} />);

    expect(screen.getByTestId(TEST_ID_DISCOUNT)).toHaveTextContent(text);
  });

  test("Renders correct test after component update", () => {
    const { rerender } = render(<Discount type={DiscountTypes.Percentage} text={"old discount"} />);
    rerender(<Discount type={DiscountTypes.Percentage} text={"new discount"} />);

    const component = screen.getByTestId(TEST_ID_DISCOUNT);

    expect(component).not.toHaveTextContent("old discount");
    expect(component).toHaveTextContent("new discount");
  });

  test.each([
    [DiscountTypes.Percentage, "discount-percentage"],
    [DiscountTypes.Fixed, "discount-fixed"],
    [DiscountTypes.BuyOneGetOne, "discount-bogo"],
    [DiscountTypes.Bundle, "discount-bundle"],
  ])("Renders correct icon for %s", (type, testID) => {
    render(<Discount type={type} text="discount" />);

    expect(screen.getByTestId(testID)).toBeInTheDocument();
  });
});
