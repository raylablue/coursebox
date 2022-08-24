import React from "react";
import { render } from "@/test-utils";
import { Tile } from "@/components/Tile/Tile";

describe("Tile test cases", () => {
  it("Tile render check", () => {
    const { asFragment } = render(
      <Tile header="Lorem Ipsum">
        Lorem ipsum dolor sit amet, consecteur adipiscing elit, sed do eidsmod
        tempor incididunt ut lobore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exerictation ullamco laboris.
      </Tile>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
