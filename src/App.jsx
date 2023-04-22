import React from "react";
import AppNetflix from "./pages/AppNetflix";
import { Provider } from "react-redux";
import { store } from "./store";

export default function App() {
  return (
    <div>
      <Provider store = {store}>
        <AppNetflix />
      </Provider>
    </div>
  );
}
