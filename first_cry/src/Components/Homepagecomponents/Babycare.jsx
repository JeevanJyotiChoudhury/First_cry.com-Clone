import React from "react";
import babycare_data from "../../db.json";

const Babycare = () => {
  let babycaredata = babycare_data.baby_care;
  return (
    <div>
      {babycaredata.map((el) => {
        return <img src={el.image} alt="" />;
      })}
    </div>
  );
};

export default Babycare;
