import { createSlice } from "@reduxjs/toolkit";
const defaultState = {
  products: [
    {
      id: "p1",
      title: "American Crew 3",
      description: "A pretty blck T-Shirt.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue Urbano fashion",
      description: "A pretty blue trousers.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Dennis Lingo.",
      description: "A  lightly green Shirts.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "URBANO FASHION",
      description: "Street style! Green trowser.",
      isFavorite: false,
    },
    {
        id: "p5",
        title: "LIV UR STYLE",
        description: "Street style! White T-shirt.",
        isFavorite: false,
      },
  ],
};
const productSlice = createSlice({
  name: "product",
  initialState: defaultState,
  reducers: {},
});
export default productSlice;
