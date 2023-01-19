import React from "react";
import Navbar from "./Navbar";
import Bottomnavbar from "./Bottomnavbar";
import Topslider from "./Homepagecomponents/Topslider";
import Premiumboutiques from "./Homepagecomponents/Premiumboutiques";
import Footer from "./Footer";
import data from "../db.json";
import Colorshade from "./Homepagecomponents/Colorshade";
import Styleparade from "./Homepagecomponents/Styleparade";
import Brands from "./Homepagecomponents/Brands";
import Occasion from "./Homepagecomponents/Occasion";
import Dailyessentials from "./Homepagecomponents/Dailyessentials";
import Dipers from "./Homepagecomponents/Dipers";
import Bath from "./Homepagecomponents/Bath";
import Feeding from "./Homepagecomponents/Feeding";
import Toys from "./Homepagecomponents/Toys";
import Gearactivity from "./Homepagecomponents/Gearactivity";
import Babyaccess from "./Homepagecomponents/Babyaccess";
import Library from "./Homepagecomponents/Library";
import Babycare from "./Homepagecomponents/Babycare";
import Moms from "./Homepagecomponents/Moms";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Bottomnavbar />
      <Topslider />
      <Premiumboutiques />
      <Colorshade />
      <Styleparade />
      {/* <Brands />
      <Occasion />
      <Dailyessentials />
      <Dipers />
      <Bath />
      <Feeding />
      <Toys />
      <Gearactivity />
      <Babyaccess />
      <Library />
      <Babycare />
      <Moms/> */}
      <Footer />
    </div>
  );
};

export default Homepage;
