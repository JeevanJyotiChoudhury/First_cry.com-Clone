import React from "react";
import essentials_data from "../../db.json";

const Dailyessentials = () => {
  let essentialsdata = essentials_data.daily_essentials;
  return (
    <div>
      {essentialsdata.map((el) => {
        return <img src={el.image} alt="" />;
      })}
    </div>
  );
};

export default Dailyessentials;
