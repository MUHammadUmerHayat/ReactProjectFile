import React from "react";
import logo from "./logo.svg";
import "./App.css";
import CompA from "./components/CompA";
import { UserProvider } from "./context-api/userContext";
import { ProductProvider } from "./context-api/productsContext";
import ProductOne from "./components/ProductOne";

class App extends React.Component {
  state = {
    products: ["Bike", "Car", "Jeep"]
  };

  changeProduct = (p, updatedProduct) => {
    let products = this.state.products;
    for (let i in products) {
      if (products[i] === p) {
        products[i] = updatedProduct;
      }
    }
    this.setState({
      products: products
    });
  };
  render() {
    return (
      <>
        <UserProvider value="Chandan">{/* <CompA /> */}</UserProvider>
        <ProductProvider
          value={{
            products: this.state.products,
            changeProduct: this.changeProduct
          }}
        >
          <ProductOne />
        </ProductProvider>
      </>
    );
  }
}
export default App;
