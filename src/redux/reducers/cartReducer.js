import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartAction";

// This is our initial state, we are working with a cart so, in the initial state we have a cart property and initially by default it is an empty array.

const initialState = {
  cart: [],
  products: [
    {
      name: "Lenovo Laptop",
      id: 1,
    },
    {
      name: "Asus Laptop",
      id: 2,
    },
    {
      name: "Dell Laptop",
      id: 3,
    },
    {
      name: "Hp Laptop",
      id: 4,
    },
    {
      name: "Toshiba Laptop",
      id: 5,
    },
  ],
};

// Here we write our reducer. Here we need to define that, what actually we want from this reducer function using actions what we wrote in cartAction.js file already.

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = {
        productId: action.id,
        name: action.name,
        cartId: state.cart.length + 1,
      };
      const newCart = [...state.cart, newItem];
      return { ...state, cart: newCart };

    case REMOVE_FROM_CART:
      const id = action.id;
      const remainingCart = state.cart.filter((item) => item.cartId !== id);
      return { ...state, cart: remainingCart };
    default:
      return state;
  }
};
