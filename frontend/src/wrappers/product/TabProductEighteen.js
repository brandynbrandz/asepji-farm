import PropTypes from "prop-types";
import React from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

import SectionTitleThree from "../../components/section-title/SectionTitleThree";
import ProductGridSeven from "./ProductGridSeven";

const TabProductEighteen = ({
  spaceTopClass,
  spaceBottomClass,
  category,
  containerClass,
  productTabClass,
  extraClass,
}) => {
  return (
    <div
      className={`product-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      } ${extraClass ? extraClass : ""}`}
    >
      <div className={`${containerClass ? containerClass : "container"}`}>
        <Tab.Container defaultActiveKey="bestSeller">
          <div className="container">
            <div className="col-lg-6">
              <SectionTitleThree
                titleText="Featured products"
                positionClass="text-center"
              />
            </div>

            <Nav
              variant="pills"
              className={`product-tab-list pt-35 pb-60 text-center ${
                productTabClass ? productTabClass : ""
              }`}
            >
              <Nav.Item>
                <Nav.Link eventKey="newArrival">
                  <h4>New Arrivals</h4>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="bestSeller">
                  <h4>Best Sellers</h4>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="saleItems">
                  <h4>Sale Items</h4>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </div>

          <Tab.Content>
            <Tab.Pane eventKey="newArrival">
              <div className="row">
                <ProductGridSeven
                  category={category}
                  type="new"
                  limit={8}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="bestSeller">
              <div className="row">
                <ProductGridSeven
                  category={category}
                  type="bestSeller"
                  limit={8}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="saleItems">
              <div className="row">
                <ProductGridSeven
                  category={category}
                  type="saleItems"
                  limit={8}
                  spaceBottomClass="mb-25"
                />
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
        <div className="view-more text-center mt-20 toggle-btn6 col-12">
          <Link className="loadMore6" to={process.env.PUBLIC_URL + "/shop"}>
            VIEW MORE PRODUCTS
          </Link>
        </div>
      </div>
    </div>
  );
};

TabProductEighteen.propTypes = {
  category: PropTypes.string,
  containerClass: PropTypes.string,
  extraClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default TabProductEighteen;
