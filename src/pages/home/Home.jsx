import React from "react";
import Banner from "./banner/Banner";
import { Wrapper } from "../../shared/wrapper/Wrapper";
import Intro from "../../components/intro/Intro";
import { contentData } from "../../config/contentData";

const Home = () => {
  return (
    <Wrapper>
      <Banner />
      <Intro content={contentData} introHeading={"Passionate Developer"} />
    </Wrapper>
  );
};

export default Home;
