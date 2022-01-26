import React from "react";
import ReactDOM from "react-dom";
import App from "./container/App";
import reportWebVitals from "./reportWebVitals";
import "./bootstrap-override.scss";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./i18Nnitalizer/i18n";
import { Provider } from "react-redux";
import { store } from './redux/configureStore';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
