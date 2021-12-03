// Writing our actions: what we need to do actually

export const ADD_TO_CART = "ADD_TO_CART";

export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

// Add a product using id to Cart
export const addToCart = (id, name) => {
  return { type: ADD_TO_CART, id, name };
};

// Remove a product using id to Cart
export const removeFromCart = (id, name) => {
  return { type: REMOVE_FROM_CART, id, name };
};

// Now what? Now we need to create our reducer who will make the actual mechanism using these actions
