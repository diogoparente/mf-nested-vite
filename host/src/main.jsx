import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

function __federation_method_setRemote({ remoteName, remoteConfig }) {
  window.remotesMap[remoteName] = remoteConfig;
}

window.__federation_method_setRemote = __federation_method_setRemote;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
