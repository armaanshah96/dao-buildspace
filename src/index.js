import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";

import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

// A way to specify with 3rdweb which chain to use
const supportedChainIds = [4];
const walletConnectors = {
  injected: {}, // a way to specify injected wallet support (i.e. Metamask)
};
// Render the App component to the DOM
ReactDOM.render(
  <React.StrictMode>
    <ThirdwebWeb3Provider
      connectors={walletConnectors}
      supportedChainIds={supportedChainIds}
    >
      <App />
    </ThirdwebWeb3Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
