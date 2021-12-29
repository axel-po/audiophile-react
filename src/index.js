import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import CartContextProvider from "./context/CartContext";

ReactDOM.render(
  <Provider store={store}>
    <CartContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartContextProvider>
  </Provider>,

  document.getElementById("root")
);
