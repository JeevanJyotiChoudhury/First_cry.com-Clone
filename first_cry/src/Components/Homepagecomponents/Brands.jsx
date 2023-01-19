import React from "react";
import bandbanner_data from "../../db.json";
import band_data from "../../db.json";

const Brands = () => {
  let bandbannerdata = bandbanner_data.brand_banner;
  let banddata = band_data.brands;
  return (
    <div>
      <div>
        {bandbannerdata.map((el) => {
          return <img src={el.image} alt="" />;
        })}
      </div>
      <div>
        {banddata.map((elem) => {
          return <img src={elem.image} alt="" />;
        })}
      </div>
    </div>
  );
};

export default Brands;
