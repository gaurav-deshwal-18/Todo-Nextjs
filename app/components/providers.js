"use client";

import { store } from "../../redux/store.js";
import { Provider } from "react-redux";

export const Providers = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
