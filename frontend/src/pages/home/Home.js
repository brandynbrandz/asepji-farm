import React from "react";
import MetaTags from "react-meta-tags";
// import HeroSliderEighteen from "../../wrappers/hero-slider/HeroSliderEighteen";

import LayoutOne from "../../layouts/LayoutOne";
import TabProductEighteen from "../../wrappers/product/TabProductEighteen";

const Home = () => {
  return (
    <>
      <MetaTags>
        <title>Asepji | Farm Home</title>

        <meta
          name="description"
          content="Asepji, the most affordable farm produce."
        />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        {/* hero slider */}
        {/* <HeroSliderEighteen /> */}
        {/* product tab */}
        <TabProductEighteen category="flower" spaceBottomClass="pb-70" />
      </LayoutOne>
    </>
  );
};

export default Home;
