import React, { useEffect, Suspense, lazy } from "react";
import PropTypes from "prop-types";
import Home from "./pages/home/Home";
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
          fn: require("./translations/french.json"),
          de: require("./translations/germany.json"),
        },
      })
    );
  });
  return (
    <ToastProvider placement="bottom-left">
      <BreadcrumbsProvider>
        <Router>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
          </Switch>
        </Router>
      </BreadcrumbsProvider>
    </ToastProvider>
  );
}

App.propTypes = {
  dispatch: PropTypes.func,
};

export default connect()(multilanguage(App));
