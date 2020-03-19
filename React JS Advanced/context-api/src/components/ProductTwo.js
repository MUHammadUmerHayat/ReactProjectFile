import React, { Component } from "react";
import ProductContext, {
  ProductConsumer
} from "../context-api/productsContext";
import UserContext from "../context-api/userContext";

export default class ProductTwo extends Component {
  static contextType = ProductContext;

  componentDidMount() {
    console.log(this.context);
  }

  render() {
    return (
      <ProductConsumer>
        {products => {
          return (
            <ul>
              {products.products.map((product, index) => {
                return (
                  <div key={index}>
                    <li>{product}</li>
                    <button
                      onClick={() => {
                        products.changeProduct(product, "Something");
                      }}
                    >
                      Change
                    </button>
                  </div>
                );
              })}
            </ul>
          );
        }}
      </ProductConsumer>
    );
  }
}

// ProductTwo.contextType = ProductContext;
