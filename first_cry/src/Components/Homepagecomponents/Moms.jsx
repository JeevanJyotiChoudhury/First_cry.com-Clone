import React from "react";
import moms_data from "../../db.json";

const Moms = () => {
  let momsdata = moms_data.moms;
  return (
    <div>
      {momsdata.map((el) => {
        return <img src={el.image} alt="" />;
      })}
    </div>
  );
};

export default Moms;
