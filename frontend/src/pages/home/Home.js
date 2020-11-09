import React from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";

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
      ></LayoutOne>
    </>
  );
};

export default Home;
