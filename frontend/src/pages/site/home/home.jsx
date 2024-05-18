import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import MainContext from "../../../context/context";
import SimpleSlider from "../../../components/site/Slider/Slider";
import Featured from "../../../components/site/Featured/Featured";
import Awesome from "../../../components/site/Awesome/Awesome";
import Banner from "../../../components/site/Banner/Banner";

const Home = () => {
  const { data, setData } = useContext(MainContext);
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner/>
      <Featured />
      <Awesome />
    </>
  );
};

export default Home;
