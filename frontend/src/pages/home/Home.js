import React from "react";
import MetaTags from "react-meta-tags";
import BannerFourteen from "../../wrappers/banner/BannerFourteen";
import HeroSliderFive from "../../wrappers/hero-slider/HeroSliderFive";
import LayoutThree from "../../layouts/LayoutThree";

import TabProductEighteen from "../../wrappers/product/TabProductEighteen";
import CountDownThree from "../../wrappers/countdown/CountDownThree";
import NewsletterThree from "../../wrappers/newsletter/NewsletterThree";

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
      <LayoutThree
        headerTop="visible"
        headerContainerClass="container-fluid"
        headerBorderStyle="fluid-border"
        headerPaddingClass="header-padding-2"
      >
        {/* hero slider */}
        <HeroSliderFive />
        {/* product tab */}
        <TabProductEighteen
          category="flower"
          spaceBottomClass="pb-70"
          productTabClass="product-tab-fruits"
        />
        <BannerFourteen spaceTopClass="pt-95" spaceBottomClass="pb-70" />
        {/* countdown */}
        <CountDownThree
          spaceBottomClass="pb-100"
          dateTime="December 13, 2020 12:12:00"
          countDownImage="/assets/img/banner/offer.png"
        />

        {/* newsletter */}
        <NewsletterThree
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          subscribeBtnClass="dark-red-subscribe"
        />
      </LayoutThree>
    </>
  );
};

export default Home;
