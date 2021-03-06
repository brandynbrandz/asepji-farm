import React, { useEffect, Suspense, lazy } from "react";
import PropTypes from "prop-types";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { multilanguage, loadLanguages } from "redux-multilanguage";
import { connect } from "react-redux";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";

// home
const Home = lazy(() => import("./pages/home/Home"));

// other pages

const MyAccount = lazy(() => import("./pages/other/MyAccount"));
const LoginRegister = lazy(() => import("./pages/other/LoginRegister"));
const ComingSoon = lazy(() => import("./pages/other/ComingSoon"));
const About = lazy(() => import("./pages/other/About"));
const Contact = lazy(() => import("./pages/other/Contact"));

const Cart = lazy(() => import("./pages/other/Cart"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));
const ForgotPassword = lazy(() => import("./pages/other/ForgotPassword"));

// shop page
const ShopGridFilter = lazy(() => import("./pages/shop/ShopGridFilter"));

// product page
const ProductTabLeft = lazy(() =>
  import("./pages/shop-product/ProductTabLeft")
);

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
            <Suspense
              fallback={
                <div className="asepji-preloader-wrapper">
                  <div className="asepji-preloader">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              }
            >
              <Switch>
                <Route
                  exact
                  path={process.env.PUBLIC_URL + "/"}
                  component={Home}
                />

                {/* Other pages */}

                <Route
                  path={process.env.PUBLIC_URL + "/my-account"}
                  component={MyAccount}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/login-register"}
                  component={LoginRegister}
                />

                <Route
                  path={process.env.PUBLIC_URL + "/cart"}
                  component={Cart}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/wishlist"}
                  component={Wishlist}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/about"}
                  component={About}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/wishlist"}
                  component={Wishlist}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/contact"}
                  component={Contact}
                />

                {/* Shop */}
                <Route
                  path={process.env.PUBLIC_URL + "/shop"}
                  component={ShopGridFilter}
                />
                <Route
                  path={process.env.PUBLIC_URL + "/password-recovery"}
                  component={ForgotPassword}
                />

                {/* Product */}
                {/* <Route
                  path={process.env.PUBLIC_URL + "/product/:id"}
                  render={(routeProps) => (
                    <Product {...routeProps} key={routeProps.match.params.id} />
                  )}
                /> */}
                <Route
                  path={process.env.PUBLIC_URL + "/product/:id"}
                  component={ProductTabLeft}
                />
                <Route component={ComingSoon} />
              </Switch>
            </Suspense>
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
