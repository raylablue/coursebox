import userEvent from "@testing-library/user-event";

import { render, screen } from "@/test-utils";

import { IconButton } from "./IconButton";

describe("IconButton test cases", () => {
  it("Render check", () => {
    const onClick = jest.fn();
    const { asFragment } = render(
      <IconButton name="Home" onClick={onClick}>
        Button
      </IconButton>
    );

    expect(asFragment()).toMatchSnapshot();
  });
  it("Check onClick callback", async () => {
    const onClick = jest.fn();

    render(
      <IconButton name="Home" onClick={onClick}>
        Button
      </IconButton>
    );

    const element = screen.getByRole("button");

    await userEvent.click(element);

    expect(onClick).toHaveBeenCalled();
  });
});
