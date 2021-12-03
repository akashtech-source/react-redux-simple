import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div>
      <h1>Redux P.hero</h1>
      <Cart />
      <Shop />
    </div>
  );
}

export default App;
