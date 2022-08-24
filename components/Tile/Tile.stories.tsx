import { expect } from "@storybook/jest";
import { screen } from "@storybook/testing-library";
import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { Tile } from "./Tile";

export default {
  title: "Content/Tile",
  component: Tile,
} as ComponentMeta<typeof Tile>;

export const BasicTile: ComponentStoryObj<typeof Tile> = {
  play: async ({ args }) => {
    await expect(screen.getByRole("heading")).toBeInTheDocument();
  },
  args: {
    header: "Lorem Ipsum",
    children:
      "Candy canes gummies cookie wafer icing sweet apple pie cookie pudding. Dragée oat cake candy canes powder toffee sugar plum pie. Muffin sweet roll jelly-o croissant candy canes.\n" +
      "Cake sweet roll biscuit gummi bears sesame snaps toffee. Tart gummies cookie pastry dessert topping brownie bonbon. Jelly beans gummi bears cookie danish candy.\n" +
      "Marzipan toffee fruitcake jelly-o chocolate cake jelly-o pie dragée wafer. Gingerbread cupcake ice cream jelly cotton candy candy canes chocolate marzipan pudding. Pie pie candy canes chocolate bar jelly sweet roll sweet roll dessert cheesecake.\n" +
      "Wafer cookie topping tootsie roll cotton candy lollipop sweet roll. Gingerbread marshmallow chupa chups cheesecake powder sesame snaps. Dessert apple pie danish jelly-o gummies cupcake icing lollipop ice cream.\n" +
      "Tootsie roll danish tiramisu croissant marshmallow muffin donut carrot cake gummies. Sugar plum gingerbread cheesecake powder shortbread muffin apple pie donut marshmallow. Fruitcake chocolate bar icing bonbon toffee chocolate bar cupcake.",
  },
};
