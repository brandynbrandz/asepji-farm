import PropTypes from "prop-types";
import React from "react";
import bannerData from "../../data/banner/banner-fourteen.json";
import BannerFourteenSingle from "../../components/banner/BannerFourteenSingle.js";

const BannerFourteen = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`banner-area ${spaceTopClass ? spaceTopClass : ""}  ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="row">
          {bannerData &&
            bannerData.map((single, key) => {
              return (
                <BannerFourteenSingle
                  data={single}
                  key={key}
                  spaceBottomClass="mb-70"
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

BannerFourteen.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
};

export default BannerFourteen;
