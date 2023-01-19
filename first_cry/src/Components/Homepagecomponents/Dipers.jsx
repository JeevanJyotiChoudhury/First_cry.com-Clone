import React from "react";
import dipersbanner_data from "../../db.json";
import dipers_data from "../../db.json";

const Dipers = () => {
  let dipersbannerdata = dipersbanner_data.dipers_banner;
  let dipersdata = dipers_data.dipers;
  return (
    <div>
      <div>
        {dipersbannerdata.map((el) => {
          return <img src={el.image} alt="" />;
        })}
      </div>
      <div>
        {dipersdata.map((elem) => {
          return <img src={elem.image} alt="" />;
        })}
      </div>
    </div>
  );
};

export default Dipers;
