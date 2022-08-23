import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@/test-utils";
import { Button } from "./Button";

describe("Button test cases", () => {
  it("should render", () => {
    const onClick = jest.fn();
    const { asFragment } = render(<Button onClick={onClick}>Button</Button>);

    expect(asFragment()).toMatchSnapshot();
  });

  it("Check onClick callback", async () => {
    const onClick = jest.fn();

    render(<Button onClick={onClick}>Button</Button>);
    const element = screen.getByRole("button");
    await userEvent.click(element);

    expect(onClick).toHaveBeenCalled();
  });
});
