import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cartAction";
import Product from "../Product/Product";

const Shop = (props) => {
  console.log(props);
  const { products, addToCart } = props;
  return (
    <div>
      <h2>This is shop</h2>
      {products.map((pd) => (
        <Product product={pd} key={pd.id} addToCart={addToCart} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    products: state.products,
  };
};

const mapDisptachToProps = {
  addToCart: addToCart,
};

export default connect(mapStateToProps, mapDisptachToProps)(Shop);
