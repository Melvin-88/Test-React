import React from "react";
import reactDOM from "react-dom";
import { Provider } from "react-redux";
import createBrowserHistory from "history/createBrowserHistory";
import { getStore } from "./getStore";
import routes from "./routes/routes";
import { Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

const store = getStore();
export const history = createBrowserHistory();

//https://material-ui.com/style/typography/#migration-to-typography-v2
// The material design specification changed concerning variant names and styles. To allow a smooth transition we kept
// old variants and restyled variants for backwards compatibility but we log deprecation warnings. We will remove the
// old typography variants in the next major release v4.0.0 (Q1 2019).
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

reactDOM.render(
  <Provider store={store}>
    <Router history={history} children={routes} />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
