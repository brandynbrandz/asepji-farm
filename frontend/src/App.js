import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Home from "./pages/home/Home";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { multilanguage, loadLanguages } from "redux-multilanguage";
import { connect } from "react-redux";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";

function App(props) {
  useEffect(() => {
    props.dispatch(
      loadLanguages({
        languages: {
          en: require("./translations/english.json"),
          sw: require("./translations/swahili.json"),
          // de: require("./translations/germany.json"),
        },
      })
    );
  });
  return (
    <ToastProvider placement="bottom-left">
      <BreadcrumbsProvider>
        <Router>
          <ScrollToTop>
            <Switch>
              <Route
                exact
                path={process.env.PUBLIC_URL + "/"}
                component={Home}
              />
            </Switch>
          </ScrollToTop>
        </Router>
      </BreadcrumbsProvider>
    </ToastProvider>
  );
}

App.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(multilanguage(App));
